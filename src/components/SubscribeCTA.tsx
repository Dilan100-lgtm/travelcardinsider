// src/components/SubscribeCTA.tsx
import Link from 'next/link';
import React from 'react';

const SubscribeCTA: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 px-4 text-center shadow-lg mt-12 mb-8 mx-auto max-w-4xl rounded-lg">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-3">
        Unlock Premium Tools & Insights!
      </h2>
      <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
        Get instant access to our advanced Card Finder, comparison tools, and exclusive guides by subscribing.
      </p>
      <Link
        href="/subscribe"
        className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white transform transition hover:scale-105 duration-150 ease-in-out shadow-md"
      >
        Go Premium Now
      </Link>
    </div>
  );
};

export default SubscribeCTA;