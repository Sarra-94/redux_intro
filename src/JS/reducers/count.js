import { DECREMENT, INCREMENT } from "../constants/count";

// initialState={}
const initialState = {
  count: 0,
};

// pure Fubction (state=initiastate, action)==> updated state or the initialstate

const countReducer = (state = initialState, action) => {
  // action est un objet qui contient (type, payload)
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

// export the function
export default countReducer;
