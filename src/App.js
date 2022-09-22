import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
