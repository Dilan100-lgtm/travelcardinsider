import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default function EmailSignupModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const subscribe = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, 'Temp@1234'); // dummy password
      await setDoc(doc(db, 'subscribers', userCred.user.uid), {
        email: email,
        createdAt: new Date().toISOString()
      });
      alert('Subscription successful! You’ll receive updates via email.');
      onClose();
    } catch (err) {
      setError('Invalid or already registered email.');
    }
  };

  return (
    <div className="modal">
      <h2>Subscribe to Unlock Tools</h2>
      <p>Enter your email to unlock AI tools and receive exclusive reviews.</p>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={subscribe}>Subscribe</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
