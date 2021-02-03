import "./App.css";

import React from "react";
import AsyncCounterContainer from "./container/asyncCounterContainer";
import PostListContainer from "./container/postListContainer";
import PostPage from "./pages/postPage";
import PostListPage from "./pages/postListPage";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </div>
  );
};

export default App;
