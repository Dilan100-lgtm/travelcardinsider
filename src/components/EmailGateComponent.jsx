// src/components/EmailGateComponent.jsx
import React, { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import styles from './EmailGateComponent.module.css'; // Import CSS Module

export default function EmailGateComponent({ requestedUrl = '/' }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State for fade-in animation

  // Trigger fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }
    setLoading(true);
    toast.loading('Sending login link...'); // Keep toast for general feedback

    const actionCodeSettings = {
      url: `${window.location.origin}/finish-signup?redirectTo=${encodeURIComponent(requestedUrl)}`,
      handleCodeInApp: true,
    };

    try {
      window.localStorage.setItem('emailForSignIn', email);
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      toast.dismiss(); // Dismiss loading toast
      toast.success('Login link sent! Check your email.');
      setSubmitted(true); // Move to confirmation view

    } catch (error) {
      console.error("Firebase sign-in error:", error);
      toast.dismiss(); // Dismiss loading toast
      toast.error(`Failed to send link: ${error.message}`);
      window.localStorage.removeItem('emailForSignIn');
    } finally {
      setLoading(false); // Ensure loading stops
    }
  };

  // Combine classes for animation
  const overlayClasses = `${styles.gateOverlay} ${isVisible ? styles.visible : ''}`;

  return (
    // Full screen overlay for centering and background
    <div className={overlayClasses}>
       {/* White container box */}
      <div className={styles.gateBox}>
        <Toaster position="top-center" containerClassName={styles.toasterCustom} />
        {!submitted ? (
          <>
            <h2 className={styles.title}>Unlock Premium Tools</h2>
            <p className={styles.description}>
              Enter your email to access the AI Card Finder and Rewards Analyzer instantly.
            </p>
            <form onSubmit={handleSignIn} className={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className={styles.inputField}
                aria-label="Email Address"
                disabled={loading} // Disable input while loading
              />
              <button
                type="submit"
                disabled={loading}
                className={`${styles.submitButton} ${loading ? styles.loading : ''}`} // Add loading class
              >
                {loading ? (
                  <span className={styles.spinner}></span> // Use a span for the spinner
                ) : (
                  'Send Magic Link'
                )}
              </button>
            </form>
            <p className={styles.helperText}>
              We'll email you a secure, password-free login link. By signing up, you agree to receive occasional product updates (unsubscribe anytime).
            </p>
          </>
        ) : (
          <div className={styles.confirmationSection}>
             <h2 className={styles.confirmationTitle}>Check Your Inbox!</h2>
             <p className={styles.confirmationText}>
               A magic login link has been sent to <strong className={styles.emailHighlight}>{email}</strong>. Click the link to sign in.
             </p>
             <p className={styles.helperText}>You can close this window after clicking the link.</p>
          </div>
        )}
      </div>
    </div>
  );
}