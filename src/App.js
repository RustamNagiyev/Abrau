import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Home/About";
import Nav from "./components/general/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
