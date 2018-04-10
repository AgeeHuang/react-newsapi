import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('f1d575e6efeb451898f0fa7543187ba3');

export const SEARCH_TOP_HEADLINES = 'SEARCH_TOP_HEADLINES';
export const SEARCH_EVERYTHING = 'SEARCH_EVERYTHING';
export const SEARCH_SOURCES = 'SEARCH_SOURCES';
export const CHANGE_SEARCH_ENDPOINT = 'CHANGE_SEARCH_ENDPOINT';
export const SET_QUERY_TEXT = 'SET_QUERY_TEXT';

const searchTopHeadlines = (query) => ({
  type: SEARCH_TOP_HEADLINES,
  payload: newsapi.v2.topHeadlines({
    category: 'business',
    language: 'en',
    country: 'us',
    q: query,
  }),
});

const searchEverything = (query = 'news') => ({
  type: SEARCH_EVERYTHING,
  payload: newsapi.v2.everything({
    language: 'en',
    from: new Date(+(new Date()) - (7 * 24 * 60 * 60 * 1000)).toISOString,
    to: new Date().toISOString(),
    q: query,
  }),
});

const searchSources = (query = 'technology') => ({
  type: SEARCH_SOURCES,
  payload: newsapi.v2.sources({
    category: query,
    language: 'en',
    country: 'us'
  }),
});

const setQueryText = (payload) => ({
  type: SET_QUERY_TEXT,
  payload,
});

const setSearchEndpoint = (payload) => ({
  type: CHANGE_SEARCH_ENDPOINT,
  payload,
});

export const changeSearchEndpoint = (el) => {
  return (dispatch, getState) => {
    const endpoint = el.target.className;
    const { query } = getState();
    dispatch(setSearchEndpoint(endpoint));
    switch (endpoint) {
      case 'topHeadlines':
        dispatch(searchTopHeadlines(query[endpoint]));
        break;
      case 'everything':
        dispatch(searchEverything(query[endpoint]));
        break;
      case 'sources':
        dispatch(searchSources(query[endpoint]));
        break;
      default:
        break;
    }
  };
}

export const searchByEndpoint = (query = '') => {
  return (dispatch, getState) => {
    const { endpoint } = getState();
    dispatch(setQueryText(query));
    switch (endpoint) {
      case 'topHeadlines':
        dispatch(searchTopHeadlines(query));
        break;
      case 'everything':
        dispatch(searchEverything(query));
        break;
      case 'sources':
        dispatch(searchSources(query));
        break;
      default:
        break;
    }
  };
}
