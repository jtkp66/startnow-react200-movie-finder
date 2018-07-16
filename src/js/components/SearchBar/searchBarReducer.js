// import moment from 'moment';

const defaultState = {
    apiData: {},
    lineItems:[]
}



export default function (state = defaultState, action) {
    // console.log('Action received', action );
    switch (action.type) { //setup switch statement to only get FETCH_WEATHER TYPE
        case 'FETCH_MOVIE_FULFILLED': //the action type we care about
            //return state.concat([action.payload.data]);
            //same as 
            const obj = {name : action.payload.data.name};                  
            return {
                ...state,
                apiData: action.payload.data,
                lineItems: [...state.lineItems, obj] 
                // lineItems: [...state.lineItems, obj]
            }; //make new array put action.data into ...state(current state of array)
            // add on to existing state. returning a new version or 
            // or instance to state, instead of mutating it.[city, city, city]
    }


    return state;
}
  