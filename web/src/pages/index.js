import { useEffect } from 'react';
import Router from 'next/router';

export default function Home() {
  useEffect(() => { Router.replace('/movies'); }, []);
  return null;
}
