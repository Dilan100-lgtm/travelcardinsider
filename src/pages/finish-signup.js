// pages/finish-signup.jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import {
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth';

export default function FinishSignup() {
  const router = useRouter();
  const [msg, setMsg] = useState('Finishing sign-in…');

  useEffect(() => {
    // 1️⃣ Wait until Next.js has the full URL
    if (!router.isReady) return;

    const href   = window.location.href;
    const emailQ = router.query.email;                // ?email=… path
    const emailL = window.localStorage.getItem('emailForSignIn');
    const email  = emailQ || emailL;

    if (!isSignInWithEmailLink(auth, href) || !email) {
      setMsg('Invalid link. Please request a new one.');
      return;
    }

    signInWithEmailLink(auth, email, href)
      .then(() => {
        localStorage.removeItem('emailForSignIn');
        const dest = router.query.redirectTo || '/';
        router.replace(dest);
      })
      .catch(() => setMsg('Link expired or already used. Please request a new one.'));
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-xl font-semibold text-gray-800">{msg}</h1>
    </main>
  );
}
