import { useState, useEffect, useRef } from 'react';
import './ImageModal.css';

function ImageModal({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);
  const zoomFactor = 2.0; // Reduced from 2.5 for a more comfortable zoom level
  
  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle mouse movement for zoom functionality
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    // Get image position and dimensions
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the image
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Ensure mouse position is within image boundaries
    if (x >= 0 && x <= width && y >= 0 && y <= height) {
      setMousePosition({ x, y });
      setShowZoom(true);
      setImageDimensions({ width, height });
    } else {
      setShowZoom(false);
    }
  };
  
  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  // Calculate zoom window position and background position
  const getZoomStyles = () => {
    const { x, y } = mousePosition;
    const { width, height } = imageDimensions;
    
    // Size of the zoom window - increased width from 150px to 200px
    const zoomWidth = 200;
    const zoomHeight = 150;
    
    // Calculate position of zoom window
    let zoomX = x + 20; // Position to the right of cursor by default
    let zoomY = y - zoomHeight/2; // Center vertically with cursor
    
    // Adjust position if it would go off screen
    if (x > width - 100) zoomX = x - zoomWidth - 20; // Switch to left side
    if (zoomY < 0) zoomY = 0;
    if (zoomY > height - zoomHeight) zoomY = height - zoomHeight;
    
    // Calculate background position for the zoomed area
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;
    
    return {
      left: `${zoomX}px`,
      top: `${zoomY}px`,
      width: `${zoomWidth}px`, // Set width explicitly
      height: `${zoomHeight}px`, // Set height explicitly
      backgroundImage: `url(${src})`,
      backgroundPosition: `${bgX}% ${bgY}%`,
      backgroundSize: `${width * zoomFactor}px ${height * zoomFactor}px`
    };
  };

  return (
    <div className="image-modal-container">
      <img 
        src={src} 
        alt={alt || "Clickable image"} 
        onClick={() => setIsOpen(true)} 
        className="modal-trigger-image" 
      />
      
      {isOpen && (
        <div className="image-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="image-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close image"
            >
              &times;
            </button>
            
            <div className="image-modal-zoom-container">
              <img 
                ref={imageRef}
                src={src} 
                alt={alt || "Enlarged view"} 
                className="image-modal-img"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              
              {showZoom && (
                <div 
                  className="image-modal-zoom-window"
                  style={getZoomStyles()}
                  aria-hidden="true"
                ></div>
              )}
            </div>
            
            <div className="image-modal-caption">
              <span>Click or tap outside the image to close. </span>
              <span className="zoom-instruction">Hover over the image to zoom in on details.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageModal;
