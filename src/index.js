import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Axios from './utils/axios';

// call axios in index will provide access to our whole app to get or send data with API requests
Axios()
ReactDOM.render(
 <Provider store = {store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
