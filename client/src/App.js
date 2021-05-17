import "./App.css";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [id, setId] = useState();
  return <Login onIdSubmit={setId} />;
}

export default App;
