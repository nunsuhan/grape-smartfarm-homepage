import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';
import { Post } from '../route';

// GET /api/board/[id] - 단일 조회
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        const post = await kv.get<Post>(`board:post:${params.id}`);
        if (!post) return NextResponse.json({ error: '글을 찾을 수 없습니다' }, { status: 404 });

        const { password, ...safe } = post;
        return NextResponse.json(safe);
    } catch (e) {
        return NextResponse.json({ error: '조회 실패' }, { status: 500 });
    }
}

// PUT /api/board/[id] - 수정
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const { category, title, content, password } = body;

        const post = await kv.get<Post>(`board:post:${params.id}`);
        if (!post) return NextResponse.json({ error: '글을 찾을 수 없습니다' }, { status: 404 });
        if (post.password !== password) return NextResponse.json({ error: '비밀번호가 틀렸습니다' }, { status: 403 });

        const updated: Post = { ...post, category, title, content };
        await kv.set(`board:post:${params.id}`, updated);

        const { password: _, ...safe } = updated;
        return NextResponse.json(safe);
    } catch (e) {
        return NextResponse.json({ error: '수정 실패' }, { status: 500 });
    }
}

// DELETE /api/board/[id] - 삭제
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const { password } = body;

        const post = await kv.get<Post>(`board:post:${params.id}`);
        if (!post) return NextResponse.json({ error: '글을 찾을 수 없습니다' }, { status: 404 });
        if (post.password !== password) return NextResponse.json({ error: '비밀번호가 틀렸습니다' }, { status: 403 });

        await kv.del(`board:post:${params.id}`);
        await kv.lrem('board:list', 0, params.id);

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ error: '삭제 실패' }, { status: 500 });
    }
}
