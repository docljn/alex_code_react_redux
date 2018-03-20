import React from 'react';

const Post = (props) => (

  <div>
    <h2>{props.post.title}</h2>
    <p>{props.post.content}</p>
    <p>by {props.post.user} on {props.post.date}</p>
  </div>
  
)

export default Post;