import { combineReducers } from "redux";
import task from "./task.js";
import formDisplay from "./displayForm.js";
import taskUpdate from './taskUpdate.js';
import filterTable from './filterTable.js';
import search from './searchByName.js';
import sortNS from './sortNS.js';

const reducer = combineReducers({
  task: task,
  isDisplayForm: formDisplay,
  taskUpdate: taskUpdate,
  filter : filterTable,
  search : search,
  sort : sortNS,
});

export default reducer;
