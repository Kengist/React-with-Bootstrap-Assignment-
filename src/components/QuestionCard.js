import React from "react";

const QuestionCard = () => {
  return (
    <div>
      <p className="question"> What does HTML stand for?</p>
      <div>
        <div className="form-check bg-gray py-3">
          <input
            type="radio"
            className="form-check-input mx-2"
            id="radio1"
            name="optradio"
            value="option1"
            checked
          />

          <label className="form-check-label" for="radio1">
            Option 1
          </label>
        </div>
        <div className="form-check bg-gray py-2">
          <input
            type="radio"
            className="form-check-input mx-2"
            id="radio1"
            name="optradio"
            value="option1"
            checked
          />

          <label className="form-check-label" for="radio1">
            Option 1
          </label>
        </div>
        <div className="form-check bg-gray py-2">
          <input
            type="radio"
            className="form-check-input mx-2"
            id="radio1"
            name="optradio"
            value="option1"
            checked
          />

          <label className="form-check-label" for="radio1">
            Option 2
          </label>
        </div>
        <div className="form-check bg-gray py-2">
          <input
            type="radio"
            className="form-check-input mx-2"
            id="radio1"
            name="optradio"
            value="option1"
            checked
          />

          <label className="form-check-label" for="radio1">
            Option 2
          </label>
        </div>
        <div className="form-check bg-gray py-2">
          <input
            type="radio"
            className="form-check-input mx-2"
            id="radio1"
            name="optradio"
            value="option1"
            checked
          />

          <label className="form-check-label" for="radio1">
            Option 4
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
