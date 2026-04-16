import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.farmsense.kr';

// 연간 단건결제 승인 프록시
// POST /api/billing/payment/confirm → Django /api/v1/billing/payment/confirm/
// Body: { paymentKey, orderId, amount }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get('authorization') || '';

    const res = await fetch(`${API_URL}/api/v1/billing/payment/confirm/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authHeader ? { 'Authorization': authHeader } : {}),
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    let data: Record<string, unknown> = {};
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: `응답 파싱 오류: ${text.slice(0, 100)}` },
        { status: 502 }
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[billing/payment/confirm] proxy error:', error);
    return NextResponse.json(
      { error: '연간 결제 승인 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
