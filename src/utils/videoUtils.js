/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param {string} url - The YouTube URL
 * @returns {string|null} - The YouTube video ID or null if not a valid YouTube URL
 */
export function extractYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  
  // Match patterns like:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://youtube.com/shorts/VIDEO_ID
  const regExp = /^.*(?:(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=))|(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?.*v=)))([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[1].length === 11) ? match[1] : null;
}

/**
 * Creates a YouTube embed URL from a video ID
 * @param {string} videoId - The YouTube video ID
 * @returns {string} - The YouTube embed URL
 */
export function createYouTubeEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * Checks if a URL is a YouTube URL
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is a YouTube URL
 */
export function isYouTubeUrl(url) {
  return !!extractYouTubeId(url);
}
