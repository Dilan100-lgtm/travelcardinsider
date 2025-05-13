// src/utils/newsUtils.js
import newsData from '@/data/newsData.json';



// Get all news items, sorted by date (newest first)
export function getAllNews() {
  return newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get a specific news item by its slug
export function getNewsBySlug(slug) {
  return newsData.find(news => news.slug === slug) || null;
}

// Get the latest 'count' number of news items
export function getFeaturedNews(count = 4) {
  return getAllNews().slice(0, count);
}