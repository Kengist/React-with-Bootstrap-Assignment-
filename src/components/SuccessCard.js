import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SuccessCard = ({ totalQtnCount, correctQtnCount }) => {
  return (
    <div className="container-center">
      <div className="congrats py-3">
        <h2>
          Congrat<span className="hide">ulation</span>s! Babalola, Ninioluwa
          Joel
        </h2>

        <div className=" ">
          <IoMdCheckmarkCircleOutline size={60} />
        </div>
        <div className="text">
          <p>
            You Got: {Math.trunc((correctQtnCount / totalQtnCount) * 100)}% in
            you exam which is above our 70% passing mark. You have successfully
            completed this Examination with us.
          </p>
          <p>
            <span className="py-2">
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
                {totalQtnCount - correctQtnCount}
              </span>
            </span>
            <br />
          </p>
          <hr />
          <small>
            Your certificate will be forwarded to the email you provided during
            registeration.
          </small>
        </div>
        <p className="regards">Regards, W3schools</p>
      </div>
    </div>
  );
};

export default SuccessCard;
