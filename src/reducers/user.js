const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'user':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
