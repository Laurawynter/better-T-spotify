import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import React from "react";

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;