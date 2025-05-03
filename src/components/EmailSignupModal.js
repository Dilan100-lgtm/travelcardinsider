// src/components/EmailSignupModal.js
import { useState } from 'react';
// Import necessary functions from Firebase
import { sendSignInLinkToEmail } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase'; // Make sure db is imported

export default function EmailSignupModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // For success/loading messages
  const [loading, setLoading] = useState(false);

  // Configure the action code settings for the email link
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.travelcardinsider.com)
    // must be authorized in the Firebase console.
    // Ensure this page exists to handle the sign-in completion.
    url: `${window.location.origin}/finish-signup`, // Use window.location.origin for dynamic URL
    handleCodeInApp: true, // Must be true
  };

  const subscribe = async (event) => {
     event.preventDefault(); // Prevent default form submission if wrapped in <form>
    setError('');
    setMessage('');
    setLoading(true);

    if (!email) {
        setError('Please enter your email address.');
        setLoading(false);
        return;
    }

    try {
      // --- Send the sign-in link --- (✅ Guide Point 2: Use correct auth method)
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // --- Store email for retrieval on the finish-signup page ---
      window.localStorage.setItem('emailForSignIn', email);

      // --- Optionally, save email to Firestore immediately (or wait for sign-in confirmation) ---
      // Using email as the document ID for simplicity, ensure it's a valid ID format
      // Consider saving only *after* successful sign-in via the link for confirmed subscribers
      try {
          await setDoc(doc(db, 'subscribers', email), {
              email: email,
              createdAt: serverTimestamp(), // Use server timestamp
              status: 'pending_confirmation' // Optional status
          });
           setMessage('Subscription pending! Check your email for a sign-in link to confirm.');
      } catch (dbError) {
          console.error("Error writing document to Firestore: ", dbError);
          // Decide if this error should block the user message or just be logged
          setMessage('Subscription initiated, but failed to save record initially. Check your email.');
      }

      // Optionally clear email field after sending
      // setEmail('');

    } catch (err) {
      console.error("Firebase Auth Error:", err);
      // Provide more specific errors if possible
      if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (err.code === 'auth/network-request-failed') {
          setError('Network error. Please check your connection and try again.')
      }
      else {
        setError('Could not initiate subscription. Please try again later.');
      }
    } finally {
        setLoading(false);
    }
  };

  // Basic Modal Styling (replace with your actual CSS classes/styles)
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    zIndex: 1000,
    minWidth: '300px',
    maxWidth: '500px',
  };
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  };

  return (
    <>
      <div style={backdropStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        <h2>Subscribe to Unlock Tools</h2>
        <p>Enter your email to unlock AI tools and receive exclusive reviews.</p>
        {/* Use a form for better accessibility */}
        <form onSubmit={subscribe}>
            <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email Address"
                required // Basic HTML5 validation
                style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }} // Example styles
            />
            {error && <p style={{ color: 'red', marginTop: '5px', marginBottom: '10px' }}>{error}</p>}
            {message && <p style={{ color: 'green', marginTop: '5px', marginBottom: '10px' }}>{message}</p>}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Subscribe'}
                </button>
                <button type="button" onClick={onClose} disabled={loading}>
                    Cancel
                </button>
            </div>
        </form>
      </div>
    </>
  );
}