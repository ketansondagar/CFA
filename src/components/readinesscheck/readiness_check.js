import React, { useState } from "react";
import "./readiness_check.css";
import json from "../../asset/json/LM1.json";

export default function TimeValueQuestion() {
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = json.questions || [];
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return <div>Loading questions...</div>;
 const [count, setCount] = useState(5);
  const handleContinue = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCount(prev => prev + 5);
      setSelectedOption("");
      setSelectedOptionId("");
    } else {
      console.log("✅ All questions completed!");
    }
  };

  const handleclose = () => {
    if (currentQuestionIndex < questions.length - 1) {
      if (currentQuestionIndex == 0) {

      }
      else {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setCount(prev => prev - 5);
      }

    }
    else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCount(prev => prev - 5);
    }
  };

  return (
    <div className="quant-pagerc">
      {/* Header */}
      <div className="quant-header">
        <a href="/time" aria-label="Home">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="6" fill="#F7F9FB" />
            <path
              d="M21.125 9.125L12.875 17L21.125 24.875"
              stroke="#0F3349"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "10px" }}>
          <span className="quant-header-title">Learning Module:</span>
          <span className="quant-header-subtitle">Time Value Of Money</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="overflow" tabIndex={0}>
        <div className="qua-description">
          <div className="row align-items-center">
            <div className="col-lg-1 col-1 text-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "-5px" }}
                onClick={handleclose} >
                <rect width="34" height="34" rx="6" fill="#F7F9FB" />
                <path
                  d="M23.375 10.625L10.625 23.375M10.625 10.625L23.375 23.375"
                  stroke="#0F3349"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {[...Array(questions.length)].map((_, i) => (
              <div key={i} className="col-lg-2 col-2">
                <div className={i <= currentQuestionIndex ? "border-b" : "border-w"}></div>
              </div>
            ))}

            <div className="col-lg-1 col-1 text-end">
              <span className="font-w">
                {currentQuestionIndex + 1}/{questions.length}
              </span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="padd-w">
          <div className="question-card">
            <div className="question-header">
              <p>{currentQuestion.question}</p>
            </div>

            <div className="row">
              {currentQuestion.options.map((item) => (
                <div key={item.id} className="col-lg-6 mar-b">
                  <div
                    className={`question-options ${selectedOption === item.option ? "active" : ""
                      }`}
                  >
                    <label className="option">
                      <input
                        type="radio"
                        name={`q-${currentQuestion.id}`}
                        checked={selectedOption === item.option}
                        onChange={() => {
                          setSelectedOption(item.option);
                          setSelectedOptionId(item.id);
                        }}
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
              disabled={!selectedOption}
              data-bs-toggle="modal"
              data-bs-target={selectedOptionId === "2" ? "#Confidence" : "#retry"}
            >
              Check
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="topic-footer">
        <p>© cfa institute</p>
      </div>

      {/* Continue Modal */}
      <div className="modal fade bottom-modal" id="Continue" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title blackc">Are you sure?</h5>
              <p>If you quit now, you will lose your progress.</p>
              <div className="colorset row">
                <button
                  className="check-btn active"
                  data-bs-dismiss="modal"
                  onClick={handleContinue}
                >
                  Continue
                </button>
                <a href="/time" className="check-btn btn-color">
                  Quit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confidence Modal */}
      <div className="modal fade bottom-modal" id="Confidence" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title">
                <img
                  src={require(`../../asset/images/modalimage.png`)}
                  className="w-h-60"
                  alt="Correct"
                />{" "}
                That’s Correct!
              </h5>
              <p>
                TVM reflects opportunity cost—the earlier you receive funds, the more value they
                hold.
              </p>
              <div className="colorset row">
                <div className="col-2 text-center">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="64" height="64" rx="11.2941" fill="#F5F8FF" />
                    <path
                      d="M31.1978 42.9578L20.9073 39.7075C19.9931 39.4188 20.1094 38.0898 21.0598 37.9642L31.7584 36.5502C33.8479 36.274 35.6557 38.0038 35.472 40.1034C35.2883 42.203 33.2076 43.5926 31.1978 42.9578Z"
                      fill="#0F3349"
                    />
                    <path
                      d="M52.5334 41.2388C52.5334 36.616 51.0059 32.35 48.428 28.918"
                      stroke="#1AB88E"
                      strokeWidth="4.10695"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.678 24.8105C23.11 22.2326 27.376 20.7051 31.9988 20.7051C36.6216 20.7051 40.8877 22.2326 44.3197 24.8105"
                      stroke="#1AB88E"
                      strokeWidth="4.10695"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.4648 41.2388C11.4648 36.616 12.9924 32.35 15.5703 28.918"
                      stroke="#1AB88E"
                      strokeWidth="4.10695"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="col-10">
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
                <button
                  className="check-btn active"
                  data-bs-toggle="modal"
                  data-bs-target="#Continue"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retry Modal */}
      <div className="modal fade bottom-modal" id="retry" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title colorred"><svg
                width="26"
                height="26"
                style={{ marginLeft: "10px" }}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.41675 20.5827L13.0001 12.9993M13.0001 12.9993L20.5834 5.41602M13.0001 12.9993L5.41675 5.41602M13.0001 12.9993L20.5834 20.5827"
                  stroke="#FF0C0C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> Not quite.</h5>
              <p>
                Inflation affects purchasing power, but TVM is broader—it’s about the earning
                potential of money over time.
              </p>
              <div className="colorset row">
                <button className="check-btn active" data-bs-dismiss="modal">
                  Retry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
