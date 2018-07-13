import axios from 'axios';

const API_KEY = 'f4ed2f4b';
const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
                //http://www.omdbapi.com/?apikey=f4ed2f4b&s=jaws
// getMovies() {
//     const { dispatch, searchTerm } = this.props;
//     const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=5bb8710f&type=movie`;

//extract the variable and export it 
export const FETCH_MOVIE = 'FETCH_MOVIE';

export const fetchMovie = (title) => {
    const url = `${ROOT_URL}&s=${title}`;
    const request = axios.get(url); 

    return {
        //unwraps the promise
        type: FETCH_MOVIE,
        payload: request //returning promise as the payload
    };
}

//http://www.omdbapi.com/?i=tt3896198&apikey=f4ed2f4b
