import React from "react";
import { Route } from "react-router-dom";
import CounterContainer4 from "./container/counterContainer4";
import PostPage from "./pages/postPage";
import PostPageList from "./pages/postPageList";

function App() {
  return (
    <>
      <CounterContainer4 />
      <Route path="/" component={PostPageList} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
