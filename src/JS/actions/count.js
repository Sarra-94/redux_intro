//  action heya fonction that return an object that contain

import { INCREMENT, DECREMENT } from "../constants/count";

// a type and a payload in necessity
export const incerement = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = (data) => {
  return {
    type: DECREMENT,
    payload: data,
  };
};
