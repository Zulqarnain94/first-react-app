import React from "react";

const Currentime = () => {
  let time = new Date();
  return <p className="lead"> Currentime: {time.toString()}</p>;
};

export default Currentime;
