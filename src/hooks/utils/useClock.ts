import moment from "moment";
import React, { useState } from "react";
import useInterval from "./useInterval";

const useClock = () => {
  let timeClicker = moment().format("HH:mm:ss a");

  const [realTime, setRealTime] = useState({ timeClicker });

  useInterval(() => {
    setRealTime({ ...realTime });
  }, 1000);

  return { timeClicker };
};

export default useClock;
