import {
  SEARCH_TOP_HEADLINES,
  SEARCH_EVERYTHING,
  SEARCH_SOURCES,
  CHANGE_SEARCH_ENDPOINT,
  SET_QUERY_TEXT,
} from '../actions';

const initialState = {
  article: {},
  query: {},
  endpoint: 'topHeadlines',
  pendingSearch: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case `${SEARCH_TOP_HEADLINES}_PENDING`:
    case `${SEARCH_EVERYTHING}_PENDING`:
    case `${SEARCH_SOURCES}_PENDING`:
      // API PENDING.
      return {
        ...state,
        pendingSearch: true,
      };
    case `${SEARCH_TOP_HEADLINES}_FULFILLED`:
    case `${SEARCH_EVERYTHING}_FULFILLED`:
    case `${SEARCH_SOURCES}_FULFILLED`:
      return {
        ...state,
        article: {
          ...state.article,
          [state.endpoint]:
            action.payload.articles ||
            action.payload.sources,
        },
        pendingSearch: false,
      };
    case CHANGE_SEARCH_ENDPOINT:
      return {
        ...state,
        endpoint: action.payload,
      };
    case SET_QUERY_TEXT:
      return {
        ...state,
        query: {
          ...state.query,
          [state.endpoint]: action.payload,
        },
      };
    default:
      return state;
  }
}

export default reducer;
