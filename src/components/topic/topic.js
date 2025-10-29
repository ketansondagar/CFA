import React from "react";
import "./topic.css";
import json from "../../asset/json/topic.json";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const topics = json.topics;

export default function TopicCards() {
  return (
    <div className="topic-container">

      {/* Fixed Header */}
      <div className="topic-heading">
        <h2>Choose a Topic Area</h2>
      </div>

      {/* Scrollable Content */}
      <div className="topic-list">
        <div className="row">
          {topics.map((topic) => (
            <div key={topic.id} className="col-md-6 col-lg-3">
              <div className={`topic-card ${topic.enabled ? "true" : "false"}`}>
                {topic.enabled ? (
                  <Link to="/learning_module">
                    <img src={require(`../../asset/images/${topic.image}`)} alt='' className="topic-image" />
                    <div className="topic-overlay">
                      <div className="title-div">
                        <h5 role="heading" aria-level="3" className="topic-title">{topic.title}</h5>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="topic-card-disabled">
                    <img src={require(`../../asset/images/${topic.image}`)} alt='' className="topic-image" />
                    <div className="topic-overlay">
                      <div className="title-div">
                        <h5 role="heading" aria-level="3" className="topic-title">{topic.title}</h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="topic-footer">
        <p>© cfa institute</p>
      </div>
    </div>
  );
}
