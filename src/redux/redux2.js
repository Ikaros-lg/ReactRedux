import {createStore} from 'redux'; //import createStore function
import { changeInfor, changeStatus } from './action/index.js';  //import
import * as constants from './constants/index.js';
import reducer from './reduces/index.js';

// var initialState = {
//     name : 'Toan',
//     status : false,
//     inf : {
//         job : 'front',
//         age : 22
//     }
// }

// var reducer = (state = initialState, action) => {
//     if(action.type === constants.status){
//         state.status = true;
//     }

//     if(action.type === constants.inf){
//         return {
//             name : state.name,
//             status : state.status,
//             inf : action.inf
//         }
//     }

//     return state;
// }
const store = createStore(reducer);


console.log(store.getState());


//change status
// var action1 = {
//     type : 'status',
// }
// store.dispatch(action1);

store.dispatch(changeStatus());   //export
console.log(store.getState());


//change inf
// var action2 = {
//     type : 'inf',
//     inf : {
//         job : 'backend',
//         age : 23
//     }
// }
// store.dispatch(action2);

store.dispatch(changeInfor({    //export
    job : 'fullstack',
    age : 24
}));

console.log(store.getState());
