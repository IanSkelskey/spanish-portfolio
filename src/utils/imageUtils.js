/**
 * Resolves image paths for assets in the public folder
 * @param {string} src - The source path of the image
 * @returns {string} The resolved path
 */
export function resolveImagePath(src) {
  if (src && src.startsWith('/assets')) {
    return `${import.meta.env.BASE_URL}assets/${src.replace(/^\/assets\//, '')}`;
  }
  return src;
}
