import React, { useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import "./time.css";

export default function TimeValueOfMoney() {
  // Initialize Google Analytics once
  useEffect(() => {
    ReactGA.initialize("UA-000000-01");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // Memoized image loader (no re-creation on re-render)
  const getImage = useCallback((img) => {
    return require(`../../asset/images/${img}`);
  }, []);

  // Memoized static content
  const content = useMemo(
    () => ({
      title: "Time Value of Money",
      readinessQuote: "“Let's take a quick 5-question readiness check for this module.”",
    }),
    []
  );

  return (
    <div className="time-page">
      
      {/* Header */}
      <header className="time-header">
        <div className="row w-100 align-items-center">

          <div className="col-8 d-flex align-items-center">
            <Link to="/timeline" aria-label="Go back to timeline">
              <img src={getImage("left.png")} alt="Back" />
            </Link>

            <span className="font-wigh" style={{ paddingLeft: 10 }}>
              {content.title}
            </span>
          </div>

          <div className="col-4 text-right">
            <img src={getImage("home.png")} alt="Home" style={{ marginRight: 15 }} />
            <img src={getImage("line.png")} alt="Divider" />
          </div>

        </div>
      </header>

      {/* Scrollable Content */}
      <main className="time-overflow" tabIndex={0} aria-label="Learning content area">
        
        <div className="time-modules">
          <img src={getImage("timelineright.png")} alt="Module Progress" />
        </div>

        <section className="time-modules1">
          <div className="row">
            <div className="col-lg-1 d-none d-lg-block" />

            <div className="col-12 col-lg-10">
              <div className="time-card time-readiness-card">
                <div className="time-card-content">

                  <div className="time-readiness-icon">
                    <img
                      src={getImage("time.png")}
                      className="time-readiness-icon-box"
                      alt="Readiness Icon"
                    />
                  </div>

                  <div className="time-readiness-text">
                    <p className="time-readiness-quote">{content.readinessQuote}</p>

                    <Link
                      to="/readiness_check"
                      className="time-readiness-btn line"
                      aria-label="Start readiness check"
                    >
                      START
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-1 d-none d-lg-block" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="time-footer topic-footer">
        <div className="row w-100">
          
          <div className="col-4 text-left">
            <img src={getImage("footer1.png")} alt="Footer Left Icon" />
          </div>

          <div className="col-4 text-center">
            <img src={getImage("footer2.png")} alt="Footer Center Icon" />
          </div>

          <div className="col-4 text-right">
            <img src={getImage("footer3.png")} alt="Footer Right Icon" />
          </div>

        </div>
      </footer>

    </div>
  );
}
