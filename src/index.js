import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/posts_index';
import promise from 'redux-promise';

//on applyMiddleware we pass our middleware like redux promise to handle the request
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
	    	<Route path="/" component={PostIndex} />
	    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
