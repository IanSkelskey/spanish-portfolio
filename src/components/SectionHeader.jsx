import PropTypes from 'prop-types';
import './SectionHeader.css';

/**
 * Consistent section header with optional icon and badge
 */
function SectionHeader({ icon, title, subtitle, badge, className = '' }) {
  return (
    <div className={`section-header ${className}`}>
      {icon && <div className="section-icon">{icon}</div>}
      <h3 className="section-title">
        {title}
        {subtitle && <span className="section-subtitle">{subtitle}</span>}
      </h3>
      {badge && <div className="section-badge">{badge}</div>}
    </div>
  );
}

SectionHeader.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  badge: PropTypes.node,
  className: PropTypes.string
};

export default SectionHeader;
