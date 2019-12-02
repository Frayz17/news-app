export default (state = [], action) => {
  switch (action.type) {
    case 'SET_SPORT_CONTENT':
      return [...action.payload];
    default:
      return { ...state };
  }
};
