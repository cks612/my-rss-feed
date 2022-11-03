import { TimeTraker } from "@styles/components/_gnbStyles";
import useInterval from "hooks/utils/useInterval";
import moment from "moment";
import React, { useState } from "react";

const Clock = () => {
  let timeClicker = moment().format("HH:mm:ss a");
  const [realTime, setRealTime] = useState({ timeClicker });

  useInterval(() => {
    setRealTime({ ...realTime });
  }, 1000);

  return <TimeTraker>{timeClicker}</TimeTraker>;
};

export default Clock;
