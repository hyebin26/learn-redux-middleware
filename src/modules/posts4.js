import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as postAPI from "../api/posts";
import { handleAsyncActions, reducerUtils } from "../lib/asyncUtils";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

export const getPosts = () => ({ type: GET_POSTS });

export function* getPostsSaga() {
  try {
    const posts = yield call(postAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: posts,
    });
  } catch (e) {
    yield put({ type: GET_POSTS_ERROR, error: true, payload: e });
  }
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}

const initialState = {
  posts: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
    default:
      return state;
  }
}
