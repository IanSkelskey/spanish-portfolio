import PropTypes from 'prop-types';
import './ContentCard.css';

/**
 * Reusable card component for content sections
 */
function ContentCard({ 
  children, 
  title, 
  icon, 
  accentColor, 
  accentPosition = 'top',
  className = '',
  onClick 
}) {
  const cardStyle = {};
  
  if (accentColor) {
    cardStyle[`border${accentPosition.charAt(0).toUpperCase() + accentPosition.slice(1)}Color`] = accentColor;
  }

  // Add card-base class to ensure it receives the base card styling
  const combinedClasses = `content-card card-base ${className}`;
  
  // Apply appropriate accent class based on position if no custom color
  const accentClass = !accentColor && accentPosition ? `card-accent-${accentPosition}` : '';

  return (
    <div 
      className={`${combinedClasses} ${accentClass}`} 
      style={cardStyle}
      onClick={onClick}
    >
      {(title || icon) && (
        <div className="content-card-header">
          {icon && <div className="content-card-icon">{icon}</div>}
          {title && <h4 className="content-card-title">{title}</h4>}
        </div>
      )}
      <div className="content-card-body">
        {children}
      </div>
    </div>
  );
}

ContentCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  icon: PropTypes.node,
  accentColor: PropTypes.string,
  accentPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default ContentCard;
