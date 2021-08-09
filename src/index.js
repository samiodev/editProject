import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import projectReducer from "./redux/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const store = createStore(projectReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
