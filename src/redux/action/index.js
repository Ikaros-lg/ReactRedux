import * as constants from '../constants/index.js';

export var changeStatus = () => {
    return {
        type : constants.status
    }
}


export var changeInfor = (input) => {
    return {
        type : constants.inf,
        inf : input
    }
}