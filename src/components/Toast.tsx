// File: components/Toast.tsx

import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onDismiss: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-sm z-50 transition-opacity duration-300
        ${type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
    >
      {message}
    </div>
  );
};

export default Toast;
