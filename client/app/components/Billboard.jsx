import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import NewsList from './NewsList';
import { searchByEndpoint } from '../actions';

@connect((state) => state, { searchByEndpoint })
class Billboard extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    endpoint: PropTypes.string.isRequired,
    searchByEndpoint: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { searchByEndpoint } = this.props;
    searchByEndpoint();
  }
  render() {
    const { article, endpoint } = this.props;
    return (
      <section className="billboard">
        <SearchBar />
        <NewsList list={article[endpoint]} />
      </section>
    );
  }
}

export default Billboard;
