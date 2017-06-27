import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import promise from 'redux-promise';

//on applyMiddleware we pass our middleware like redux promise to handle the request
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostIndex} /> // we have to put slash route last because of the lazy search of routes
        </Switch>
	    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
