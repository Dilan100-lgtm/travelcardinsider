// File: pages/subscribe.tsx
import { useState, FormEvent } from 'react';
import Head from 'next/head';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { app } from '@/lib/firebase';                   // ← adjust if your init file lives elsewhere
import getActionCodeSettings from '@/lib/firebase/actionCodeSettings';
import Toast from '@/components/Toast';                 // needs { message,type,onDismiss }

const SubscribePage = () => {
  /* ─────────────────────────────────────────────── state */
  const [email, setEmail]         = useState('');
  const [loading, setLoading]     = useState(false);
  const [inlineErr, setInlineErr] = useState<string | null>(null);
  const [sent, setSent]           = useState(false);
  const [toast, setToast]         = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  /* ─────────────────────────────────────────────── helpers */
  const auth = getAuth(app);
  const acs  = getActionCodeSettings();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setInlineErr(null);
    setToast(null);

    /* rudimentary e-mail check */
    if (!/\S+@\S+\.\S+/.test(email)) {
      const msg = 'Please enter a valid e-mail address.';
      setInlineErr(msg);
      setToast({ type: 'error', message: msg });
      setLoading(false);
      return;
    }

    try {
      await sendSignInLinkToEmail(auth, email, acs);
      window.localStorage.setItem('emailForSignIn', email);
      setSent(true);
      setEmail('');
      setToast({ type: 'success', message: 'Magic link sent – check your inbox!' });
    } catch (err: any) {
      console.error(err);
      const msg = err?.message || 'Failed to send link – try again.';
      setInlineErr(msg);
      setToast({ type: 'error', message: msg });
    } finally {
      setLoading(false);
    }
  };

  /* ─────────────────────────────────────────────── render */
  return (
    <>
      <Head>
        <title>Subscribe • TravelCardInsider</title>
        <meta
          name="description"
          content="Enter your e-mail to unlock our AI Card-Finder, Rewards Analyzer and other premium travel-card tools."
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* header copy */}
          <div>
            <h1 className="text-center text-3xl font-extrabold text-gray-900">
              Unlock Premium Tools
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your e-mail to get a one-click sign-in link.<br />
              <span className="whitespace-nowrap">No password needed.</span>
            </p>
          </div>

          {/* form or success card */}
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border
                             border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none
                             focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* inline error if no toast currently showing same */}
              {inlineErr && !toast && (
                <p className="text-red-600 text-sm">{inlineErr}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center items-center py-2 px-4 text-sm
                           font-medium rounded-md text-white bg-gradient-to-r
                           from-indigo-600 to-purple-600 hover:brightness-110
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                           disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  'Send Magic Link'
                )}
              </button>
            </form>
          ) : (
            /* confirmation UI */
            <div className="flex flex-col items-center text-center p-6 bg-green-50 border border-green-300
                            text-green-800 rounded-lg shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-green-500 mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-1">Check your inbox!</h3>
              <p className="text-sm text-green-700">
                We’ve e-mailed you a secure sign-in link.
              </p>
            </div>
          )}
        </div>

        {/* toast area */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onDismiss={() => setToast(null)}
          />
        )}
      </div>
    </>
  );
};

export default SubscribePage;
