//Promise를 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // 이 함수는 promiseCreator 가 단 하나의 파라미터만 받는다는 전제하에 작성되었따.
  // 만약 여러 종류의 파라미터를 전달해야 되는 상황에서는 객체 타입의 파라미터를 맏아오도록한다.
  // 예:writeComment({postId:1,text:'댓글내용'})

  return (param) => async (dispatch) => {
    //요청시작
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload }); //성공
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

// 리듀서에서 사용 할 수 있는 여러 유틸 함수들입니다.
export const reducerUtils = {
  //초기상태 , 초기 data같은 기본적으로 null이지만 바뀔수도 있따.
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  //로딩중 상태. prevState의 경우엔 기본값은 null이지만
  //따로 값을 지정하면 null로 바꾸지 않고 다른 값을 유지시킬 수 있다.
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

//비동기 관련 액션들을 처리하는 리듀서 만들기
// type은 액션의 타입 , key는 상태의 key(예:posts,post)입니다.
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
