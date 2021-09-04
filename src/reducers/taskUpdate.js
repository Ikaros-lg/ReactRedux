import * as types from "../constants/actionType.js";

var initialState = '';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.update:
      //   console.log(action.task);
      return action.task;

    case types.deleteUpdate:
      return '';

    default:
      return state;
  }
};

export default reducer;
