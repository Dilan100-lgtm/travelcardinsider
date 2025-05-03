// pages/auth/callback.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { app } from '../../lib/firebase'; // Adjust path to your Firebase init file

const AuthCallbackPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth(app);

  useEffect(() => {
    // Ensure window object is available and auth is initialized
    if (typeof window !== 'undefined' && auth) {
      const currentUrl = window.location.href;

      if (isSignInWithEmailLink(auth, currentUrl)) {
        let email = window.localStorage.getItem('emailForSignIn');

        if (!email) {
          // Critical step: Prompt user for email if not found in localStorage
          // This handles cases where the link is opened on a different browser/device.
          // For simplicity, we show an error here. A production app should prompt.
          // email = window.prompt('Please provide your email for confirmation:');
          // if (!email) {
             setError('Sign-in email not found in this browser. Please return to the original browser or try subscribing again.');
             setLoading(false);
             // Consider redirecting to /subscribe after a delay
             // setTimeout(() => router.push('/subscribe'), 7000);
             return;
          // }
        }

        // Disable loading indicator before potential prompt/error or success redirect
        // setLoading(false);

        // Proceed with sign-in using the retrieved or prompted email
        signInWithEmailLink(auth, email, currentUrl)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            // Signed in successfully.
            console.log('Successfully signed in:', result.user);
            // Redirect to the intended protected page
            router.replace('/rewards'); // Adjust target route (e.g., /dashboard, /account)
            // Loading state is implicitly ended by the redirect
          })
          .catch((err) => {
            console.error('Firebase Sign In Error:', err);
            // Provide more specific messages based on common error codes
            let userMessage = 'Failed to sign in with email link.';
            if (err.code === 'auth/invalid-action-code') {
                userMessage = 'Sign-in link is invalid or expired. Please request a new one.';
            } else if (err.code === 'auth/invalid-email') {
                 userMessage = 'Invalid email format used for sign-in link.';
            }
            setError(userMessage);
            setLoading(false);
             // Consider redirecting to /subscribe after a delay
            // setTimeout(() => router.push('/subscribe'), 7000);
          });
      } else {
        // If the URL isn't a valid sign-in link
        setError('Invalid or missing sign-in link parameters.');
        setLoading(false);
        // Consider redirecting to home or subscribe page
        // setTimeout(() => router.push('/'), 5000);
      }
    }
  }, [auth, router]); // Rerun effect if auth or router changes

  // Render loading or error state
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="p-8 bg-white shadow-md rounded-lg text-center max-w-md w-full">
        {loading && (
          <>
            {/* Enhanced Loading Spinner */}
            <svg className="animate-spin h-12 w-12 text-indigo-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-medium text-gray-800">Verifying Sign-In Link</p>
            <p className="text-sm text-gray-600 mt-1">Please wait a moment...</p>
          </>
        )}
        {error && (
          // Error Display
          <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4" role="alert">
             <p className="font-bold mb-1">Sign-In Failed</p>
             <p className="text-sm">{error}</p>
             <p className="mt-3 text-sm">
                Please try signing in again from the{' '}
                <a href="/subscribe" className="font-medium text-indigo-600 hover:text-indigo-500 underline">
                   Subscribe page
                </a>.
             </p>
          </div>
        )}
        {/* Footer text for clarity when neither loading nor error */}
         {!loading && !error && (
             <p className="text-sm text-gray-500">Redirecting...</p>
         )}
      </div>
    </div>
  );
};

export default AuthCallbackPage;