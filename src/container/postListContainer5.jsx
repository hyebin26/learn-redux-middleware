import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList";
import { getPosts } from "../modules/posts7";

const PostListContainer5 = (props) => {
  const { data, loadding, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (data === null || loadding) return <div>로딩중..</div>;
  if (error) return <div>에러!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
};

export default PostListContainer5;
