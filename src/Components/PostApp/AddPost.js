import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../JS/actions/posts";

const AddPost = () => {
  const [title, settitle] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => settitle(e.target.value)} />
      <button onClick={() => dispatch(addPost({ title, id: Math.random() }))}>
        AddPost
      </button>
    </div>
  );
};

export default AddPost;
