// components/Toast.tsx
import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onDismiss: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Timer for auto-dismissal and fade-in
  useEffect(() => {
    setIsVisible(true); // Start fade-in

    const timer = setTimeout(() => {
      handleDismiss();
    }, 4000); // 4 seconds

    // Cleanup timer on component unmount or if dismissed early
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  // Handle dismiss action (called by button or timer)
  const handleDismiss = () => {
    setIsVisible(false); // Start fade-out
    // Allow time for fade-out animation before calling onDismiss
    setTimeout(() => {
      onDismiss();
    }, 300); // Match the transition duration
  };

  // Determine background color based on type
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';

  return (
    <div
      // Positioning: fixed, bottom-right on medium screens and up, bottom-center on small screens
      className={`fixed bottom-4 right-4 left-auto md:left-auto md:right-4 transform md:translate-x-0 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto w-11/12 max-w-sm z-50 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div
        className={`${bgColor} text-white font-medium px-4 py-3 rounded-lg shadow-xl flex items-center justify-between space-x-4`}
      >
        <span>{message}</span>
        <button
          onClick={handleDismiss}
          className="text-xl font-semibold leading-none opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
          aria-label="Dismiss"
        >
          &times; {/* Simple 'X' character */}
        </button>
      </div>
    </div>
  );
};

export default Toast;