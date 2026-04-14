import { NextRequest, NextResponse } from 'next/server';
import { verifiedTokenStore } from '../../sms/store';

export async function POST(req: NextRequest) {
  try {
    const { paymentKey, orderId, amount, verifiedToken } = await req.json();

    // 필수 파라미터 검증
    if (!paymentKey || !orderId || !amount) {
      return NextResponse.json(
        { success: false, message: '필수 결제 정보가 누락됐습니다.' },
        { status: 400 },
      );
    }

    // SMS 인증 토큰 검증
    if (!verifiedToken) {
      return NextResponse.json(
        { success: false, message: 'SMS 인증 토큰이 필요합니다.' },
        { status: 400 },
      );
    }

    const tokenData = verifiedTokenStore.get(verifiedToken);
    if (!tokenData || Date.now() > tokenData.expiresAt) {
      verifiedTokenStore.delete(verifiedToken);
      return NextResponse.json(
        { success: false, message: 'SMS 인증이 만료됐습니다. 다시 인증해주세요.' },
        { status: 400 },
      );
    }

    // 토스페이먼츠 시크릿 키 확인
    const secretKey = process.env.TOSS_SECRET_KEY;
    if (!secretKey) {
      console.error('TOSS_SECRET_KEY 환경변수가 설정되지 않았습니다.');
      return NextResponse.json(
        { success: false, message: '결제 시스템 설정 오류입니다. 관리자에게 문의해주세요.' },
        { status: 500 },
      );
    }

    // 토스페이먼츠 결제 승인 API 호출
    const authorization = Buffer.from(`${secretKey}:`).toString('base64');
    const tossRes = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authorization}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentKey, orderId, amount: Number(amount) }),
    });

    const tossData = await tossRes.json();

    if (!tossRes.ok) {
      console.error('토스페이먼츠 결제 승인 실패:', tossData);
      return NextResponse.json(
        {
          success: false,
          message: tossData.message || '결제 승인에 실패했습니다.',
          code: tossData.code,
        },
        { status: tossRes.status },
      );
    }

    // 인증 토큰 사용 완료 — 삭제
    verifiedTokenStore.delete(verifiedToken);

    // TODO: Django 백엔드에 결제 정보 전달
    // POST https://api.farmsense.kr/api/payments/
    // Body: { paymentKey, orderId, amount, method: tossData.method, approvedAt: tossData.approvedAt, userId, phone }
    console.log('결제 승인 완료 — Django 백엔드 연동 필요:', {
      paymentKey: tossData.paymentKey,
      orderId: tossData.orderId,
      amount: tossData.totalAmount,
      method: tossData.method,
      approvedAt: tossData.approvedAt,
    });

    return NextResponse.json({
      success: true,
      payment: {
        paymentKey: tossData.paymentKey,
        orderId: tossData.orderId,
        amount: tossData.totalAmount,
        orderName: tossData.orderName,
        method: tossData.method,
        approvedAt: tossData.approvedAt,
      },
    });
  } catch (err) {
    console.error('Payment confirm error:', err);
    return NextResponse.json(
      { success: false, message: '결제 처리 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
