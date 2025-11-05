import React, { useMemo, useEffect } from "react";
import "./topic.css";
import json from "../../asset/json/topic.json";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

// Initialize Google Analytics Once
ReactGA.initialize("UA-000000-01");

export default function TopicCards() {
  const topics = useMemo(() => json.topics || [], []);

  // Track Page View Once
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // Helper to load images safely
  const getImage = (img) => require(`../../asset/images/${img}`);

  return (
    <div className="topic-container">

      {/* Header */}
      <header className="topic-heading">
        <h2>Topics</h2>
      </header>

      {/* Scrollable List */}
      <main className="topic-list">
        <div className="row">
          {topics.map((topic) => (
            <div key={topic.id} className="col-md-6 col-lg-3">
              <article
                className={`topic-card ${topic.enabled ? "enabled" : "disabled"}`}
                aria-disabled={!topic.enabled}
              >
                {topic.enabled ? (
                  <Link
                    to="/learning_module"
                    aria-label={`Open topic ${topic.title}`}
                  >
                    <img
                      src={getImage(topic.image)}
                      alt={`${topic.title} topic thumbnail`}
                      className="topic-image"
                    />

                    <div className="topic-overlay">
                      <div className="title-div">
                        <h3 className="topic-title">{topic.title}</h3>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="topic-card-disabled" aria-label={`${topic.title} disabled`}>
                    <img
                      src={getImage(topic.image)}
                      alt={`${topic.title} topic thumbnail (disabled)`}
                      className="topic-image"
                    />

                    <div className="topic-overlay">
                      <div className="title-div">
                        <h3 className="topic-title">{topic.title}</h3>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="topic-footer">
        <div className="row">
          <div className="col-4" style={{ textAlign: "left" }}>
            <img src={getImage("footer1.png")} alt="Logo footer left" />
          </div>

          <div className="col-4" style={{ textAlign: "center" }}>
            <img src={getImage("footer2.png")} alt="Center footer logo" />
          </div>

          <div className="col-4" style={{ textAlign: "right" }}>
            <img src={getImage("footer3.png")} alt="Logo footer right" />
          </div>
        </div>
      </footer>

    </div>
  );
}
