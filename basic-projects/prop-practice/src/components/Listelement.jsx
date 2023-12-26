import React from "react";

const Listelement = ({ item , handleByClick}) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${item} being bought`);
  };
  return (
    <li className="list-group-item">
      {item}
      <button
        className="btnn btn btn-info"
        onClick={handleByClick}
      >
        Buy
      </button>
    </li>
  );
};

export default Listelement;
