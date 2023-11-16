import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApiProvider from "./contexts/ApiContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ApiProvider>
      <div className="base-background">
        <nav>
          <Navbar />
        </nav>
        <main className="App">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ApiProvider>
  );
}

export default App;
