// utils/getGear.js

// In a real application, you would fetch this data from:
// - Markdown files (using gray-matter for frontmatter)
// - A database (e.g., PostgreSQL, MongoDB)
// - A Headless CMS (e.g., Contentful, Sanity, Strapi)
// - A JSON API

// Dummy data for demonstration purposes
const dummyGearData = [
  {
    slug: 'osprey-farpoint-55',
    title: 'Osprey Farpoint 55 Travel Pack',
    description: 'A versatile and comfortable travel backpack, perfect for long trips and backpacking adventures. Features a detachable daypack.',
    image: '/gear/osprey-farpoint-55.webp', // Placeholder image path
    category: 'backpacks',
    publishedAt: '2025-05-01',
    rating: 9.5, // Example rating out of 10
  },
  {
    slug: 'bose-quietcomfort-45',
    title: 'Bose QuietComfort 45 Noise-Cancelling Headphones',
    description: 'Immerse yourself in your travels with industry-leading noise cancellation. Perfect for flights, trains, and noisy environments.',
    image: '/gear/bose-qc45.webp',
    category: 'electronics',
    publishedAt: '2025-04-15',
    rating: 9.0,
  },
  {
    slug: 'peak-design-travel-tripod',
    title: 'Peak Design Travel Tripod (Aluminum)',
    description: 'Compact, robust, and lightning-fast to deploy. Ideal for photographers who prioritize portability without compromising stability.',
    image: '/gear/peak-design-tripod.webp',
    category: 'photography',
    publishedAt: '2025-03-20',
    rating: 8.8,
  },
  {
    slug: 'collapsible-water-bottle',
    title: 'Collapsible Silicone Water Bottle',
    description: 'Stay hydrated on the go with this space-saving, leak-proof, and BPA-free collapsible water bottle. Essential for eco-conscious travelers.',
    image: '/gear/collapsible-bottle.webp',
    category: 'accessories',
    publishedAt: '2025-02-10',
    rating: 8.0,
  },
];

export function getAllGearItems() {
  // In a real scenario, you'd read files from a directory (e.g., 'content/gear')
  // and parse them, then sort as needed.
  // For now, we return the dummy data.
  return dummyGearData.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// You might also want a function to get a single gear item by slug
export function getGearItemBySlug(slug) {
  return dummyGearData.find(item => item.slug === slug);
}

// If you want filter options for gear, similar to reviews, you'd add:
export function getUniqueGearFilterValues(field) {
  const values = new Set();
  dummyGearData.forEach(item => {
    if (Array.isArray(item[field])) {
      item[field].forEach(tag => values.add(tag));
    } else if (item[field]) {
      values.add(item[field]);
    }
  });
  return Array.from(values).sort();
}