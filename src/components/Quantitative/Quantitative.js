import React from "react";
import { ArrowLeft } from "lucide-react";
import "./Quantitative.css"; // Import external CSS
import json from "./Quantitative.json"; // Import JSON data

const modules = json.modales

export default function QuantitativeMethods() {
  return (
    <div className="quant-page">
      {/* Header */}
      <div className="quant-header">
        <a href="/"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="6" fill="#F7F9FB"/>
<path d="M21.125 9.125L12.875 17L21.125 24.875" stroke="#0F3349" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
    <span style={{ paddingLeft: "10px" }}>Quantitative Methods</span>
      </div>

      {/* Description */}
      <div className="quant-description">
        <p>
          Explore quantitative concepts and techniques used in financial
          analysis and investment decision-making.
        </p>
      </div>

      {/* Learning Modules */}
      <div className="quant-modules">
        <div className="row">
        {modules.map((m) => (
          <div className="col-md-12 col-lg-6">
          <div key={m.id} className="quant-card">
            <img src={m.image} alt={m.description} className="quant-card-img" />
            <div className="quant-card-text">
              <p className="quant-card-title">{m.title}</p>
              <p className="quant-card-subtitle">{m.description}</p>
            </div>
          </div>
          </div>
        ))}
        </div>
      </div>

      {/* Footer */}
      <div className="topic-footer"><p>© cfa institute</p></div>
    </div>
  );
}
