import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import { connect } from 'react-redux';
import {
  searchByEndpoint,
  changeSearchEndpoint,
} from '../actions';

@connect((state) => state, {
  searchByEndpoint,
  changeSearchEndpoint,
})
export default class SearchBar extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    pendingSearch: PropTypes.bool.isRequired,
    article: PropTypes.object.isRequired,
    endpoint: PropTypes.string.isRequired,
    searchByEndpoint: PropTypes.func.isRequired,
    changeSearchEndpoint: PropTypes.func.isRequired,
  }
  state = {
    keyword: '',
  }
  handleChange = (el) => {
    // input handle.
    this.setState({ keyword: el.target.value });
  }
  keyPress = (el) => {
    // Enter 觸發搜尋功能 (input:focus).
    if (el.keyCode === 13) {
      this.props.searchByEndpoint(el.target.value)
    }
  }
  switchEndpoint = (el) => {
    const { changeSearchEndpoint } = this.props;
    this.setState({
      keyword: '',
    });
    changeSearchEndpoint(el);
  }
  render() {
    const { keyword } = this.state;
    const {
      article,
      pendingSearch,
      query,
      endpoint,
    } = this.props;
    const endpoints = {
      topHeadlines: 'Top headlines',
      everything: 'Everything',
      sources: 'Sources',
    }
    return [
      <header key="search" className="search-field">
        <div className="search-endpoints">
          {
            Object.keys(endpoints).map(ep =>
              <span
                key={ep}
                className={ep}
                onClick={this.switchEndpoint}
              >
                {endpoints[ep]}
              </span>
            )
          }
        </div>
        <div className={classNames('keyword-input', endpoint)}>
          <input
            id="keyword"
            type="search"
            value={keyword}
            onKeyDown={this.keyPress}
            placeholder={`Search ${endpoints[endpoint]}`}
            onChange={this.handleChange}
          />
          <button
            className={classNames({ disabled: pendingSearch })}
            onClick={
              !pendingSearch ?
                () => this.props.searchByEndpoint(keyword) :
                null
            }
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>,
      <h2 key="result">
        {
          !query[endpoint] ?
            endpoints[endpoint] :
            `${query[endpoint]} 的搜尋結果 共${pendingSearch ? ' ' : article[endpoint].length}筆`
        }
      </h2>
    ];
  }
}
