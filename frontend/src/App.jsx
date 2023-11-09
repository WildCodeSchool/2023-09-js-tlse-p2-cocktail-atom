import "./App.css";
import Navbar from "./components/Navbar";
import AlertAge from "./components/AlertAge";

function App() {
  return (
    <div className="App">
      <AlertAge />
      <Navbar />
    </div>
  );
}

export default App;
