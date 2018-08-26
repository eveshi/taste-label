import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, applyMiddlewares } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import reducer from './store/reducer/reducer';
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
