// /pages/finish-signup.js
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase'; // Import auth instance
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useRouter } from 'next/router';
// Optionally import db and functions to update subscriber status
// import { db } from '@/lib/firebase';
// import { doc, updateDoc } from 'firebase/firestore';

export default function FinishSignup() {
  const router = useRouter();
  const [message, setMessage] = useState('Verifying your sign-in link...');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if the current URL is a sign-in link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Get the email from localStorage which was saved in the modal
      let email = window.localStorage.getItem('emailForSignIn');

      if (!email) {
        // User opened the link on a different device/browser.
        // Prompt the user for their email.
        // Keep it simple for now, just show an error. Ideally, add an input field.
        setError('Sign-in email not found. Please try signing in again from the original device or provide your email.');
        setMessage(''); // Clear loading message
        // email = window.prompt('Please provide your email for confirmation'); // Alternative (less user-friendly)
        return; // Stop execution if email is missing
      }

      // Sign the user in with the email link
      signInWithEmailLink(auth, email, window.location.href)
        .then(async (result) => { // Mark async if updating Firestore
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');

          // Sign-in successful.
          setMessage('Sign-in successful! Redirecting...');

          // --- Optional: Update subscriber status in Firestore ---
          // try {
          //   await updateDoc(doc(db, 'subscribers', email), {
          //       status: 'confirmed', // Update status
          //       lastSignInTime: serverTimestamp() // Add sign-in time
          //   });
          // } catch (dbError) {
          //     console.error("Error updating subscriber status: ", dbError);
          //     // Non-critical error, proceed with redirect
          // }
          // ---------------------------------------------------------


          // Redirect to a logged-in page or dashboard
          // Example: Redirect to the Card Finder tool as suggested
          router.push('/card-finder');

        })
        .catch((err) => {
          console.error('Sign-in error:', err);
          setError(`Error signing in: ${err.message}. Please try again.`);
          setMessage(''); // Clear loading message
        });
    } else {
         setMessage('No valid sign-in link detected. If you clicked a link, please ensure it hasn\'t expired or been used already.');
    }
  }, [router]); // Add router to dependency array

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}> {/* Basic styling */}
      <h1>Finishing Sign-in</h1>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* You might want to add a loading spinner here */}
    </div>
  );
}