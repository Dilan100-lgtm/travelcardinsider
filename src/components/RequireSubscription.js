import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import EmailSignupModal from './EmailSignupModal';

export default function RequireSubscription({ children }) {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) setUser(firebaseUser);
      else setShowModal(true);
    });
    return () => unsubscribe();
  }, []);

  if (!user) return showModal ? <EmailSignupModal onClose={() => setShowModal(false)} /> : null;
  return <>{children}</>;
}
