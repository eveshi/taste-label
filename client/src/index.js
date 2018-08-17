import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, applyMiddlewares } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../store/reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer,
  applyMiddlewares(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
