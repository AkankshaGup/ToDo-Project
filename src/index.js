import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndecisionApp from './components/IndecisionApp.js';
//import {} from './playground/redux-101.js';
import {} from './playground/destructuring.js';
import {} from './playground/redux-expensify.js';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
    <IndecisionApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
