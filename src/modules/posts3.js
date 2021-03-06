import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as postAPI from "../api/posts";
import { handleAsyncActions } from "../lib/asyncUtils";

const GET_POSTS = "GET_POSTS ";
const GET_POSTS_SUCEESS = "GET_POSTS_SUCEESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

export const getPosts = () => ({ type: GET_POSTS });

function* getPostsSaga() {
  try {
    const posts = yield call(postAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCEESS,
      payload: posts,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_ERROR,
      error: true,
      payload: e,
    });
  }
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}

const initialState = {
  posts: postAPI.reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCEESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
  }
}
