import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import App from './app';

// import {createStore,applyMiddleware,compose} from 'redux';
// import {Provider} from 'react-redux';
// import RootReducer from './reducers/index'
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const store = createStore(RootReducer,composeEnhancers(applyMiddleware(thunk,logger)));
ReactDOM.render(
  <App/>,
  document.getElementById('root')

);


// ReactDOM.render(
//   <Provider store={store}>
//   <App/>
//   </Provider>,
//   // <App/>,
//   document.getElementById('root')

// );


