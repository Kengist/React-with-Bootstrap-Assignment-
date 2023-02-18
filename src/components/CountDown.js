import React, { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

const CountDown = ({ seconds, timeElapsed }) => {
  const [countDownTimer, setCountDownTimer] = useState(seconds);
  const timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDownTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDownTimer <= 0) {
      clearInterval(timerId.current);
      timeElapsed();
    }
  }, [countDownTimer, timeElapsed]);

  return <strong>{formatTime(countDownTimer)}</strong>;
};

export default CountDown;
