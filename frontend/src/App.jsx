import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import ApiProvider from "./contexts/ApiContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ApiProvider>
      <nav>
        <Navbar />
      </nav>
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </ApiProvider>
  );
}

export default App;
