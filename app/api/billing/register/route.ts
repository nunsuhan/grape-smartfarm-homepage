import { NextRequest, NextResponse } from 'next/server';
import { verifiedTokenStore } from '../../sms/store';

export async function POST(req: NextRequest) {
  try {
    const { authKey, customerKey, verifiedToken } = await req.json();

    // 필수 파라미터 검증
    if (!authKey || !customerKey) {
      return NextResponse.json(
        { success: false, message: '빌링 인증 정보가 누락됐습니다.' },
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

    const authorization = Buffer.from(`${secretKey}:`).toString('base64');

    // 1. 빌링키 발급
    const issueRes = await fetch('https://api.tosspayments.com/v1/billing/authorizations/issue', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authorization}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authKey, customerKey }),
    });

    const issueData = await issueRes.json();

    if (!issueRes.ok) {
      console.error('빌링키 발급 실패:', issueData);
      return NextResponse.json(
        {
          success: false,
          message: issueData.message || '빌링키 발급에 실패했습니다.',
          code: issueData.code,
        },
        { status: issueRes.status },
      );
    }

    const billingKey = issueData.billingKey;

    // 2. 첫 결제 실행
    const orderId = `fs_billing_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const billingRes = await fetch(`https://api.tosspayments.com/v1/billing/${billingKey}`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authorization}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerKey,
        amount: 10000,
        orderId,
        orderName: 'FarmSense 월간 구독',
      }),
    });

    const billingData = await billingRes.json();

    if (!billingRes.ok) {
      console.error('첫 빌링 결제 실패:', billingData);
      return NextResponse.json(
        {
          success: false,
          message: billingData.message || '첫 결제에 실패했습니다.',
          code: billingData.code,
        },
        { status: billingRes.status },
      );
    }

    // 인증 토큰 사용 완료 — 삭제
    verifiedTokenStore.delete(verifiedToken);

    // TODO: Django 백엔드에 구독 정보 전달
    // POST https://api.farmsense.kr/api/subscriptions/
    // Body: { billingKey, customerKey, amount: 10000, orderId, userId, phone }
    console.log('빌링키 발급 및 첫 결제 완료 — Django 백엔드 연동 필요:', {
      billingKey,
      customerKey,
      orderId: billingData.orderId,
      amount: billingData.totalAmount,
      approvedAt: billingData.approvedAt,
    });

    return NextResponse.json({
      success: true,
      billing: {
        billingKey,
        orderId: billingData.orderId,
        amount: billingData.totalAmount,
        orderName: billingData.orderName,
        approvedAt: billingData.approvedAt,
      },
    });
  } catch (err) {
    console.error('Billing register error:', err);
    return NextResponse.json(
      { success: false, message: '구독 등록 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
