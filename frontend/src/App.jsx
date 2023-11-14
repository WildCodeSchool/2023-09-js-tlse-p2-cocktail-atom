import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import AlertAge from "./components/AlertAge";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <AlertAge />
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
