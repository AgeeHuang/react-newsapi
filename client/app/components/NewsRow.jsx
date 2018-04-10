import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faImage from '@fortawesome/fontawesome-free-solid/faImage';

const NewsRow = ({ news }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={news.url}
    className="news-row"
  >
    <div
      className="news-pic"
      style={{ backgroundImage: `url(${news.urlToImage || 'http://via.placeholder.com/250x200'})`}}
    />
    <div className="news-wrap">
      <p className="news-title">
        <Truncate lines={2} ellipsis="...">
          {news.title || news.description}
        </Truncate>
      </p>
    </div>
  </a>
);

NewsRow.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsRow;
