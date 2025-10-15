import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicArea from "./components/TopicArea/TopicArea";
import QuantitativeMethods from "./components/Quantitative/Quantitative";// Import the next page

const products = []; // If needed for TopicArea

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<TopicArea products={products} />} />
          <Route path="/quantitative" element={<QuantitativeMethods />} />
        </Routes>
      </div>
    </Router>
  );
}
