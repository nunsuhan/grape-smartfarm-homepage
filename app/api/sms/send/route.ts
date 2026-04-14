import { NextRequest, NextResponse } from 'next/server';
import { codeStore } from '../store';

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    // 휴대폰 번호 유효성 검사
    const cleaned = phone.replace(/[^0-9]/g, '');
    if (!/^01[0-9]{8,9}$/.test(cleaned)) {
      return NextResponse.json({ success: false, message: '올바른 휴대폰 번호를 입력해주세요.' }, { status: 400 });
    }

    // 6자리 인증번호 생성
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 3 * 60 * 1000; // 3분

    // 메모리에 저장
    codeStore.set(cleaned, { code, expiresAt });

    // 알리고 SMS 발송
    const params = new URLSearchParams({
      key: process.env.ALIGO_API_KEY!,
      user_id: process.env.ALIGO_USER_ID!,
      sender: process.env.ALIGO_SENDER!,
      receiver: cleaned,
      msg: `[FarmSense] 인증번호 ${code} (3분 이내 입력)`,
      msg_type: 'SMS',
      testmode_yn: process.env.NODE_ENV === 'production' ? 'N' : 'Y',
    });

    const aligoRes = await fetch('https://apis.aligo.in/send/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const aligoData = await aligoRes.json();

    if (aligoData.result_code < 1) {
      console.error('알리고 발송 실패:', aligoData);
      return NextResponse.json({ success: false, message: '문자 발송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: '인증번호가 발송되었습니다.' });
  } catch (err) {
    console.error('SMS send error:', err);
    return NextResponse.json({ success: false, message: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
