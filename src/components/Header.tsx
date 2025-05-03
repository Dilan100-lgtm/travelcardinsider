// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider'; // Adjust path if needed
import Toast from './Toast'; // Assuming Toast component is in the same directory

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const handleLogout = async () => {
    try {
      await logout();
      // Show success toast on successful logout
      setToastMessage('✅ You’ve been unsubscribed – see you next time!');
      setToastType('success');
      setShowToast(true);
    } catch (error) {
      console.error('Logout failed:', error);
      // Show error toast on failed logout
      setToastMessage('❌ Logout failed. Please try again.');
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <>
      <header className="bg-gray-100 shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo or Site Title */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            MyApp
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link href="/cards" className="text-gray-600 hover:text-blue-600 transition-colors">
              Cards
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </Link>

            {/* Conditional Auth Button */}
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors shadow"
              >
                Unsubscribe
              </button>
            ) : (
              <Link
                href="/subscribe" // Assuming '/subscribe' is your signup/login page
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors shadow"
              >
                Subscribe
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Conditionally render the Toast */}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default Header;