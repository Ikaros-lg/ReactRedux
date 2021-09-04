import * as types from '../constants/actionType.js';


var initialState = false;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.toggle:
            state = !state;
            return state;
        case types.close:
            state = false;
            return state;
        case types.change:
            state = true;
            return state;
        default:
            return state;    
    }
}
export default reducer;