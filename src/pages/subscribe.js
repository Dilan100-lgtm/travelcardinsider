// File: pages/subscribe.js

import React, { useState } from 'react';
import Head from 'next/head';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import toast, { Toaster } from 'react-hot-toast';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Enter your email.');
      return;
    }

    setLoading(true);
    toast.loading('Sending login link...');

    const actionCodeSettings = {
      url: `${window.location.origin}/finish-signup?redirectTo=/`,
      handleCodeInApp: true,
    };

    try {
      window.localStorage.setItem('emailForSignIn', email);
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      const userRef = doc(db, 'subscribers', email);
      await setDoc(userRef, {
        email,
        createdAt: serverTimestamp(),
        source: 'subscribe_page',
      }, { merge: true });

      toast.dismiss();
      toast.success('Check your email to confirm!');
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Subscribe | TravelCardInsider</title>
        <meta name="description" content="Subscribe to unlock AI travel card tools and receive expert credit card reviews." />
        <link rel="canonical" href="https://www.travelcardinsider.com/subscribe" />
      </Head>

      <Toaster position="top-center" />

      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold mb-4 text-center">Subscribe to Unlock Tools</h1>
              <p className="mb-6 text-gray-600 text-center">
                Enter your email to get instant access to premium tools and travel credit card insights.
              </p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Login Link'}
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                We will email you a magic login link. You can unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-green-600 font-semibold text-xl">Success!</h2>
              <p className="mt-4 text-gray-700">Check your inbox for the magic sign-in link.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
