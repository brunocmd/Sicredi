import { useState } from 'react';
import { login } from '../services/api/auth.service';
import { useAuth } from './useAuth';

interface UseLoginResult {
  loginUser: (username: string, password: string) => Promise<void>;
  error: Error | null;
  loading: boolean;
  logout: () => void;
}

export const useLogin = (): UseLoginResult => {
  const { setAuth, removeAuth } = useAuth();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loginUser = async (username: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const result = await login({ username, password });
      setAuth(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    removeAuth();
  };

  return { loginUser, error, loading, logout };
};

