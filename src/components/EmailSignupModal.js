// src/components/EmailSignupModal.js
import { useState } from 'react';
// Import necessary functions from Firebase
import { sendSignInLinkToEmail } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default function EmailSignupModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // *** CORRECTED actionCodeSettings ***
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.travelcardinsider.com)
    // must be authorized in the Firebase console.
    // Ensure this page exists to handle the sign-in completion.
    url: `${window.location.origin}/finish-signup`,
    // handleCodeInApp: true, // REMOVE THIS LINE
  };
  // **********************************

  const subscribe = async (event) => {
     event.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    if (!email) {
        setError('Please enter your email address.');
        setLoading(false);
        return;
    }

    try {
      // Send the sign-in link with the corrected settings
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Store email for retrieval on the finish-signup page
      window.localStorage.setItem('emailForSignIn', email);

      // Optionally, save email to Firestore immediately
      try {
          await setDoc(doc(db, 'subscribers', email), {
              email: email,
              createdAt: serverTimestamp(),
              status: 'pending_confirmation'
          });
           setMessage('Subscription pending! Check your email for a sign-in link to confirm.');
      } catch (dbError) {
          console.error("Error writing document to Firestore: ", dbError);
          setMessage('Subscription initiated, but failed to save record initially. Check your email.');
      }

    } catch (err) {
      console.error("Firebase Auth Error:", err);
      if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (err.code === 'auth/network-request-failed') {
          setError('Network error. Please check your connection and try again.')
      } else if (err.code === 'auth/invalid-action-code-setting') {
          // This specific error might also relate to the URL not being authorized
          // in Firebase console under Authentication -> Settings -> Authorized Domains
          // or the email action template settings.
          setError('Configuration error sending email link. Please contact support or try again later.');
           console.error("Detailed action code setting error. Check Firebase console Authorized Domains and Email Templates.", err);
      }
      else {
        setError('Could not initiate subscription. Please try again later.');
      }
    } finally {
        setLoading(false);
    }
  };

  // --- Your Modal JSX (Styles, form, buttons, etc.) ---
  // Assuming the previous structure with basic styling
  const modalStyle = { /* ... styles ... */ };
  const backdropStyle = { /* ... styles ... */ };

  return (
    <>
      <div style={backdropStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        <h2>Subscribe to Unlock Tools</h2>
        <p>Enter your email to unlock AI tools and receive exclusive reviews.</p>
        <form onSubmit={subscribe}>
            <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email Address"
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }}
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

// Add the example styles back if they were removed
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