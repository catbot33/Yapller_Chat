import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth";
import { Yapller } from "./components/yapller";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} /> {/* Login page */}
        <Route path="/Yapller" element={<Yapller />} /> {/* Main page */}
      </Routes>
    </Router>
  );
}

export default App;
