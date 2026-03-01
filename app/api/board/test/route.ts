import { NextResponse } from 'next/server';

export async function GET() {
    const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
        return NextResponse.json({
            status: 'error',
            message: '환경변수 없음',
            vars: {
                UPSTASH_REDIS_REST_URL: !!process.env.UPSTASH_REDIS_REST_URL,
                UPSTASH_REDIS_REST_TOKEN: !!process.env.UPSTASH_REDIS_REST_TOKEN,
                KV_REST_API_URL: !!process.env.KV_REST_API_URL,
                KV_REST_API_TOKEN: !!process.env.KV_REST_API_TOKEN,
            }
        });
    }

    try {
        const res = await fetch(`${url}/ping`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.text();
        return NextResponse.json({ status: 'ok', ping: data, url_prefix: url.slice(0, 40) });
    } catch (e) {
        return NextResponse.json({ status: 'error', message: String(e) });
    }
}
