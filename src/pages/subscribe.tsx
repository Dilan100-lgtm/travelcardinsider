import { useState, FormEvent } from 'react';
import Head from 'next/head';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { app } from '@/lib/firebase';
import getActionCodeSettings from '@/lib/firebase/actionCodeSettings';
import Toast from '@/components/Toast';
import styles from '@/styles/Subscribe.module.css';

const SubscribePage = () => {
  const [email, setEmail]   = useState('');
  const [loading, setLoad]  = useState(false);
  const [sent, setSent]     = useState(false);
  const [inlineErr, setErr] = useState<string | null>(null);
  const [toast, setToast]   = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const auth = getAuth(app);
  const acs  = getActionCodeSettings();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoad(true);
    setErr(null);
    setToast(null);

    if (!/\S+@\S+\.\S+/.test(email)) {
      const m = 'Please enter a valid e-mail address.';
      setErr(m);
      setToast({ type: 'error', message: m });
      setLoad(false);
      return;
    }

    try {
      await sendSignInLinkToEmail(auth, email, acs);
      window.localStorage.setItem('emailForSignIn', email);
      setSent(true);
      setToast({ type: 'success', message: 'Magic link sent – check your inbox!' });
      setEmail('');
    } catch (err: any) {
      const m = err?.message || 'Failed to send link – try again.';
      setErr(m);
      setToast({ type: 'error', message: m });
    } finally {
      setLoad(false);
    }
  }

  return (
    <>
      <Head>
        <title>Subscribe • TravelCardInsider</title>
        <meta name="description" content="Enter your e-mail to unlock premium travel-card tools." />
      </Head>

      <div className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.h1}>Unlock Premium Tools</h1>
          <p className={styles.sub}>
            Enter your e-mail to get a one-click sign-in link. No password needed.
          </p>

          {/* Success state */}
          {sent && (
            <p className={styles.success}>✅ Check your inbox for the magic link!</p>
          )}

          {/* Form */}
          {!sent && (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className={styles.input}
                />
                <button type="submit" disabled={loading} className={styles.btn}>
                  {loading ? (
                    <>
                      Sending
                      <span className={styles.spinner} />
                    </>
                  ) : (
                    'Send Magic Link'
                  )}
                </button>
              </div>

              {inlineErr && <p className={styles.error}>⚠ {inlineErr}</p>}
            </form>
          )}

          <p style={{ fontSize: '.8rem', color: '#6b7280' }}>
            We’ll e-mail you a secure link. You can unsubscribe anytime.
          </p>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}
    </>
  );
};

export default SubscribePage;
