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
      <Post
        username="eve"
        caption="Wow sexy"
        imageUrl="https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <Post
        username="ema"
        caption="beautiful"
        imageUrl="https://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <Post
        username="elisa"
        caption="so cute"
        imageUrl="https://images.unsplash.com/photo-1565294124524-200bb738cdb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  );
}

export default App;
