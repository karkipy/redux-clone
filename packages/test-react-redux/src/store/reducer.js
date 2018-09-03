const initalstate = {
  increment: 0,
};

const reducer = (state = initalstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        increment: state.increment + 1,
      });
    default:
      return state;
  }
};

module.exports = reducer;
