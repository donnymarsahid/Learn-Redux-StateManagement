import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX START
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  order: 0,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === 'PLUS_ORDER') {
    return {
      ...state,
      order: state.order + 1,
    };
  }
  if (action.type === 'MINUS_ORDER') {
    const order = 0;
    if (state.order > 0) {
      return {
        ...state,
        order: state.order - 1,
      };
    }
    return {
      ...state,
      order: order,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);

// REDUX END

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
