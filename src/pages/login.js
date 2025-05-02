import React from 'react';
import Head from 'next/head';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // adjust this path

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/card-finder';
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login - TravelCardInsider</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Login to Access Card Finder</h1>
        <form onSubmit={handleLogin}>
          <label>Email:<br /><input type="email" name="email" required /></label><br /><br />
          <label>Password:<br /><input type="password" name="password" required /></label><br /><br />
          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
}
