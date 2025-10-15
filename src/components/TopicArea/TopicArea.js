import React from "react";
import "./TopicArea.css";
import json from "./topicArea.json";
import { Link } from "react-router-dom";// Import the CSS file
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const topics = json.topics;

export default function TopicCards() {
  return (
    <div className="topic-container">
      <h2 className="topic-heading">Choose a Topic Area</h2>

      <div className="topic-list">
        <div className="row">
          {topics.map((topic) => (
            <div key={topic.id} className="col-md-6 col-lg-3">
              <div className="topic-card">
                {topic.title === 'Quantitative Methods' ? (
                  <a href="Quantitative">
                    <img src={topic.image} alt={topic.title} className="topic-image" />
                    <div className="topic-overlay">
                      <div className="title-div">
                        <h5 className="topic-title">{topic.title}</h5>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="topic-card-disabled">
                    <img src={topic.image} alt={topic.title} className="topic-image" />
                    <div className="topic-overlay">
                      <div className="title-div">
                        <h5 className="topic-title">{topic.title}</h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="topic-footer"><p>© cfa institute</p></div>
    </div>
  );
}
