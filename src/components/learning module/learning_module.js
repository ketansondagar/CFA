import React from "react";
import "./learning_module.css"; // Import external CSS
import json from "../../asset/json/learning_module.json"; // Import JSON data

const modules = json.modales;

export default function learningmoduleMethods() {
  return (
    <div className="quant-page">

      {/* Fixed Header */}
      <div className="quant-header">
        <a href="/" aria-label="Home">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="6" fill="#F7F9FB" />
            <path d="M21.125 9.125L12.875 17L21.125 24.875" stroke="#0F3349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <span style={{ paddingLeft: "10px" }}>Quantitative Methods</span>
      </div>

      {/* Fixed Description */}
      <div className="overflow" tabIndex={0}>
        <div className="quant-description">
          <p>
            Explore quantitative concepts and techniques used in financial
            analysis and investment decision-making.
          </p>
        </div>

        {/* Scrollable Modules */}
        <div className="quant-modules">
          <div className="row">
            {modules.map((m) => (
              <div key={m.id} className="col-md-12 col-lg-6">
                {m.enabled ? (
                <a href="time" className="line">
                <div className="quant-card">
                  <img src={require(`../../asset/images/${m.image}`)} alt={m.description} className="quant-card-img" />
                  <div className="quant-card-text">
                    <p className="quant-card-title">{m.title}</p>
                    <p className="quant-card-subtitle">{m.description}</p>
                  </div>
                </div>
                </a>
                 ) : (
                  <div className="quant-card">
                  <img src={require(`../../asset/images/${m.image}`)} alt={m.description} className="quant-card-img" />
                  <div className="quant-card-text">
                    <p className="quant-card-title">{m.title}</p>
                    <p className="quant-card-subtitle">{m.description}</p>
                  </div>
                </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Fixed Footer */}
      <div className="topic-footer">
        <p>© cfa institute</p>
      </div>
    </div>
  );
}
