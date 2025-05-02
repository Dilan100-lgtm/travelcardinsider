// /utils/getAllReviews.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const reviewsDirectory = path.join(process.cwd(), 'content/reviews');

export function getAllReviews() {
  let fileNames;
  try {
    fileNames = fs.readdirSync(reviewsDirectory);
  } catch (error) {
    console.error("Error reading reviews directory:", reviewsDirectory, error);
    return []; // Return empty array if directory doesn't exist or error occurs
  }

  const allReviewsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx')) // Only process .mdx files
    .map(fileName => {
      // Remove ".mdx" from file name to get slug (like base for ID)
      // const slug = fileName.replace(/\.mdx$/, ''); // Use slug from frontmatter instead

      // Read markdown file as string
      const fullPath = path.join(reviewsDirectory, fileName);
      let fileContents;
      try {
        fileContents = fs.readFileSync(fullPath, 'utf8');
      } catch (readError) {
        console.error(`Error reading file: ${fullPath}`, readError);
        return null; // Skip this file if reading fails
      }


      // Use gray-matter to parse the post metadata section
      try {
        const matterResult = matter(fileContents);

        // Combine the data with the slug (use frontmatter slug)
        // Validate required fields
         const requiredFields = ['title', 'slug', 'publishedAt'];
         const missingFields = requiredFields.filter(field => !matterResult.data[field]);

         if (missingFields.length > 0) {
             console.warn(`WARN: Skipping ${fileName}. Missing required frontmatter fields: ${missingFields.join(', ')}`);
             return null;
         }


        // Convert publishedAt to string to ensure serializability for getStaticProps
        const reviewData = {
          ...matterResult.data,
          publishedAt: matterResult.data.publishedAt.toString(), // Ensure it's a string
        };
         // Add defaults for optional fields if they don't exist
         if (reviewData.rating === undefined) reviewData.rating = null;
         if (reviewData.featured === undefined) reviewData.featured = false;
         if (reviewData.tags === undefined) reviewData.tags = [];
         if (reviewData.issuer === undefined) reviewData.issuer = 'Unknown';


        return reviewData;
      } catch (matterError) {
          console.error(`Error parsing frontmatter for ${fileName}:`, matterError);
          return null; // Skip file if parsing fails
      }
    });

  // Filter out any null results from errors
  const validReviews = allReviewsData.filter(review => review !== null);

  return validReviews;
}

export function getAllReviewsSorted() {
  const allReviews = getAllReviews();
  // Sort reviews by date in descending order
  return allReviews.sort((a, b) => {
    if (new Date(a.publishedAt) < new Date(b.publishedAt)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getFeaturedReviews(limit = 8) {
  const sortedReviews = getAllReviewsSorted();
  return sortedReviews
    .filter(review => review.featured === true)
    .slice(0, limit);
}

// Example function to get unique values for filters (implement later)
export function getUniqueFilterValues(field) {
    const allReviews = getAllReviews();
    const values = new Set();
    allReviews.forEach(review => {
        if (field === 'tags' && Array.isArray(review.tags)) {
            review.tags.forEach(tag => values.add(tag));
        } else if (review[field]) {
            values.add(review[field]);
        }
    });
    return Array.from(values).sort();
}