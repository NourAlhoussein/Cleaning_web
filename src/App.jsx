import { useState } from "react";
import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <>
      <Router basename="/Cleaning_web">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<OurServices />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
