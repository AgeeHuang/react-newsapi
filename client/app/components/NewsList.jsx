import React from 'react';
import PropTypes from 'prop-types';
import NewsRow from './NewsRow';

const NewsList = ({ list }) => (
  <div className="news-container">
    {
      list.map((news) => (
        <NewsRow
          key={news.publishedAt || news.description}
          news={news}
        />
      ))
    }
  </div>
);

NewsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

NewsList.defaultProps = {
  list: [],
};

export default NewsList;
