import React, { useState } from "react";
import Card from "../components/card/Card";
import { HTML_QUESTIONS } from "../utils";

const Home = () => {
  const [answered, setAnswered] = useState(0);
  const [correctQtnCount, setCorrectQtnCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(
    JSON.parse(localStorage.getItem("w3sch")) || false
  );

  const handleSubmit = () => {
    // localStorage.setItem("w3sch", JSON.stringify(true));
    setIsSubmitted(true);
    console.log("You got :", correctQtnCount);
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <div>
          <h4>Hi, Nini</h4>
          <h3>Thank you for writing this certification Exam.</h3>
          {(correctQtnCount / HTML_QUESTIONS.length) * 100 > 70 ? (
            <div>
              <h2 className="text-success">Congratulations!!!</h2>
              <div>
                You Got:{" "}
                {Math.trunc((correctQtnCount / HTML_QUESTIONS.length) * 100)}%
                in you exam which is above our 70% passing mark. We will sent
                our certificate to you email within the next two working day.
                within 48hrs
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-danger">Sorry!</h2>
              <div>
                You Got:{" "}
                {Math.trunc((correctQtnCount / HTML_QUESTIONS.length) * 100)}%
                which is below our 70% passing mark. Please practise more and
                try again in one week time
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-md-6">
              {answered}/{HTML_QUESTIONS.length}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              {HTML_QUESTIONS.map((data) => (
                <Card
                  key={data.id}
                  data={data}
                  setAnswered={() => setAnswered(answered + 1)}
                  setCorrectQtnCount={(value) =>
                    setCorrectQtnCount(correctQtnCount + value)
                  }
                />
              ))}
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 mx-3">
              <button onClick={handleSubmit} className="btn btn-warning">
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
