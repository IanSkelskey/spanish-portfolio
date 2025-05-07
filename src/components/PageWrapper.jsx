import PropTypes from 'prop-types';
import './PageWrapper.css';

function PageWrapper({ title, children }) {
  return (
    <div className="page-wrapper">
      <h1>{title}</h1>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default PageWrapper;
