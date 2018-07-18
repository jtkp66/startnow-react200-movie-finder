
import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    movie: store.movieData,
  };
}

export default connect(mapStoreToProps)(MovieDetail);

// import { connect } from 'react-redux';
// import MovieDetail from './MovieDetail';

// function MapStoreToProps(store) {
//   return {
//     movieInfo: store.movieSearch.movieInfo
//   };
// }

// export default connect(MapStoreToProps)(MovieDetail);
