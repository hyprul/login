import React from "react";
import Form from './Login'

var isLoggedIn = true;

function renderConditional() {
  if (isLoggedIn) {
    return <h1>Hello</h1>
  }
  else {
    return (
      <Form />
    )
  }
}

function App() {
  return (
    <div className="container">
      {renderConditional()}
    </div>
  );
}

export default App;
