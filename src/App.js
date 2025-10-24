import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicArea from "./components/topic/topic";
import QuantitativeMethods from "./components/learning module/learning_module";// Import the next page

const products = []; // If needed for TopicArea

// App.jsx or App.js
function App() {
  return (
    <>
      <header>
        <h1 className="sr-only">Quantitative Methods Portal</h1>
      </header>

      <main>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<TopicArea products={products} />} />
              <Route path="/quantitative" element={<QuantitativeMethods />} />
            </Routes>
          </div>
        </Router>
      </main>

      <footer>
        {/* <p>© CFA Institute</p> */}
      </footer>
    </>
  );
}

export default App;

