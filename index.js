// npm install --yes // install package.json
// npm install redux
// react application import redux from  'redux'

const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

// Actions
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

// (previousState, action) => newState
// Reducers
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('Updated state', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
