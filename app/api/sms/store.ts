// 공유 인증코드 저장소 (서버 메모리)
// Vercel Serverless: 같은 인스턴스에서 요청이 처리되면 공유됩니다.
export const codeStore = new Map<string, { code: string; expiresAt: number }>();

// SMS 인증 완료 토큰 저장소 (10분 유효)
export const verifiedTokenStore = new Map<string, { phone: string; expiresAt: number }>();
