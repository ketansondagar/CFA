import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicArea from "./components/topic/topic";
import QuantitativeMethods from "./components/learning module/learning_module";// Import the next page
import TimeValueOfMoney from "./components/time/time";
import Readinesscheck from "./components/readiness check/readiness_check";
// import Money from "./components/money/money";
// import Conceptsnapshots from "./components/concept snapshots/concept_snapshots";
import Timeline from "./components/timeline/timeline";


const products = []; // If needed for TopicArea

// App.jsx or App.js
function App() {
  return (
    <>
      <header>
        <h1 className="sr-only">learning_module Methods Portal</h1>
      </header>

      <main>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<TopicArea products={products} />} />
              <Route path="/learning_module" element={<QuantitativeMethods />} />
              <Route path="/time" element={<TimeValueOfMoney />} />
              <Route path="/readiness_check" element={<Readinesscheck />} />
              <Route path="/timeline" element={<Timeline />} />
              {/* <Route path="/money" element={<Money />} />
              <Route path="/concept_snapshots" element={<Conceptsnapshots />} /> */}
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

