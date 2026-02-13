import { create } from 'zustand';
import { api, setTokens, clearTokens, getAccessToken } from '@/lib/api-client';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  farm_name?: string;
  region?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; first_name: string; last_name: string }) => Promise<void>;
  logout: () => void;
  fetchProfile: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (email, password) => {
    const { data } = await api.post('/auth/login/', { username: email, password });
    setTokens(data.access, data.refresh);
    set({ isAuthenticated: true });
    // Fetch profile after login
    try {
      const profile = await api.get('/auth/profile/');
      set({ user: profile.data });
    } catch {
      // Profile fetch optional
    }
  },

  register: async (registerData) => {
    await api.post('/auth/register/', registerData);
  },

  logout: () => {
    clearTokens();
    set({ user: null, isAuthenticated: false });
  },

  fetchProfile: async () => {
    try {
      const { data } = await api.get('/auth/profile/');
      set({ user: data });
    } catch {
      // Ignore profile fetch errors
    }
  },

  initialize: async () => {
    const token = getAccessToken();
    if (!token) {
      set({ isLoading: false, isAuthenticated: false });
      return;
    }
    try {
      const { data } = await api.get('/auth/profile/');
      set({ user: data, isAuthenticated: true, isLoading: false });
    } catch {
      clearTokens();
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));
