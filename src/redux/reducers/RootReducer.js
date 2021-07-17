import { combineReducers } from "redux";
import { QuestionReducer } from "./QuestionReducer";
import { UserReducer } from "./UserReducer";

export const reducers = combineReducers({
	UserReducer,
	QuestionReducer,
});
