import { NextRequest, NextResponse } from 'next/server';
import { codeStore } from '../store';

export async function POST(req: NextRequest) {
  try {
    const { phone, code } = await req.json();

    const cleaned = phone.replace(/[^0-9]/g, '');
    const stored = codeStore.get(cleaned);

    if (!stored) {
      return NextResponse.json({ success: false, message: '인증번호가 만료됐습니다. 다시 요청해주세요.' }, { status: 400 });
    }

    if (Date.now() > stored.expiresAt) {
      codeStore.delete(cleaned);
      return NextResponse.json({ success: false, message: '인증번호가 만료됐습니다. 다시 요청해주세요.' }, { status: 400 });
    }

    if (stored.code !== String(code)) {
      return NextResponse.json({ success: false, message: '인증번호가 일치하지 않습니다.' }, { status: 400 });
    }

    // 인증 성공 — 코드 삭제
    codeStore.delete(cleaned);

    const verifiedToken = `verified_${cleaned}_${Date.now()}`;

    return NextResponse.json({ success: true, verifiedToken });
  } catch (err) {
    console.error('SMS verify error:', err);
    return NextResponse.json({ success: false, message: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
