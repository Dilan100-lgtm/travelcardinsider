// pages/subscribe.tsx
import { useState, FormEvent } from 'react';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { app } from '../lib/firebase'; // Adjust path to your Firebase init file
import getActionCodeSettings from '../lib/firebase/actionCodeSettings';
import Toast from '../components/Toast'; // Adjust path if needed

const SubscribePage = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // For inline error below input
  const [success, setSuccess] = useState<boolean>(false);
  const [toastInfo, setToastInfo] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const auth = getAuth(app);
  const actionCodeSettings = getActionCodeSettings();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Clear inline error
    setToastInfo(null); // Clear previous toast
    setSuccess(false);

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      const errMsg = 'Please enter a valid email address.';
      setError(errMsg); // Show inline error
      setToastInfo({ type: 'error', message: errMsg }); // Also show toast error
      setLoading(false);
      return;
    }

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Save email to localStorage
      window.localStorage.setItem('emailForSignIn', email);

      setSuccess(true);
      setEmail(''); // Optionally clear email field on success
      setToastInfo({ type: 'success', message: 'Magic link sent. Check your inbox!' });

    } catch (err: any) {
      console.error('Firebase Error:', err);
      const errorMessage = err.message || 'Failed to send sign-in link. Please try again.';
      setError(errorMessage); // Show inline error
      setToastInfo({ type: 'error', message: errorMessage }); // Show toast error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Centered container with top margin */}
      <div className="max-w-md w-full space-y-8 mx-auto mt-12">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Unlock Premium Tools
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email to receive a magic link to sign in. No password needed!
          </p>
        </div>

        {!success ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            {/* Inline Error Display */}
            {error && !toastInfo && ( // Show inline only if no toast is active for the same error
              <div className="text-red-600 text-sm px-1 py-1">
                {error}
              </div>
            )}

            <div>
              {/* Polished Button */}
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Magic Link'
                )}
              </button>
            </div>
          </form>
        ) : (
          // Polished Success Confirmation State
           <div className="flex flex-col items-center text-center p-6 bg-green-50 border border-green-300 text-green-800 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500 mb-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-lg font-semibold mb-1">Check your inbox!</h3>
              <p className="text-sm text-green-700">A secure sign-in link has been sent to your email.</p>
          </div>
        )}
      </div>

      {/* Toast Notification Area */}
      {toastInfo && (
        <Toast
          message={toastInfo.message}
          type={toastInfo.type}
          onDismiss={() => setToastInfo(null)} // Clear toast state on dismiss
        />
      )}
    </div>
  );
};

export default SubscribePage;