import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SuccessCard = () => {
  return (
    <div>
      <div className="congrats">
        <h1>
          Congrat<span className="hide">ulation</span>s ! Nini
        </h1>

        <div className=" ">
          <IoMdCheckmarkCircleOutline size={60} />
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
      </div>
    </div>
  );
};

export default SuccessCard;
