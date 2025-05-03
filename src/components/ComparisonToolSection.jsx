// src/components/ComparisonToolSection.jsx
import React from 'react';
import Link from 'next/link';

export default function ComparisonToolSection() {
  return (
    <section id="compare" className="py-16 lg:py-24 bg-blue-50" aria-labelledby="comparison-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Compare Your Favorite Cards
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to see how your top picks stack up side-by-side? Dive into detailed comparisons.
        </p>
        <Link href="/compare" className="cta-button text-lg px-8 py-3 inline-block">
           Go to Comparison Tool
        </Link>
      </div>
    </section>
  );
}