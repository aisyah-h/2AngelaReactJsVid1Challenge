//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>A Few of My Favourite Things</h1>
    {/*Note: this line shows how to comment in React JSX.*/}
    {/*unordered list*/}
    <h3>In no order:</h3>
    <ul>
      <li>cats</li>
      <li>chocolates</li>
      <li>mochi</li>
      <li>milk tea</li>
    </ul>
    {/*ordered list*/}
    <h3>In order:</h3>
    <ol>
      <li>cats</li>
      <li>cats</li>
      <li>cats</li>
    </ol>
    {/*description list*/}
    <h3>If I had to describe them:</h3>
    <dl>
      <dt>1. Comel</dt>
      <dd>- because she loves me back</dd>
      <dt>2. Jamal</dt>
      <dd>- because he lives with us and is a handsome burger</dd>
    </dl>
  </div>,
  document.getElementById("root")
);
