import PropTypes from 'prop-types';
import './BlockQuote.css';

function BlockQuote({ text, author }) {
  return (
    <div className="block-quote">
      <blockquote>
        "{text}"
        {author && <cite>— {author}</cite>}
      </blockquote>
    </div>
  );
}

BlockQuote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string
};

export default BlockQuote;
