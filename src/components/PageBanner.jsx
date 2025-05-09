import PropTypes from 'prop-types';
import { resolveImagePath } from '../utils/imageUtils';
import './PageBanner.css';

/**
 * Page banner/hero image component
 */
function PageBanner({ src, alt, className = '' }) {
  return (
    <div className={`page-banner ${className}`}>
      <img 
        src={resolveImagePath(src)} 
        alt={alt || "Page banner"} 
        className="page-banner-image" 
      />
    </div>
  );
}

PageBanner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default PageBanner;
