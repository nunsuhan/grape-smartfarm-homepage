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
  hydrated: boolean;

  logout: () => void;
  fetchProfile: () => Promise<void>;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoggedIn: false,
  hydrated: false,

  hydrate: () => {
    const token = getAccessToken();
    const alreadyLoggedIn = get().isLoggedIn;
    // 이미 hydrate 완료 & 토큰 상태 변동 없으면 스킵
    if (get().hydrated && alreadyLoggedIn === !!token) return;
    set({ isLoggedIn: !!token, hydrated: true });
    if (token) {
      get().fetchProfile().catch(() => {
        clearTokens();
        document.cookie = 'access_token=; path=/; max-age=0';
        set({ user: null, isLoggedIn: false });
      });
    }
  },

  logout: () => {
    clearTokens();
    document.cookie = 'access_token=; path=/; max-age=0';
    set({ user: null, isLoggedIn: false });
  },

  fetchProfile: async () => {
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
  },
}));
