import { useEffect, useState } from 'react';
import { Home } from '../container/Home';
import { Register } from '../container/Register'

export default function Index() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (window !== undefined) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setAccessToken(token);
      }
    }
  }, []);

  return !accessToken ? <Register setToken={setAccessToken} /> : <Home setToken={setAccessToken} />;
}