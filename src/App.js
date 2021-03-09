import React from "react";
import { Route } from "react-router-dom";
import PostPage from "./pages/postPage";
import PostPageList from "./pages/postPageList";

function App() {
  return (
    <>
      <Route path="/" component={PostPageList} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
