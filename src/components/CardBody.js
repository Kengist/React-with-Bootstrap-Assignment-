import React from "react";

const CardBody = () => {
  return (
    <div>
      <h1>HTML Quiz </h1>
      <h3>Question 1 of 40:</h3>
      <p> What does HTML stand for?</p>
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
      <div>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default CardBody;
