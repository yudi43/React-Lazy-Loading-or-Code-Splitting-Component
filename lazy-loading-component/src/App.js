import React from "react";
import logo from "./logo.svg";
import "./App.css";

//implementation of HOC/asyncComponent
// NewPost is an example here, first its shown how its imported normally and then lazily.
// import NewPost from "./NewPost/NewPost"; //Normally
// using lazyLoading...
import asyncComponent from "./HOC/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  import("./NewPost/NewPost");
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        |<NewPost /> //Without lazyLoading
        <AsyncNewPost /> //With lazyLoading
      </header>
    </div>
  );
}

export default App;
