import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';

const rootReducer = combineReducers({
  movie: MovieReducer // 'movie' part of state
});

export default rootReducer;