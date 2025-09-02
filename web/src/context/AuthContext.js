import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../lib/api';
import Router from 'next/router';

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api('/auth/me').then(
      (d) => { setUser(d.user); setLoading(false); },
      () => setLoading(false)
    );
  }, []);

  const login = async (email, password) => {
    const d = await api('/auth/login', { method: 'POST', body: { email, password } });
    setUser(d.user);
    Router.push('/movies');
  };
  const register = async (email, password, name) => {
    const d = await api('/auth/register', { method: 'POST', body: { email, password, name } });
    setUser(d.user);
    Router.push('/movies');
  };
  const logout = async () => {
    await api('/auth/logout', { method: 'POST' });
    setUser(null);
    Router.push('/login');
  };

  return <AuthCtx.Provider value={{ user, loading, login, register, logout }}>{children}</AuthCtx.Provider>;
}

export const useAuth = () => useContext(AuthCtx);
