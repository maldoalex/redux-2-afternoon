import { createStore, applyMiddleware, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import budgetReducer from "./redux/budgetReducer";
import userReducer from "./redux/userReducer";

const rootReducer = combineReducers({
  budget: budgetReducer,
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
