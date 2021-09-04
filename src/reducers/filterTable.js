import * as types from "../constants/actionType.js";

var initialState = {
  filterName: "",
  filterStatus: -1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.filterTable:
      console.log(action.filter);
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
