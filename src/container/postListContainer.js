import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList";
import { getPosts } from "../modules/refactoryPosts";

const PostListContainer = (props) => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error !!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
};

export default PostListContainer;
