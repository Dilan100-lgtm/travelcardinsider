// src/components/EmailGateComponent.jsx
import React, { useState } from 'react';
import { auth, db } from '@/lib/firebase'; // Adjust path if needed
import { sendSignInLinkToEmail } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

export default function EmailGateComponent({ requestedUrl = '/' }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }
    setLoading(true);
    toast.loading('Sending login link...');

    const actionCodeSettings = {
      // URL to redirect back to. Make sure this domain is whitelisted in Firebase Console.
      // Append the originally requested URL so we can redirect after sign-in.
      url: `${window.location.origin}/finish-signup?redirectTo=${encodeURIComponent(requestedUrl)}`,
      handleCodeInApp: true, // Must be true
    };

    try {
      // Save email temporarily for the redirect
      window.localStorage.setItem('emailForSignIn', email);

      // Send the magic link
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Save email to Firestore (optional: check if user exists first)
      // Using email as doc ID for simplicity, consider using UID after login for robustness
      const userRef = doc(db, 'users', email);
      await setDoc(userRef, {
        email: email,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
        // Add any other initial user data here
      }, { merge: true }); // Merge true updates existing doc or creates new one

      toast.dismiss(); // Dismiss loading toast
      toast.success('Login link sent! Check your email (and spam folder).');
      setSubmitted(true); // Show confirmation message

    } catch (error) {
      console.error("Firebase sign-in error:", error);
      toast.dismiss();
      // Provide more specific error messages if needed
      toast.error(`Failed to send link: ${error.message}`);
      window.localStorage.removeItem('emailForSignIn'); // Clean up storage on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <Toaster position="top-center" />
        {!submitted ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Unlock AI Tools</h2>
            <p className="mb-6 text-gray-600">Enter your email to access the AI Personalized Card Finder and Rewards Max Analyzer.</p>
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                aria-label="Email Address"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Login Link'}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We'll email you a magic link for password-free login. By signing up, you also agree to receive occasional updates on new card reviews (you can unsubscribe anytime).
            </p>
          </>
        ) : (
          <>
             <h2 className="text-2xl font-semibold mb-4 text-green-600">Check Your Email!</h2>
             <p className="mb-6 text-gray-600">
               A magic login link has been sent to <strong>{email}</strong>. Click the link in the email to sign in and access the tools.
             </p>
             <p className="text-sm text-gray-500">You can close this window.</p>
          </>
        )}
      </div>
    </div>
  );
}