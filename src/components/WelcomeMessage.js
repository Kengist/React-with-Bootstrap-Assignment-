import React from "react";
import { Link } from "react-router-dom";

const WelcomeMessage = () => {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12 col-md-12">
          <h2>Welcome To Web Design Certification Exam</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 p-3">
          <h4>Program overview </h4>
          <hr className="w-50" />
          <div className=" border-star p-">
            <div className="my-2 d-flex align-items-center">
              <h6 className="">Enrollment fee:</h6>
              <p className="pt-2 px-2">$140 (one time purchase)</p>
            </div>
            <div className="my-2 d-flex align-items-center">
              <h6 className="">Time to complete:</h6>
              <p className="pt-2 px-2">Around 50 Minutess</p>
            </div>
            <div className="my-2 d-flex align-items-center">
              <h6 className="">Certifications Type:</h6>
              <p className="pt-2 px-2">Self-paced</p>
            </div>
          </div>
          <h4>Exam Instruction </h4>
          <hr className="w-50" />
          <div className=" border-star p-">
            <div className="my-2 d-flex align-items-center">
              <h6 className="">Enrollment fee:</h6>
              <p className="pt-2 px-2">$140 (one time purchase)</p>
            </div>
            <div className="my-2 d-flex align-items-center">
              <h6 className="">Time to complete:</h6>
              <p className="pt-2 px-2">Around 80 Minutess</p>
            </div>
            <div className="my-2 d-flex align-items-center">
              <h6 className="">certifications Type:</h6>
              <p className="pt-2 px-2">Self-paced</p>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/home" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/result">Result</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
