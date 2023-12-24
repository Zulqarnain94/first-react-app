import React from "react";

const Errormessag = ({ fooditems }) => {
  return <>{fooditems.length === 0 && <p>No food</p>}</>;
};

export default Errormessag;
