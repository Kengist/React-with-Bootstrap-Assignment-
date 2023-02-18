import React, { useEffect, useState } from "react";
import { HTML_QUESTIONS } from "../utils";
import QuestionCard from "../components/QuestionCard";
import CountDown from "../components/CountDown";
import { async } from "q";

const Home = () => {
  const [answered, setAnswered] = useState(0);
  const [correctQtnCount, setCorrectQtnCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [loading, setLoading] = useState(true);

  const checkIsCompleted = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://progfams.com/w3sch/backend/api/check-status"
      );
      const { status, data } = await res.json();
      if (status) setIsSubmitted(Number(data.isSubmitted) === 1 ? true : false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    checkIsCompleted();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://progfams.com/w3sch/backend/api/update-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: 0 }),
        }
      );

      const result = res.json();
      console.log("result:::", result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      {!loading && isSubmitted ? (
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
                try again in a week time
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      {!isSubmitted && (
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="row m-4">
              <div className="col-12 col-md-6">
                <div className="title2">
                  <h1 className="">Web Design Certification Exam </h1>
                  <div className="flex ">
                    <h5 className="py-2">
                      Question {answered} of {HTML_QUESTIONS.length}:
                    </h5>
                    <h6 className="px-2">
                      <div>
                        <CountDown
                          seconds={60 * 50}
                          timeElapsed={() => handleSubmit()}
                        />
                      </div>
                    </h6>
                  </div>
                </div>
                {HTML_QUESTIONS.map((data) => (
                  <QuestionCard
                    key={data.id.toString()}
                    data={data}
                    setAnswered={() => setAnswered(answered + 1)}
                    setCorrectQtnCount={(value) =>
                      setCorrectQtnCount(correctQtnCount + value)
                    }
                  />
                ))}
              </div>
              <div className="col-12 mx-3 mt-4">
                <button
                  onClick={handleSubmit}
                  className="btn btn-warning btn-lg"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
