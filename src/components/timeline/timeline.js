import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./timeline.css";

export default function Timeline() {
  // Image loader helper
  const getImage = (img) => require(`../../asset/images/${img}`);

  // Memoize static timeline data to prevent re-renders
  const timelineData = useMemo(() => ({
    title: "Time value of money",
    duration: "30-35 Minutes",
    steps: [
      { icon: "task1.png", label: "Readiness Check", unlockedIcon: "taskunlook.png" },
      { icon: "task2.png", label: "Concept Snapshots", unlockedIcon: "tasklook.png" },
      { icon: "task3.png", label: "Confidence Builder", unlockedIcon: "tasklook.png" },
      { icon: "task4.png", label: "Scenario Challenge", unlockedIcon: "tasklook.png" },
      { icon: "task5.png", label: "Flashcards", unlockedIcon: "tasklook.png" }
    ]
  }), []);

  return (
    <div className="time-page">

      {/* Header */}
      <header className="timeline-header">
        <div className="row w-100">
          <div className="col-8 d-flex align-items-center">
            <Link to="/learning_module" aria-label="Go back">
              <img src={getImage("left.png")} alt="Back" />
            </Link>
            <span style={{ paddingLeft: 10 }}>Progress</span>
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="time-overflow" tabIndex={0} aria-label="Timeline content scroll area">

        {/* Title & Time */}
        <div className="row">
          <div className="col-6 color-p">
            <h2>{timelineData.title}</h2>
            <span>{timelineData.duration}</span>
          </div>
          <div className="col-6 text-right">
            <div className="time-modules">
              <img src={getImage("timelineright.png")} alt="Progress timeline" />
            </div>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="timeline-modules1" style={{ height: "auto", padding: 30 }}>
          <div className="timeline-modules time-card" style={{ background: "#FBF5EF" }}>

            {/* 1: Readiness Check Block */}
            <div className="row">
              <div className="col-4 text-center col-lg-2 margin-l-8">
                <img
                  src={getImage("task1.png")}
                  alt="Readiness Check"
                  data-bs-toggle="modal"
                  data-bs-target="#ReadinessCheck"
                />
                <br />
                <img src={getImage("taskunlook.png")} alt="Locked state" />
              </div>
              <div className="col-8 col-lg-9" style={{ padding: 0 }}>
                <span className="font-color">Readiness<br />Check</span>
              </div>
            </div>

            <img src={getImage("taskline.png")} className="center-box-b" alt="" />

            {/* 2: Concept Snapshot */}
            <div className="row" style={{ textAlign: "end", zIndex: 1 }}>
              <div className="col-9 col-lg-11">
                <span className="font-color-b">Concept<br />Snapshots</span>
              </div>
              <div className="col-3 text-center col-lg-1 margin-l">
                <img src={getImage("task2.png")} alt="Concept Snapshots" />
                <br />
                <img src={getImage("tasklook.png")} alt="Unlocked state" />
              </div>
            </div>

            <img src={getImage("tasklineright.png")} className="center-box" alt="" />

            {/* 3: Confidence Builder */}
            <div className="row" style={{ zIndex: 1 }}>
              <div className="col-4 text-center col-lg-2 margin-l-8">
                <img src={getImage("task3.png")} alt="Confidence Builder" />
                <br />
                <img src={getImage("tasklook.png")} alt="Unlocked state" />
              </div>
              <div className="col-8 col-lg-9" style={{ padding: 0 }}>
                <span className="font-color-b">Confidence<br />Builder</span>
              </div>
            </div>

            <img src={getImage("taskline.png")} className="center-box-b" alt="" />

            {/* 4: Scenario Challenge */}
            <div className="row" style={{ textAlign: "end", zIndex: 1 }}>
              <div className="col-9 col-lg-11">
                <span className="font-color-b">Scenario<br />Challenge</span>
              </div>
              <div className="col-3 text-center col-lg-1 margin-l">
                <img src={getImage("task4.png")} alt="Scenario Challenge" />
                <br />
                <img src={getImage("tasklook.png")} alt="Unlocked state" />
              </div>
            </div>

            <img src={getImage("tasklineright.png")} className="center-box" alt="" />

            {/* 5: Flashcards */}
            <div className="row" style={{ zIndex: 1 }}>
              <div className="col-4 text-center col-lg-2 margin-l-8">
                <img src={getImage("task5.png")} alt="Flashcards" />
                <br />
                <img src={getImage("tasklook.png")} alt="Unlocked state" />
              </div>
              <div className="col-8 col-lg-9" style={{ padding: 0 }}>
                <span className="font-color-b">Flashcards</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="time-footer topic-footer">
        <div className="row w-100">
          <div className="col-4 text-left">
            <img src={getImage("footer1.png")} alt="Footer icon left" />
          </div>
          <div className="col-4 text-center">
            <img src={getImage("footer2.png")} alt="Footer icon center" />
          </div>
          <div className="col-4 text-right">
            <img src={getImage("footer3.png")} alt="Footer icon right" />
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div className="modal fade bottom-modal" id="ReadinessCheck" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">
              <p className="p-class" style={{ color: "#4476FF", textAlign: "left" }}>
                Readiness Check
              </p>
              <div className="row">
                <a href="/time" className="check-btn active1">
                  START
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
