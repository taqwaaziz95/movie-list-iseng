import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try { await register(email, password, name); } catch (e) { setErr(e.message); }
  }

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="card w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold mb-6">Create your account ✨</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
          <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" placeholder="Password (min 6 chars)" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {err && <p className="text-red-400">{err}</p>}
          <button className="btn w-full">Register</button>
        </form>
        <p className="text-sm text-gray-400 mt-6">Have an account? <Link href="/login" className="link">Sign in</Link></p>
      </div>
    </div>
  )
}
