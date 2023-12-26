import React from "react";
import Listelement from "./Listelement";

const Listitem = ({ fooditems }) => {
  const handleByClick = () => console.log("clicked");
  return (
    <ul className="list-group">
      {fooditems.map((item) => (
        <Listelement key={item} item={item} handleByClick = {handleByClick}></Listelement>
      ))}
    </ul>
  );
};

export default Listitem;
