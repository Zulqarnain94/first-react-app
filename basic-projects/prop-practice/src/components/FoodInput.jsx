import React from "react";

const FoodInput = () => {

  const handleOnChange = (event) => console.log(event.target.value);
  
  return (
    <input
      type="text"
      placeholder="Input your food item"
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
