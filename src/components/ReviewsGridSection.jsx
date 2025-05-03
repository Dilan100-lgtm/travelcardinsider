// src/components/ReviewsGridSection.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Accept reviews data as a prop
export default function ReviewsGridSection({ reviews }) {
  // Handle cases where reviews might be missing or empty
  if (!reviews || reviews.length === 0) {
    return null; // Or return a placeholder message
  }

  return (
    <section className="py-16 lg:py-24 reviews-container" aria-labelledby="reviews-heading">
       <div className="container mx-auto px-4">
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Latest Reviews & Guides
          </h2>
          {/* Premium Look: Use reviews-grid class. Ensure cards have good styling */}
          <div className="reviews-grid">
              {reviews.map((review, index) => (
                // Premium Look: Use card class with consistent styling
                <div className="card" key={review.link || index}>
                  {/* Performance: Lazy load these images */}
                  <Image
                    className="review_img" // Ensure this class handles aspect ratio / object-fit
                    src={review.img}
                    alt={review.alt} // SEO: Alt text already provided, ensure descriptive
                    width={500} // Provide appropriate default width
                    height={300} // Provide appropriate default height
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Performance: Example sizes, adjust based on grid layout
                    loading="lazy"
                  />
                  <div className="card-content">
                    {/* SEO: Use H3 for card titles within the section */}
                    <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                      {review.link ? (
                        <Link href={review.link}>{review.title}</Link>
                      ) : (
                        review.title // Should ideally always have a link
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{review.desc}</p> {/* Ensure line-clamp works or use JS */}
                    {review.link && (
                      <div className="mt-auto pt-2"> {/* Push button to bottom */}
                         <Link href={review.link} className="cta-button-secondary text-sm px-4 py-2">
                          Read More
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
       </div>
    </section>
  );
}