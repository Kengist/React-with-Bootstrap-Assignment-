import React, { useState } from "react";
import { newlineText } from "../utils";

const QuestionCard = ({ data, setAnswered, setCorrectQtnCount }) => {
  const { id: qstnNo, question, options, answer } = data;

  return (
    <div className="mb-5">
      <div className="question"> {newlineText(question)}</div>
      <QuestionOptions
        setAnswered={setAnswered}
        setCorrectQtnCount={(value) => setCorrectQtnCount(value)}
        qstnNo={qstnNo}
        answerNo={answer}
        options={options}
      />
    </div>
  );
};

export default QuestionCard;

const QuestionOptions = ({
  setAnswered,
  setCorrectQtnCount,
  answerNo,
  options,
}) => {
  const [selected, setSelected] = useState(null);
  const [isVisited, setIsVisited] = useState(false);
  const [isCorrectQst, setIsCorrectQst] = useState(false);

  const handleCheck = (selectedOption) => {
    if (selected === selectedOption) return false;
    if (!isVisited) setAnswered();

    if (isCorrectQst) {
      setCorrectQtnCount(-1);
      setSelected(selectedOption);
      setIsCorrectQst(false);
      return;
    }

    if (answerNo === selectedOption) {
      setIsCorrectQst(true);
      setCorrectQtnCount(1);
    } else {
      setIsCorrectQst(false);
    }

    setSelected(selectedOption);
    setIsVisited(true);
  };
  return options.map((option, optionId) => (
    <div className="mt-3" key={optionId.toString()}>
      <div className="form-check bg-gray py-2 mb-1">
        <input
          onChange={() => handleCheck(optionId)}
          type="checkbox"
          className="form-check-input mx-1 cursor-pointer"
          id="radio1"
          name="optradio"
          value="option1"
          checked={selected === optionId}
        />
        <label
          style={{ marginLeft: "10px" }}
          className="form-check-label"
          htmlFor="checkbox"
        >
          {option}
        </label>
      </div>
    </div>
  ));
};
