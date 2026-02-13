'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth-store';
import { extractApiError } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function SignupPage() {
  const router = useRouter();
  const register = useAuthStore((s) => s.register);
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    first_name: '',
    last_name: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.first_name || !form.last_name) {
      toast.error('모든 필드를 입력해주세요');
      return;
    }
    if (form.password !== form.passwordConfirm) {
      toast.error('비밀번호가 일치하지 않습니다');
      return;
    }
    if (form.password.length < 8) {
      toast.error('비밀번호는 8자 이상이어야 합니다');
      return;
    }
    setIsLoading(true);
    try {
      await register({
        email: form.email,
        password: form.password,
        first_name: form.first_name,
        last_name: form.last_name,
      });
      toast.success('회원가입 성공! 로그인해주세요');
      router.push('/login');
    } catch (err) {
      toast.error(extractApiError(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">회원가입</CardTitle>
        <CardDescription>FarmSense 계정을 생성합니다</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label htmlFor="last_name" className="text-sm font-medium">성</label>
              <Input id="last_name" placeholder="홍" value={form.last_name} onChange={(e) => update('last_name', e.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="first_name" className="text-sm font-medium">이름</label>
              <Input id="first_name" placeholder="길동" value={form.first_name} onChange={(e) => update('first_name', e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">이메일</label>
            <Input id="email" type="email" placeholder="email@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} autoComplete="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">비밀번호</label>
            <Input id="password" type="password" placeholder="8자 이상" value={form.password} onChange={(e) => update('password', e.target.value)} autoComplete="new-password" />
          </div>
          <div className="space-y-2">
            <label htmlFor="passwordConfirm" className="text-sm font-medium">비밀번호 확인</label>
            <Input id="passwordConfirm" type="password" placeholder="비밀번호 재입력" value={form.passwordConfirm} onChange={(e) => update('passwordConfirm', e.target.value)} autoComplete="new-password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? '가입 중...' : '회원가입'}
          </Button>
          <p className="text-sm text-muted-foreground">
            이미 계정이 있으신가요?{' '}
            <Link href="/login" className="text-primary hover:underline">
              로그인
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
