import PropTypes from 'prop-types';
import './StatusBadge.css';

/**
 * Status indicator badge used throughout the portfolio
 * Now using utility classes from utils.css
 */
function StatusBadge({ status, label, className = '' }) {
  return (
    <span className={`badge status-badge ${status} ${className}`}>
      {label}
    </span>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.oneOf(['complete', 'incomplete', 'warning', 'info']).isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default StatusBadge;
