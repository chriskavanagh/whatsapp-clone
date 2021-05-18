import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";

function App() {
  const [id, setId] = useState();
  console.log(id);
  return (
    <>
      <h4>{id}</h4>
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
