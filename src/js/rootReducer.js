import { combineReducers } from 'redux';
import searchBarReducer from './js/components/SearchBar/searchBarReducer';

const rootReducer = combineReducers({
  movieData: searchBarReducer
  
});

export default rootReducer;
