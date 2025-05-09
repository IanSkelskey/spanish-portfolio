/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string|null} YouTube video ID or null if not found
 */
export function extractYouTubeId(url) {
  if (!url) return null;
  
  // Handle various YouTube URL formats
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[7].length === 11) ? match[7] : null;
}

/**
 * Creates an embed URL for a YouTube video
 * @param {string} videoId - YouTube video ID
 * @returns {string} YouTube embed URL
 */
export function createYouTubeEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * Checks if a URL is a valid YouTube URL
 * @param {string} url - URL to check
 * @returns {boolean} True if URL is a YouTube URL
 */
export function isYouTubeUrl(url) {
  if (!url) return false;
  return url.includes('youtube.com') || url.includes('youtu.be');
}
