import React from "react";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Input your food item"
      onKeyDown={handleOnChange}
    />
  );
};

export default FoodInput;
