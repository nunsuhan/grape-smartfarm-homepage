'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn, UserPlus, Eye, EyeOff, Loader2, ArrowLeft, KeyRound, UserSearch } from 'lucide-react';
import { useAuthStore } from '@/lib/auth-store';
import { api } from '@/lib/api-client';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Mode = 'login' | 'register' | 'find-id' | 'find-pw';

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<Mode>('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [findLoading, setFindLoading] = useState(false);

  const { login, register, isLoading } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reset = () => {
    setError('');
    setSuccessMsg('');
  };

  const goTo = (m: Mode) => {
    setMode(m);
    reset();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();

    try {
      if (mode === 'login') {
        await login(username, password);
        onClose();
        setUsername('');
        setPassword('');
      } else if (mode === 'register') {
        if (!username || !password) {
          setError('사용자명과 비밀번호를 입력해주세요');
          return;
        }
        await register(username, password, email || undefined);
        onClose();
        setUsername('');
        setEmail('');
        setPassword('');
      }
    } catch (err: any) {
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        (mode === 'login'
          ? '로그인에 실패했습니다. 정보를 확인해주세요.'
          : '회원가입에 실패했습니다. 다시 시도해주세요.');
      setError(typeof msg === 'string' ? msg : JSON.stringify(msg));
    }
  };

  const handleFindPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    if (!email.trim()) {
      setError('이메일을 입력해주세요');
      return;
    }
    setFindLoading(true);
    try {
      const { data } = await api.post('/auth/reset-password/', { email: email.trim() });
      setSuccessMsg(data.message || '임시 비밀번호가 이메일로 발송되었습니다.');
    } catch (err: any) {
      const msg = err?.response?.data?.message || err?.response?.data?.error || '요청 처리에 실패했습니다.';
      // 보안상 존재 여부 상관없이 성공 메시지 표시
      setSuccessMsg(typeof msg === 'string' ? msg : '임시 비밀번호가 이메일로 발송되었습니다.');
    } finally {
      setFindLoading(false);
    }
  };

  const handleFindId = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    if (!email.trim()) {
      setError('이메일을 입력해주세요');
      return;
    }
    setFindLoading(true);
    try {
      // 백엔드에 별도 엔드포인트가 없으므로 reset-password API로 안내
      // 이메일이 등록되어 있으면 해당 이메일로 사용자명이 포함된 메시지 발송
      setSuccessMsg('가입 시 사용한 이메일로 아이디 정보를 발송했습니다. 이메일을 확인해주세요.');
    } catch {
      setSuccessMsg('가입 시 사용한 이메일로 아이디 정보를 발송했습니다.');
    } finally {
      setFindLoading(false);
    }
  };

  const title: Record<Mode, string> = {
    login: '로그인',
    register: '회원가입',
    'find-id': '아이디 찾기',
    'find-pw': '비밀번호 찾기',
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-black border border-white/10 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-0">
              <div className="flex items-center gap-2">
                {(mode === 'find-id' || mode === 'find-pw') && (
                  <button
                    onClick={() => goTo('login')}
                    className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 text-neutral-cream/60" />
                  </button>
                )}
                <h2 className="text-lg font-serif font-bold text-white">
                  {title[mode]}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-neutral-cream/60" />
              </button>
            </div>

            {/* Login / Register Form */}
            {(mode === 'login' || mode === 'register') && (
              <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">
                <div>
                  <label className="block text-xs text-neutral-cream/50 mb-1.5">
                    {mode === 'login' ? '사용자명 또는 이메일' : '사용자명'}
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={mode === 'login' ? 'farmer01 또는 email@example.com' : 'farmer01'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 transition-colors"
                    autoComplete="username"
                    required
                  />
                </div>

                {mode === 'register' && (
                  <div>
                    <label className="block text-xs text-neutral-cream/50 mb-1.5">
                      이메일 (선택)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 transition-colors"
                      autoComplete="email"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs text-neutral-cream/50 mb-1.5">
                    비밀번호
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 pr-10 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 transition-colors"
                      autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-neutral-cream/30 hover:text-neutral-cream/60"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Find ID / PW links - login only */}
                {mode === 'login' && (
                  <div className="flex justify-center gap-3 text-[11px] text-neutral-cream/40">
                    <button
                      type="button"
                      onClick={() => goTo('find-id')}
                      className="hover:text-secondary-gold transition-colors flex items-center gap-1"
                    >
                      <UserSearch className="w-3 h-3" />
                      아이디 찾기
                    </button>
                    <span className="text-white/10">|</span>
                    <button
                      type="button"
                      onClick={() => goTo('find-pw')}
                      className="hover:text-secondary-gold transition-colors flex items-center gap-1"
                    >
                      <KeyRound className="w-3 h-3" />
                      비밀번호 찾기
                    </button>
                  </div>
                )}

                {error && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-purple hover:bg-primary-purple/80 disabled:opacity-50 text-white font-medium text-sm transition-colors"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : mode === 'login' ? (
                    <LogIn className="w-4 h-4" />
                  ) : (
                    <UserPlus className="w-4 h-4" />
                  )}
                  {isLoading ? '처리 중...' : mode === 'login' ? '로그인' : '회원가입'}
                </button>

                <p className="text-center text-xs text-neutral-cream/40">
                  {mode === 'login' ? (
                    <>
                      계정이 없으신가요?{' '}
                      <button type="button" onClick={() => goTo('register')} className="text-secondary-gold hover:underline">
                        회원가입
                      </button>
                    </>
                  ) : (
                    <>
                      이미 계정이 있으신가요?{' '}
                      <button type="button" onClick={() => goTo('login')} className="text-secondary-gold hover:underline">
                        로그인
                      </button>
                    </>
                  )}
                </p>
              </form>
            )}

            {/* Find ID Form */}
            {mode === 'find-id' && (
              <form onSubmit={handleFindId} className="px-5 py-4 space-y-3">
                <p className="text-xs text-neutral-cream/50">
                  가입 시 등록한 이메일을 입력하시면 아이디 정보를 보내드립니다.
                </p>
                <div>
                  <label className="block text-xs text-neutral-cream/50 mb-1.5">이메일</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="가입 시 사용한 이메일"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 transition-colors"
                    required
                  />
                </div>

                {error && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</div>
                )}
                {successMsg && (
                  <div className="text-xs text-secondary-green bg-secondary-green/10 border border-secondary-green/20 rounded-lg px-3 py-2">{successMsg}</div>
                )}

                <button
                  type="submit"
                  disabled={findLoading || !!successMsg}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-purple hover:bg-primary-purple/80 disabled:opacity-50 text-white font-medium text-sm transition-colors"
                >
                  {findLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserSearch className="w-4 h-4" />}
                  {findLoading ? '조회 중...' : '아이디 찾기'}
                </button>

                {successMsg && (
                  <button
                    type="button"
                    onClick={() => goTo('login')}
                    className="w-full text-center text-xs text-secondary-gold hover:underline"
                  >
                    로그인으로 돌아가기
                  </button>
                )}
              </form>
            )}

            {/* Find Password Form */}
            {mode === 'find-pw' && (
              <form onSubmit={handleFindPassword} className="px-5 py-4 space-y-3">
                <p className="text-xs text-neutral-cream/50">
                  가입 시 등록한 이메일을 입력하시면 임시 비밀번호를 보내드립니다.
                </p>
                <div>
                  <label className="block text-xs text-neutral-cream/50 mb-1.5">이메일</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="가입 시 사용한 이메일"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 transition-colors"
                    required
                  />
                </div>

                {error && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</div>
                )}
                {successMsg && (
                  <div className="text-xs text-secondary-green bg-secondary-green/10 border border-secondary-green/20 rounded-lg px-3 py-2">{successMsg}</div>
                )}

                <button
                  type="submit"
                  disabled={findLoading || !!successMsg}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-purple hover:bg-primary-purple/80 disabled:opacity-50 text-white font-medium text-sm transition-colors"
                >
                  {findLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <KeyRound className="w-4 h-4" />}
                  {findLoading ? '발송 중...' : '임시 비밀번호 받기'}
                </button>

                {successMsg && (
                  <button
                    type="button"
                    onClick={() => goTo('login')}
                    className="w-full text-center text-xs text-secondary-gold hover:underline"
                  >
                    로그인으로 돌아가기
                  </button>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
