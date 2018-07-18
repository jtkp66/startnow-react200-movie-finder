import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import searchBarReducer from './components/SearchBar/searchBarReducer';
import App from './app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(searchBarReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

//all routes go in top level index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import promise from 'redux-promise';

// import searchBarReducers from './components/SearchBar/searchBarReducer';
// import SearchBar from './components/SearchBar/SearchBar';
// import PostsShow from './components/MovieDetail/MovieDetail';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//       <div>
//         <Switch>
//           {/* <Route path="/" component={MovieInfo} /> */}
//           <Route path="/movie/:id" component={MovieDetail} />
//           <Route path="/" component={SearchBar} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container'));
