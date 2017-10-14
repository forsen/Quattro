const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POSTS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
