import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/general/Nav";
import PropsData from "./components/PropsData";
import Footer from "./components/general/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
  <PropsData />
  <Footer />
    </div>
  );
}

export default App;
