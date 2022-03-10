import { createStore } from "redux";
import todoListReducer from "../reducer/todoListReducer";

export default createStore(todoListReducer);
