import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.farmsense.kr';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch(`${API_URL}/api/v1/billing/checkout/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('billing/checkout proxy error:', error);
    return NextResponse.json({ error: '결제 세션 생성 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
