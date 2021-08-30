import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import postReducer from './components/Redux/Reducers/postReducer';



// import {BrowserRouter, Switch} from 'react-router-dom'
const middleware = [thunk]
const store = createStore(postReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
