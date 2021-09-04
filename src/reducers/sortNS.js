import * as types from '../constants/actionType.js';


var initialState = {
    by : '',
    value : 0     //1:kich hoat       //0:an
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.sort:
            console.log(action.sort.by);
            return action.sort;
        default:
            return state;    
    }
}

export default reducer;