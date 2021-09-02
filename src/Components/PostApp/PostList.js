import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  // to import data from store=> useSelector
  const posts = useSelector((state) => state.postReducer.posts);
  return (
    <div>
      {posts.map((el) => (
        <h1>{el.title}</h1>
      ))}
    </div>
  );
};

export default PostList;
