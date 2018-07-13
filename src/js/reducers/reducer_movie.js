import { FETCH_MOVIE } from '../actions/index';

export default function (state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_MOVIE + '_FULFILLED':

            return [action.payload.data, ...state]; // goes to data from the payload makes a new object along with current state
    }
    return state;
}

// To fetch movie by 'id' using lodash
// 
//export default function(state = {}, action) {
//     switch (action.type) {
//         case FETCH_MOVIE:
//         return __dirname.mapkeys(action.payload.data, 'id');
//         default:
//         return state;
//     }
// }