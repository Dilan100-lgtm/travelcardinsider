// src/components/EmailSignupModal.js
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

// Import or define spinner styles if not using global CSS
// **Recommendation:** Create EmailSignupModal.module.css and import it
// For this example, using inline styles for demonstration.

const spinnerStyle = {
  display: 'inline-block',
  width: '1.2em',
  height: '1.2em',
  border: '2px solid rgba(255, 255, 255, 0.3)', // Assuming button background is dark
  borderRadius: '50%',
  borderTopColor: '#fff', // Assuming button background is dark
  animation: 'spin 1s ease-in-out infinite',
  verticalAlign: 'middle',
  margin: '-2px 0', // Adjust vertical alignment
};

// Keyframes needed for the animation.
// **Recommendation:** Define this globally or in a CSS file.
const keyframesStyle = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export default function EmailSignupModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // <-- Added loading state

  const subscribe = async () => {
    setError(''); // Clear previous errors
    if (!email) {
        setError('Please enter a valid email address.');
        return;
    }
    setLoading(true); // <-- Set loading true
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, 'Temp@1234'); // dummy password
      await setDoc(doc(db, 'subscribers', userCred.user.uid), {
        email: email,
        createdAt: new Date().toISOString()
      });
      alert('Subscription successful! You’ll receive updates via email.');
      onClose(); // Close modal on success
    } catch (err) {
      // Provide more specific error feedback if possible
      if (err.code === 'auth/email-already-in-use') {
        setError('This email address is already registered.');
      } else if (err.code === 'auth/invalid-email') {
         setError('Please enter a valid email address.');
      } else {
         setError('Subscription failed. Please try again.');
         console.error("Subscription error:", err); // Log the actual error
      }
    } finally {
      setLoading(false); // <-- Set loading false in finally block
    }
  };

  return (
    // Assuming a className "modal" exists with basic modal styles
    <div className="modal">
      {/* Inject keyframes - **Move to CSS if possible** */}
      <style>{keyframesStyle}</style>

      <h2>Subscribe to Unlock Tools</h2>
      <p>Enter your email to unlock AI tools and receive exclusive reviews.</p>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading} // <-- Disable input while loading
        // Add basic styling or className for consistency
        style={{ padding: '10px', marginBottom: '10px', width: 'calc(100% - 22px)', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      {error && <p style={{ color: 'red', marginTop: '-5px', marginBottom: '10px' }}>{error}</p>}

      {/* Apply loading state to button */}
      {/* **Recommendation:** Use CSS classes instead of inline styles */}
      <button
        onClick={subscribe}
        disabled={loading}
        style={{
            padding: '10px 15px',
            cursor: loading ? 'wait' : 'pointer',
            opacity: loading ? 0.7 : 1,
            backgroundColor: '#007bff', // Example primary color
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            minHeight: '40px', // Ensure space for spinner
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px' // Space between buttons
        }}
       >
        {loading ? <span style={spinnerStyle}></span> : 'Subscribe'}
      </button>

      {/* Disable cancel button too during subscribe action */}
      <button
        onClick={onClose}
        disabled={loading}
         style={{
            padding: '10px 15px',
            cursor: loading ? 'not-allowed' : 'pointer',
            backgroundColor: '#6c757d', // Example secondary color
            color: 'white',
            border: 'none',
            borderRadius: '4px'
        }}
        >
          Cancel
      </button>
    </div>
  );
}