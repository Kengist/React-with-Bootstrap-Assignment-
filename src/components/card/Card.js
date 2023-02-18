import React, { useState, useEffect } from "react";

const Card = ({ data, setAnswered, setCorrectQtnCount }) => {
  const { id: qstnNo, question, options, answer } = data;

  return (
    <div className="card mt-4">
      <div className="card-body">{question}</div>
      <div className="card-body">
        <QuestionOptions
          setAnswered={setAnswered}
          setCorrectQtnCount={(value) => setCorrectQtnCount(value)}
          qstnNo={qstnNo}
          answerNo={answer}
          options={options}
        />
      </div>
    </div>
  );
};

export default Card;

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
    <div
      key={optionId}
      onClick={() => handleCheck(optionId)}
      className={`p-2 mb-1 ${
        selected === optionId ? "bg-info" : "bg-secondary"
      }  cursor-pointer`}
    >
      {option}
    </div>
  ));
};
