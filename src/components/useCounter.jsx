import { useReducer } from "react";

const initialState = { val: 0 };

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { val: state.val + 1 };
  }
  if (action.type === "DECREMENT") {
    return { val: state.val - 1 };
  }
  if (action.type === "RESET") {
    return { val: 0 };
  }
  if (action.type === "SET") {
    return { val: action.payload };
  }
  return state;
};

const useCounter = () => {
  const [counterState, dispatchFn] = useReducer(counterReducer, initialState);
  const increment = () => {
    dispatchFn({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatchFn({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatchFn({ type: "RESET" });
  };
  const set = (value) => {
    dispatchFn({ type: "SET", payload: value });
  };

  const value = counterState.val;

  return { value, increment, decrement, reset, set };
};
export default useCounter;
