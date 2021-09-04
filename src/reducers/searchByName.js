import * as types from '../constants/actionType.js';


var initialState = '';


const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.search:
            return action.name;
        default: 
            return state;
    }
}


export default reducer;