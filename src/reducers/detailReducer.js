const DEFAULT_STATE = {count: 0};

export default (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case 'MOVIES_DETAIL_SUCCESS':
      return {
        ...state,
        detailResult: payload.data,
      };
    default:
      return state;
  }
};
