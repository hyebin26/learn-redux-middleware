import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList";
import { getPosts } from "../modules/posts3";

const PostContainer2 = (props) => {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <PostList posts={data} />;
};

export default PostContainer2;
