import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.farmsense.kr';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get('authorization') || '';

    // [DEBUG] Vercel Functions 탭에서 확인
    console.log('[billing/checkout] authHeader:', authHeader ? `present (${authHeader.slice(0, 20)}...)` : 'MISSING');
    console.log('[billing/checkout] target URL:', `${API_URL}/api/v1/billing/checkout/create/`);

    const res = await fetch(`${API_URL}/api/v1/billing/checkout/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    console.log('[billing/checkout] Django status:', res.status, '| body:', text.slice(0, 200));

    let data: Record<string, unknown> = {};
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: `Django 응답 파싱 오류: ${text.slice(0, 100)}` }, { status: 502 });
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[billing/checkout] proxy error:', error);
    return NextResponse.json({ error: '결제 세션 생성 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
