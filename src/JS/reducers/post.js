import { ADD_POST } from "../constants/posts";

// initialstate
const initialState = {
  posts: [{ id: Math.random(), title: "FisrtPost" }],
  show: false,
};

// purefunction
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    default:
      return state;
  }
};
// export
export default postReducer;
