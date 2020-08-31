import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="newt0"
          src="https://reactjs.org/logo-og.png"
        />
        <h3>{username}</h3>
        {/* header→avatar + username */}
      </div>

      <img src={imageUrl} alt="" className="post__image" />
      {/* image */}

      <h4 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h4>
      {/* location */}
    </div>
  );
}

export default Post;
