import React from "react";
import Elementreciver from "./Elementreciver";

const Listreciver = ({ itemList }) => {
  return (
    <ul>
      {itemList.map((item) => (
      <Elementreciver key={item} item={item}></Elementreciver>))}
    </ul>
  );
};

export default Listreciver;
