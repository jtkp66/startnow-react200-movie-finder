const defaultState = {
    movieList: [],
    movieDetails: {},
    searchTerm: ''
};

export default function MovieSearchReducer(state = defaultState, action) {
    const {type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH': {
            return {
                ...state,
                searchTerm: payload.searchTerm
            };
        }
        case 'ADD_MOVIE': {
            return {
                ...state,
                movieList: payload
            };
        }
        case 'MOVIE_DETAILS': {
            return {
                ...state,
                movieDetails: payload
            };
        }
        default: {
            return state;
        }
    }
}