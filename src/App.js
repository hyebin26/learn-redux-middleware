import "./App.css";

import React from "react";
import AsyncCounterContainer4 from "./container/asyncCounterContainer4";
import PostPage from "./pages/postPage";
import PostListPage from "./pages/postListPage";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div>
      <AsyncCounterContainer4 />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </div>
  );
};

export default App;
