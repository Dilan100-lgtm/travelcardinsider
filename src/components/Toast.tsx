// components/Toast.tsx
import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onDismiss: () => void; // Callback to clear the message in the parent state
}

const Toast: React.FC<ToastProps> = ({ message, type, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Allow time for fade-out transition before calling dismiss
      setTimeout(onDismiss, 300); // Should match transition duration
    }, 4000); // Auto-dismiss after 4 seconds

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const baseClasses = "fixed p-4 rounded-md shadow-lg text-white transition-opacity duration-300 ease-in-out text-sm z-50 max-w-sm"; // Added max-w-sm
  const typeClasses = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  // Position: bottom-4 on all screens, right-4 on sm+, center horizontal mobile
  const positionClasses = "bottom-4 left-1/2 sm:left-auto transform -translate-x-1/2 sm:transform-none sm:right-4";
  const visibilityClasses = isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'; // Hide from interaction when invisible

  return (
    <div
      className={`${baseClasses} ${typeClasses} ${positionClasses} ${visibilityClasses}`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
           onClick={() => { setIsVisible(false); setTimeout(onDismiss, 300); }}
           className="-mr-1 ml-2 p-1 text-white hover:bg-white/20 rounded-full text-xs leading-none"
           aria-label="Dismiss"
         >
           ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;