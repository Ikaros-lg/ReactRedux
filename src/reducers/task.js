import * as types from "../constants/actionType.js";

var s4 = () => {
  return Math.floor((Math.random() + 1) * 0x10000)
    .toString(16)
    .substring(1);
};

var genId = () => {
  return s4() + "-" + s4() + "-" + s4() + "-" + s4();
};

var getStateFromLocal = JSON.parse(localStorage.getItem("taskLocal"));
var initialState = getStateFromLocal ? getStateFromLocal : [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getList:
      return state;

    case types.add:
      console.log(action);
      console.log(genId());
      var addTask = {
        id: genId(),
        name: action.task.name,
        status: action.task.status,
      };
      state.push(addTask);
      localStorage.setItem("taskLocal", JSON.stringify(state));
      return [...state];

    case types.cStatus:
      var getItem = JSON.parse(localStorage.getItem("taskLocal"));
      getItem.forEach((item) => {
        if (item.id === action.id) {
          item.status = !item.status;
        }
        return item;
      });
      localStorage.setItem("taskLocal", JSON.stringify(getItem));
      return getItem;

    case types.remove:
      var findIndex = -1;
      console.log("delete   id: " + action.id);
      var getItem = JSON.parse(localStorage.getItem("taskLocal"));
      getItem.forEach((item, index) => {
        findIndex = item.id === action.id ? index : findIndex;
        return item;
      });
      getItem.splice(findIndex, 1);
      localStorage.setItem("taskLocal", JSON.stringify(getItem));
      return getItem;

    case types.update2:
      var findIndex2 = -1;
      var getItem = JSON.parse(localStorage.getItem("taskLocal"));

      getItem.forEach((item, index) => {
        findIndex2 = item.id === action.task.id ? index : findIndex2;
      });

      getItem[findIndex2] = action.task;

      localStorage.setItem("taskLocal", JSON.stringify(getItem));

      return getItem;

    default:
      return state;
  }
};

export default reducer;
