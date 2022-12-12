import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const title = "blog post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
  ];

  const loading = false;
  const showComments = true;
  const commentBlock = (<div className="comments">
  <h3>Comments({comments.length})</h3>
  <ul>
    {comments.map((comment, index) => (
      <li key={index}> {comment.text} </li>
    ))}
  </ul>
</div>)

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {/* {Math.random() * (5 + 5)} */}

      {/* fuckin Hey
        put Parenthesis around turnary first condition ? to render anything in JSX
        put && and no :  if there is no else statement
        or you could do {condition ? () : null}

         If showComments is true then show the showComments 
        */}

      {showComments && (commentBlock) }
    </div>
  );
}

export default App;
