// src/components/RequireAuth.jsx
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase'; // Adjust path
import EmailGateComponent from './EmailGateComponent'; // Adjust path
import { useRouter } from 'next/router';

export default function RequireAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [showGate, setShowGate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only show the gate after the initial loading state is resolved
    // and if there's no authenticated user.
    if (!loading && !user) {
      setShowGate(true);
    }
    if (!loading && user) {
      setShowGate(false);
    }
  }, [user, loading]);

  if (loading) {
    // Optional: Add a more sophisticated loading spinner/skeleton screen
    return <div className="flex justify-center items-center min-h-screen"><p>Loading user...</p></div>;
  }

  if (error) {
    console.error("Firebase Auth Error:", error);
    return <div className="text-center text-red-600 p-4">Error loading authentication status. Please try again later.</div>;
  }

  if (!user) {
    // Pass the current page's path (or intended destination) to the Gate component
    // so it can redirect back after successful login.
    return <EmailGateComponent requestedUrl={router.asPath} />;
  }

  // User is authenticated, render the protected content
  return children;
}