import React from "react";
import PostContainer from "../container/postContainer";

const PostPage = ({ match }) => {
  const { id } = match.params;
  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;
