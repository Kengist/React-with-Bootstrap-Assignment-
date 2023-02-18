import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const ErrorCard = ({ totalQtnCount, correctQtnCount }) => {
  return (
    <div className="container-center">
      <div className="congrats py-4">
        <h2 className="text-danger">
          Sorry, <span className="hide"></span>!
          <span className="text-dark"> Babalola, Ninioluwa Joel</span>
        </h2>

        <div className=" my-2">
          <RiErrorWarningLine size={60} color={"red"} />
        </div>
        <div className="text">
          <p>
            You Got: {Math.trunc((correctQtnCount / totalQtnCount) * 100)}% in
            your exam which is below our 70% pass mark. You have not
            successfully completed this Examination with us. Kindly practice
            more and retake this examination in 2 weeks time.
          </p>
          <p>
            <span className="py-2">
              {" "}
              <strong>Result details</strong>{" "}
            </span>
          </p>

          <p>
            <span className="text-success">Correct Answers:</span>{" "}
            {correctQtnCount}
          </p>
          <p>
            <span className="text-danger">
              Wrong Answers:{" "}
              <span className="text-dark">
                {" "}
                {totalQtnCount - correctQtnCount}
              </span>
            </span>
            <br />
          </p>
          <hr />
        </div>
        <p className="regards">Regards, W3schools</p>
      </div>
    </div>
  );
};

export default ErrorCard;
