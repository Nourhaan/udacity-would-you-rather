import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-jquery-plugin'
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { reducers } from './redux/reducers/RootReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authCheckState } from './redux/actions/actions';

const store = createStore(reducers, {}, applyMiddleware(thunk));
const logged_user = localStorage.getItem('logged_user');
if (logged_user) {
  store.dispatch(authCheckState());
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
