import React from "react";
import Listelement from "./Listelement";

const Listitem = ({ fooditems }) => {
  return (
    <ul className="list-group">
      {fooditems.map((item) => (
        <Listelement
          key={item}
          item={item}
          handleByClick={() => console.log(`${item} being bought`)}
        ></Listelement>
      ))}
    </ul>
  );
};

export default Listitem;
