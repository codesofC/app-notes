import { createStore, combineReducers } from "redux";
import notesReducer from './notes/notesReducer'
import selectedReducer from "./notes/selectedReducer";

const rootReducer = combineReducers({
    notesReducer,
    selectedReducer
})

const store = createStore(rootReducer);

export default store;