// File: components/Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider';
import Toast from './Toast';

export default function Header() {
  const { user, logout } = useAuth();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleLogout = async () => {
    await logout();
    setToast({ type: 'success', message: '✅ You’ve been unsubscribed – see you next time!' });
  };

  return (
    <header className="bg-white shadow z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">TravelCardInsider</Link>
        <nav className="space-x-4">
          <Link href="/cards" className="text-gray-700 hover:text-indigo-600">Compare Cards</Link>
          <Link href="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-red-600 font-medium hover:underline"
            >
              Unsubscribe
            </button>
          ) : (
            <Link
              href="/subscribe"
              className="text-indigo-600 font-medium hover:underline"
            >
              Subscribe
            </Link>
          )}
        </nav>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}
    </header>
  );
}
