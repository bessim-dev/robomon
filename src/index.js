import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,combineReducers} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/app';
import * as serviceWorker from "./serviceWorker";
import {SearchRobots,requestRobots} from './containers/reducers'

const reducersRoot = combineReducers({SearchRobots,requestRobots})
const logger =createLogger();
const store = createStore(reducersRoot,applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider  store={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
