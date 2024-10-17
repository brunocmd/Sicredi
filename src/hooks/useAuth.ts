import { Auth } from '../models/Auth';
import { ACCESS_TOKEN_KEY } from '../config/constants';

interface UseAuthResult {
  getAuth: () => Auth;
  setAuth: (auth: Auth) => void;
  removeAuth: () => void;
}

export const useAuth = (): UseAuthResult => {
  
  const getAuth = (): Auth => {
    return new Auth({
      accessToken: sessionStorage.getItem(ACCESS_TOKEN_KEY)
    });
  }

  const setAuth = (auth: Auth) => {
    if (auth.accessToken)
      sessionStorage.setItem(ACCESS_TOKEN_KEY, auth.accessToken);
  }

  const removeAuth = () => {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  }  

  return { getAuth, setAuth, removeAuth };
};
