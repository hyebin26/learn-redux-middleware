import { combineReducers } from "redux";
import asyncCounter from "./asyncCounter";
import posts from "./refactoryPosts";

const rootReducer = combineReducers({ asyncCounter, posts });

export default rootReducer;
