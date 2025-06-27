// File: src/utils/getAllGear.js

// This is a placeholder list of your gear.
// In the future, this function could be updated to read from a database or markdown files.
const allGear = [
  {
    slug: 'best-travel-backpacks-2025',
    title: 'Best Travel Backpacks 2025: Your Guide to the Perfect Pack',
    description: 'We review top picks for versatility, carry-on compliance, and urban exploration to help you find the perfect travel companion.',
    image: '/your-hero-image-backpacks.jpg', // Make sure this image exists in your /public folder
    date: '2025-06-27',
  },
  // ✏️ When you write more gear reviews, you will add them here.
  // For example:
  // {
  //   slug: 'best-packing-cubes-2025',
  //   title: 'The Ultimate Packing Cube Showdown 2025',
  //   description: 'Organize your bag like a pro. We test the best packing cubes for durability, compression, and value.',
  //   image: '/your-hero-image-cubes.jpg',
  //   date: '2025-07-15',
  // },
];

// This function makes the gear data available to your pages.
export function getAllGearItems() {
  // Sorts gear by date to ensure the newest items are first.
  return allGear.sort((a, b) => new Date(b.date) - new Date(a.date));
}