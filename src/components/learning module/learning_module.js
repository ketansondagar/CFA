import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./learning_module.css";
import json from "../../asset/json/learning_module.json";

export default function LearningModuleMethods() {
  // Memoize module list to avoid recalculating on each render
  const modules = useMemo(() => json.modales || [], []);

  // Helper for fetching images safely
  const getImage = (img) => require(`../../asset/images/${img}`);

  return (
    <div className="quant-page">

      {/* Header */}
      <header className="quant-header">
        <Link to="/" aria-label="Go to Home">
          <img src={getImage("left.png")} alt="Back" />
        </Link>
        <span style={{ paddingLeft: "10px" }}>Quantitative Methods</span>
      </header>

      {/*Scrollable Body*/}
      <div className="overflow" tabIndex={0} aria-label="Scrollable learning content">
        <section className="quant-description">
          <p>
            Explore quantitative concepts and techniques used in financial
            analysis and investment decision-making.
          </p>
        </section>

        <section className="quant-modules">
          <div className="row">
            {modules.map((m) => (
              <div key={m.id} className="col-md-12 col-lg-6">
                {m.enabled ? (
                  <Link to="/timeline" className="line" aria-label={`Open module ${m.title}`}>
                    <div className="quant-card-modal">
                      <img
                        src={getImage(m.image)}
                        alt={`${m.title} thumbnail`}
                        className="quant-card-img"
                      />
                      <div className="quant-card-text">
                        <p className="quant-card-title">{m.title}</p>
                        <p className="quant-card-subtitle">{m.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="quant-card-modal quant-disabled"
                    aria-disabled="true"
                    aria-label={`${m.title} is not available`}
                  >
                    <img
                      src={getImage(m.image)}
                      alt={`${m.title} thumbnail (disabled)`}
                      className="quant-card-img"
                    />
                    <div className="quant-card-text">
                      <p className="quant-card-title">{m.title}</p>
                      <p className="quant-card-subtitle">{m.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="topic-footer">
        <div className="row">
          <div className="col-4" style={{ textAlign: "left" }}>
            <img src={getImage("footer1.png")} alt="Footer left icon" />
          </div>

          <div className="col-4" style={{ textAlign: "center" }}>
            <img src={getImage("footer2.png")} alt="Footer center icon" />
          </div>

          <div className="col-4" style={{ textAlign: "right" }}>
            <img src={getImage("footer3.png")} alt="Footer right icon" />
          </div>
        </div>
      </footer>

    </div>
  );
}
