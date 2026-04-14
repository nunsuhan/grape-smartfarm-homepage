import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL)!,
  token: (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN)!,
});

export async function POST(req: NextRequest) {
  try {
    const { phone, code } = await req.json();

    const cleaned = phone.replace(/[^0-9]/g, '');
    const stored = await redis.get<string>(`sms:verify:${cleaned}`);

    if (!stored) {
      return NextResponse.json({ success: false, message: '인증번호가 만료됐습니다. 다시 요청해주세요.' }, { status: 400 });
    }

    if (stored !== String(code)) {
      return NextResponse.json({ success: false, message: '인증번호가 일치하지 않습니다.' }, { status: 400 });
    }

    // 인증 성공 — 키 삭제 + 인증 완료 토큰 발급 (10분 유효)
    await redis.del(`sms:verify:${cleaned}`);
    const verifiedToken = `verified_${cleaned}_${Date.now()}`;
    await redis.set(`sms:verified:${cleaned}`, verifiedToken, { ex: 600 });

    return NextResponse.json({ success: true, verifiedToken });
  } catch (err) {
    console.error('SMS verify error:', err);
    return NextResponse.json({ success: false, message: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
