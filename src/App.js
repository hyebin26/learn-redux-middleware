import React from "react";
import { Route } from "react-router-dom";
import CounterContainer2 from "./container/counterContainer2";
import PostPage from "./pages/postPage";
import PostPageList from "./pages/postPageList";

function App() {
  return (
    <>
      <CounterContainer2 />
      <Route path="/" component={PostPageList} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
