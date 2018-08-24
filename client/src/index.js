import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import { Provider, applyMiddlewares } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { createStore } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import thunk from 'redux-thunk';
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
