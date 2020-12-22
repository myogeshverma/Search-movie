const DEFAULT_STATE = {count: 0};

export default (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        searchResult: payload.data,
      };
    default:
      return state;
  }
};
