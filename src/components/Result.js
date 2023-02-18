import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import ErrorCard from "./ErrorCard";
import SuccessCard from "./SuccessCard";
const Result = () => {
  const [status, setstatus] = useState("pass");
  return (
    <div className="contain">
      {/* <div className="congrats">
        {status === "pass" ? (
          <h1>
            Congrat<span className="hide">ulation</span>s ! Nini
          </h1>
        ) : (
          <>
            <h3 className="text-danger">
              Opps<span className="hide"></span>! Nini
            </h3>
          </>
        )}
        <div className=" ">
          {status === "pass" ? (
            <IoMdCheckmarkCircleOutline size={60} />
          ) : (
            <>
              <RiErrorWarningLine size={60} color={"red"} />
              <p className="try-again">Try Again in a week time</p>
            </>
          )}
        </div>
        <div className="text">
          <p>You have successfully Complete Examination with us.</p>
          <p>
            <span className="py-2"> Here are your result details </span>
          </p>
          <p>
            <span className="py-4">Date: 18.102.2023</span>
            <br />
            Time: 11am
          </p>
          <p>
            <span className="text-success">Correct Answers:</span> 70%
          </p>
          <p>
            <span className="text-danger">
              Wrong Answers: <span className="text-dark">30%</span>
            </span>
            <br />
          </p>
        </div>
        <p className="regards">Regards, W3schools</p>
      </div> */}
      <ErrorCard />
      <SuccessCard />
    </div>
  );
};

export default Result;
