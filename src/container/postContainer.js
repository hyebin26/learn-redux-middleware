import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/post";
import { getPost } from "../modules/refactoryPosts";

const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!</div>;
  if (!data) return null;
  return <Post post={data} />;
};

export default PostContainer;
