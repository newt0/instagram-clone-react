import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="newt0"
          src="https://reactjs.org/logo-og.png"
        />
        <h3>Username</h3>
        {/* header→avatar + username */}
      </div>

      <img
        src="https://reactjs.org/logo-og.png"
        alt=""
        className="post__image"
      />
      {/* image */}

      <h4 className="post__text">
        <strong>newt0</strong>a memory of day3
      </h4>
      {/* location */}
    </div>
  );
}

export default Post;
