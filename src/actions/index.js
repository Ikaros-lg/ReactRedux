import * as types from '../constants/actionType.js';

// export const getList = () => {
//     return {
//         type : constants.getList
//     }
// }


//CRUD

export const add = (task) => {
    return {
        type : types.add,
        task : task
    }
}


export const remove = (idSend) => {
    return {
        type : types.remove,
        id : idSend
    }
}

export const update = (taskSend) => {
    return {
        type : types.update,
        task : taskSend
    }
}


export const update2 = (taskSend) => {
    return {
        type : types.update2,
        task : taskSend
    }
}

export const deleteUpdate = () => {
    return {
        type : types.deleteUpdate
    }
}

//Form

export const toggle = () => {
    return {
        type : types.toggle
    }
}

export const close = () => {
    return {
        type : types.close
    }
}

export const change = () => {
    return {
        type : types.change
    }
}

export const cStatus = (idSend) => {
    return {
        type : types.cStatus,
        id : idSend
    }
}


//filter table

export const filterTable = (filterNS) => {
    return {
        type : types.filterTable,
        filter : filterNS
    }
}

//search by name

export const search = (name) => {
    return {
        type : types.search,
        name : name
    }
}

//sort by name and status

export const sort = (sortNS) => {
    return{
        type : types.sort,
        sort : sortNS
    }
}
