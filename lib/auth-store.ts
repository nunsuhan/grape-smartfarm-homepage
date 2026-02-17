'use client';

import { create } from 'zustand';
import { api, setTokens, clearTokens, getAccessToken } from './api-client';

interface User {
  id: number;
  username: string;
  email: string;
  farm_name?: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;

  login: (usernameOrEmail: string, password: string) => Promise<void>;
  register: (username: string, password: string, email?: string) => Promise<void>;
  logout: () => void;
  fetchProfile: () => Promise<void>;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,

  hydrate: () => {
    const token = getAccessToken();
    if (token) {
      set({ isLoggedIn: true });
      // fetchProfile은 non-blocking으로 실행 (UI 차단 방지)
      setTimeout(() => {
        get().fetchProfile().catch(() => {
          clearTokens();
          set({ user: null, isLoggedIn: false });
        });
      }, 100);
    }
  },

  login: async (usernameOrEmail: string, password: string) => {
    set({ isLoading: true });
    try {
      const isEmail = usernameOrEmail.includes('@');
      const payload = isEmail
        ? { email: usernameOrEmail, password }
        : { username: usernameOrEmail, password };

      const { data } = await api.post('/auth/login/', payload);
      setTokens(data.access, data.refresh);
      set({
        user: { id: 0, username: data.username, email: data.email || '' },
        isLoggedIn: true,
      });
      // 프로필 전체 조회
      await get().fetchProfile();
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (username: string, password: string, email?: string) => {
    set({ isLoading: true });
    try {
      await api.post('/auth/register/', { username, password, email });
      // 가입 후 자동 로그인
      await get().login(username, password);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    clearTokens();
    set({ user: null, isLoggedIn: false });
  },

  fetchProfile: async () => {
    try {
      const { data } = await api.get('/auth/profile/');
      set({
        user: {
          id: data.id,
          username: data.username,
          email: data.email,
          farm_name: data.farm_name,
        },
      });
    } catch {
      // 프로필 조회 실패해도 로그인 상태 유지
    }
  },
}));
