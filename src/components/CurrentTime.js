import React from "react";
import moment from "moment";

import "./styles.css";

const CurrentTime = () => {
  const currentDateAndTime = moment(new Date()).format(
    "MMMM Do YYYY, h:mm:ss a",
  );
  return <span className="two-line-span">{currentDateAndTime}</span>;
};

export default CurrentTime;
