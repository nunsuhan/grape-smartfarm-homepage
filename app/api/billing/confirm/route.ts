import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.farmsense.kr';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get('authorization') || '';

    if (!authHeader || authHeader === 'Bearer null' || authHeader === 'Bearer ') {
      return NextResponse.json(
        { error: '인증 토큰이 없습니다. 다시 로그인해주세요.' },
        { status: 401 },
      );
    }

    const res = await fetch(`${API_URL}/api/v1/billing/confirm/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(body),
    });

    let data;
    const text = await res.text();
    try {
      data = JSON.parse(text);
    } catch {
      console.error('billing/confirm: non-JSON response from Django:', text.slice(0, 500));
      return NextResponse.json(
        { error: `Django 서버 오류 (${res.status})` },
        { status: 502 },
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('billing/confirm proxy error:', error);
    return NextResponse.json({ error: '결제 승인 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
