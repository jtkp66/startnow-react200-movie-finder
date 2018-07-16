import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import SearchBar from './components/SearchBar';
import MovieDetail from './components/MovieDetail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={SearchBar} />
          <Route path='/movie/:id' component={MovieDetail} />
        </div>
      </Router>
    );
  }
}

//all routes go in top level index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import promise from 'redux-promise';

// import reducers from './reducers';
// import PostsNew from './components/posts_new';
// import PostsShow from './components/posts_show';
// import PostsIndex from './components/posts_index';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//       <div>
//         <Switch>
//           <Route path="/posts/new" component={PostsNew} />
//           <Route path="/posts/:id" component={PostsShow} />
//           <Route path="/" component={PostsIndex} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container'));


