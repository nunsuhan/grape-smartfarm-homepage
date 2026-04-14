'use client';

import { create } from 'zustand';
import { api, setTokens, clearTokens, getAccessToken } from './api-client';

interface User {
  id: number;
  phone?: string;
  username?: string;
  email?: string;
  farm_name?: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;

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
      setTimeout(() => {
        get().fetchProfile().catch(() => {
          clearTokens();
          document.cookie = 'access_token=; path=/; max-age=0';
          set({ user: null, isLoggedIn: false });
        });
      }, 100);
    }
  },

  logout: () => {
    clearTokens();
    document.cookie = 'access_token=; path=/; max-age=0';
    set({ user: null, isLoggedIn: false });
  },

  fetchProfile: async () => {
    try {
      const { data } = await api.get('/auth/profile/');
      set({
        user: {
          id: data.id,
          phone: data.phone,
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
