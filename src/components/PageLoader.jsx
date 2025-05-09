import PropTypes from 'prop-types';
import PageWrapper from './PageWrapper';

/**
 * Handles common loading and error states for pages
 */
function PageLoader({ loading, error, title, children }) {
  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;
  
  return <PageWrapper title={title}>{children}</PageWrapper>;
}

PageLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default PageLoader;
