import * as constants from '../constants/index.js';

var initialState = false

var reducer = (state = initialState, action) => {
    if(action.type === constants.status){
        state = true;
    }
    return state;
}
export default reducer;