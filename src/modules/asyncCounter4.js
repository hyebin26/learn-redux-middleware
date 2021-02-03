const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};
const initialState = 0;

export default function asyncCounter4(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state + -1;
    default:
      return state;
  }
}
