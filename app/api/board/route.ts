import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export interface Post {
    id: string;
    category: string;
    title: string;
    author: string;
    content: string;
    password: string;
    date: string;
    answer?: string;
}

// GET /api/board - 목록 조회
export async function GET() {
    try {
        const ids: string[] = await kv.lrange('board:list', 0, -1);
        if (!ids || ids.length === 0) return NextResponse.json([]);

        const posts = await Promise.all(
            ids.map(async (id) => {
                const post = await kv.get<Post>(`board:post:${id}`);
                if (!post) return null;
                const { password, ...safe } = post;
                return safe;
            })
        );

        return NextResponse.json(posts.filter(Boolean));
    } catch (e) {
        return NextResponse.json({ error: '목록 조회 실패' }, { status: 500 });
    }
}

// POST /api/board - 글 작성
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { category, title, author, content, password } = body;

        if (!category || !title || !author || !content || !password) {
            return NextResponse.json({ error: '필수 항목을 입력해주세요' }, { status: 400 });
        }

        const id = `${Date.now()}`;
        const post: Post = {
            id,
            category,
            title,
            author,
            content,
            password,
            date: new Date().toISOString().slice(0, 10),
        };

        await kv.set(`board:post:${id}`, post);
        await kv.lpush('board:list', id);

        const { password: _, ...safe } = post;
        return NextResponse.json(safe, { status: 201 });
    } catch (e) {
        return NextResponse.json({ error: '글 작성 실패' }, { status: 500 });
    }
}
