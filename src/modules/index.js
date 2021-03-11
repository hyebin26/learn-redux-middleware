import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter5";
import posts, { postsSaga } from "./posts8";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ posts, counter });
export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
