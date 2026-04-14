import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { codeStore, verifiedTokenStore } from '../store';

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

    // 암호학적으로 안전한 인증 토큰 생성 (10분 유효)
    const verifiedToken = crypto.randomBytes(32).toString('hex');
    verifiedTokenStore.set(verifiedToken, {
      phone: cleaned,
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    return NextResponse.json({ success: true, verifiedToken });
  } catch (err) {
    console.error('SMS verify error:', err);
    return NextResponse.json({ success: false, message: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
