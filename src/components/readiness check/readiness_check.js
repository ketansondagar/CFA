import React, { useState, useMemo, useCallback } from "react";
import "./readiness_check.css";
import json from "../../asset/json/LM1.json";

export default function TimeValueQuestion() {
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  // ✅ Central image loader using useCallback
  const getImage = useCallback((img) => {
    return require(`../../asset/images/${img}`);
  }, []);

  const questions = json.questions || [];
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return <div>Loading questions...</div>;

  const count = useMemo(() => {
    return ((currentQuestionIndex + 1) / questions.length) * 20;
  }, [currentQuestionIndex, questions.length]);

  const nextCountValue = useMemo(() => {
    return ((currentQuestionIndex + 2) / questions.length) * 20;
  }, [currentQuestionIndex, questions.length]);

  const handleContinue = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption("");
      setSelectedOptionId("");
    }
  }, [currentQuestionIndex, questions.length]);

  const handlesContinue = useCallback(() => {
    setIsDisabled(false);
  }, []);

  const handleQuit = useCallback(() => {
    setIsDisabled(true);
    setSelectedOption("");
    setSelectedOptionId("");
  }, []);

  return (
    <div className="quant-pagerc">

      {/* Header */}
      <div className="quant-header">
        <div className="row w-100 align-items-center">
          <div className="col-8 d-flex align-items-center">
            <a href="/time" aria-label="Home" style={{ display: "flex", alignItems: "center" }}>
              <img src={getImage("left.png")} alt="back" />
            </a>
            <span style={{ paddingLeft: "10px" }}>Readiness check</span>
          </div>

          <div className="col-4 text-right d-flex justify-content-end align-items-center">
            <img src={getImage("home.png")} style={{ marginRight: '15px' }} alt="home" />
            <img src={getImage("line.png")} style={{ marginRight: '15px' }} alt="line" />
            <img src={getImage("meeter.png")} alt="meter" />
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className={`qua-description ${currentQuestionIndex < questions.length - 1 ? "show" : "hide"}`} tabIndex="0">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto d-flex align-items-center">
            {questions.map((_, i) => (
              <div
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: i <= currentQuestionIndex ? "#336AFF" : "#F0E6DA",
                  margin: "0 4px",
                }}
              ></div>
            ))}
          </div>
          <div className="col-auto">
            <span style={{ fontWeight: "500", color: "#333" }}>
              {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className={`overf ${currentQuestionIndex < questions.length - 1 ? "show" : "hide"}`} tabIndex={0}>
        <div className="padd-w">
          <div className="question-card">
            <div className="question-header">
              <p>{currentQuestion.question}</p>
            </div>

            <div className="row">
              {currentQuestion.options.map((item) => (
                <div key={item.id} className="col-lg-6 mar-b">
                  <div className={`question-options ${selectedOption === item.option ? "active" : ""}`}>
                    <label className="option">
                      <input
                        type="radio"
                        name={`q-${currentQuestion.id}`}
                        checked={selectedOption === item.option}
                        onChange={() => {
                          setSelectedOption(item.option);
                          setSelectedOptionId(item.id);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#Continue"
                      />
                      <span>{item.option}</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Check Button */}
          <div className="bottom-b">
            <button
              className={`check-btn ${selectedOption ? "active" : ""}`}
              disabled={isDisabled}
              data-bs-toggle="modal"
              data-bs-target={selectedOptionId === "2" ? "#Confidence" : "#retry"}
            >
              Check
            </button>
          </div>
        </div>
      </div>

      {/* COMPLETION SCREEN */}
      <div className={`readiness-overflow ${currentQuestionIndex < questions.length - 1 ? "hide" : "show"}`} tabIndex={0}>
        <div className="readiness-module">
          <img src={getImage("timelineright.png")} alt="complete" />
        </div>

        <div className="readiness-modules1">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10" style={{ padding: '30px' }}>
              <div className="time-card time-readiness-card">
                <div className="time-card-content">
                  <div className="readiness-icon">
                    <img src={getImage("time.png")} className="time-readiness-icon-box" alt="time" />
                  </div>

                  <div className="time-readiness-text readiness-text">
                    <p className="time-readiness-quote1">You’ve completed</p>

                    <div className="xp-card">
                      <div className="xp-value">
                        <span className="plus">+{json.xp}</span> <span className="xp-text">XP</span>
                      </div>
                      <div className="xp-label">Added to Streak</div>
                    </div>

                    <div className=" row bar-d">
                      <div className="col-3 text-center center-c">
                        <img src={getImage("speed.png")} alt="speed" />
                      </div>
                      <div className="col-9 text-left">
                        Confidence Meter
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={count} aria-valuemin="0" aria-valuemax="100" style={{ width: `${count}%` }}></div>
                        </div>
                        <span className="font-s">{Math.round(count)}%: Building Confidence</span>
                      </div>
                    </div>

                    <p className="font-w">Concept snapshots for time value of money are now unlocked.</p>

                    <button className="time-readiness-btn line">Continue</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="topic-footer">
        <div className="row">
          <div className="col-4 text-left">
            <img src={getImage("footer1.png")} alt="footer1" />
          </div>
          <div className="col-4 text-center">
            <img src={getImage("footer2.png")} alt="footer2" />
          </div>
          <div className="col-4 text-right">
            <img src={getImage("footer3.png")} alt="footer3" />
          </div>
        </div>
      </div>

      {/* Modal: Continue */}
      <div className="modal fade bottom-modal" id="Continue" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title blackc">Are you sure?</h5>
              <p>If you quit now, you will lose your progress. Do you want to continue the module?</p>

              <div className="row">
                <div className="col-5">
                  <button data-bs-dismiss="modal" onClick={handleQuit} className="check-btn btn-color">
                    No, QUIT
                  </button>
                </div>

                <div className="col-7">
                  <button className="check-btn active" data-bs-dismiss="modal" onClick={handlesContinue}>
                    YES, CONTINUE
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal: Correct */}
      <div className="modal fade bottom-modal" id="Confidence" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title">
                <img src={getImage("sussess.png")} alt="success" />{" "}
                Exactly. <span className="padi-b">+{json.questionxp} XP</span>
              </h5>

              <p>TVM reflects opportunity cost—the earlier you receive funds, the more value they hold.</p>
              <div className="colorset">
                <div className="row" style={{ padding: '10px' }}>
                  <div className="col-3 col-md-2 text-center">
                    <img src={require(`../../asset/images/speed.png`)}></img>

                  </div>
                  <div className="col-9 col-md-10">
                    Confidence Meter
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={count}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${count}%` }}
                      ></div>
                    </div>
                    <span className="font-s">{count}%: Building Confidence</span>
                  </div>
                </div>
              </div>
              <button className="check-btn active" onClick={handleContinue} data-bs-dismiss="modal">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Retry */}
      <div className="modal fade bottom-modal" id="retry" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title colorred">
                <img src={getImage("close.png")} alt="close" style={{ marginRight: '10px' }} />Not quite.
              </h5>

              <p>Inflation affects purchasing power, but TVM is broader. It’s about earning potential over time.</p>

              <button className="check-btn active" data-bs-dismiss="modal">
                Continue
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
