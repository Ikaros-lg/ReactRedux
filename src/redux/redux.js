import {createStore} from 'redux';

var initialState = {
    status : false,
    sort : {
        by : 'name',
        value : 1
    }
}

var reducer = (state = initialState, action) => {
    if(action.type === 'status'){
        // state.status = true;
        return {
            status : true,
            sort : state.sort
        }
    }

    if(action.type === 'sort'){
        // state.sort = action.sort;
        return {
            status : state.status,
            sort : action.sort
        }
    }


    return state;
}

const store = createStore(reducer);

console.log('default state: ', store.getState());


// Action thay doi status

var actionStatus = {
    type : 'status'
}

store.dispatch(actionStatus);

console.log('changed state 1: ', store.getState());


// action thay doi sort

var actionSort = {
    type : 'sort',
    sort : {
        by : 'name',
        value : -1
    }
}

store.dispatch(actionSort);

console.log('changed state 2: ',store.getState());