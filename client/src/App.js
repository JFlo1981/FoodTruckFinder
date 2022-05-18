import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
