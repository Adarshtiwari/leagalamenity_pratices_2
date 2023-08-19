import { ADD_TO_CART, SET_TOKEN } from "../constants";

export default function User_reducer(state = [], action) {
  switch (action.type) {
    case SET_TOKEN:
      console.warn("reducer", action);
      return { ...state, userData: action.data };
      break;
    default:
      return state;
  }
}
