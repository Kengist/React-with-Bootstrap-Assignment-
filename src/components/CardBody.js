import React from "react";
import QuestionCard from "./QuestionCard";

const CardBody = () => {
  return (
    <div className="row m-4" style={{ height: "1000px" }}>
      <div className=" col-12 col-md-6">
        <div className="title2">
          <h1 className="">Web Design Certification Exam </h1>
          <div className="flex">
            <h5 className="py-2">Question 1 of 40:</h5>
            <h6 className="px-2">
              <span>10</span>:<span>40</span>
            </h6>
          </div>
        </div>
        <QuestionCard />
      </div>
    </div>
  );
};

export default CardBody;
