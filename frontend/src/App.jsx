import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import ApiProvider from "./contexts/ApiContext";

function App() {
  return (
    <ApiProvider>
      <nav>
        <Navbar />
      </nav>
      <main className="App">
        <Outlet />
      </main>
    </ApiProvider>
  );
}

export default App;
