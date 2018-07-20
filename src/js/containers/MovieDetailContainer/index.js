import {connect} from 'react-redux';
import MovieDetail from './MovieDetail';

function MapStoreToProps(store) {
    return {
        movieDetails: store.movieSearch.movieDetails
    };
}

export default connect(MapStoreToProps)(MovieDetail);