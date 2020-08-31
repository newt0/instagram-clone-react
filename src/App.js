import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
          className="app__headerImage"
        />
      </div>

      <h1>Insta clone react!</h1>

      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
