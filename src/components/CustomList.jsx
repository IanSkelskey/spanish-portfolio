import PropTypes from 'prop-types';
import './CustomList.css';

/**
 * Custom styled list component with consistent bullet styling
 */
function CustomList({ items, bulletColor, className = '' }) {
  return (
    <ul className={`custom-list ${className}`} style={bulletColor ? { '--bullet-color': bulletColor } : {}}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

CustomList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  bulletColor: PropTypes.string,
  className: PropTypes.string
};

export default CustomList;
