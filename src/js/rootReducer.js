import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearchContainer/MovieSearchReducer';

const rootReducer = combineReducers({
  movieSearch: MovieSearchReducer
});

export default rootReducer;
