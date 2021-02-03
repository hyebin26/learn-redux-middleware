import { combineReducers } from "redux";
import asyncCounter4 from "./asyncCounter4";
import posts from "./refactoryPosts";

const rootReducer = combineReducers({ asyncCounter4, posts });

export default rootReducer;
