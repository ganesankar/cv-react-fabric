import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'microsoft-web-framework/css/mwf-west-european-default.min.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
