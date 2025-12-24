import { create } from 'zustand';

interface User {
    name: string;
    shopName: string;
    language: string;
}

interface AuthState {
    mobile: string | null;
    isAuthenticated: boolean;
    user: User | null;
    setMobile: (mobile: string) => void;
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    mobile: null,
    isAuthenticated: false,
    user: null,
    setMobile: (mobile) => set({ mobile }),
    login: (user) => set({ isAuthenticated: true, user }),
    logout: () => set({ mobile: null, isAuthenticated: false, user: null }),
}));
