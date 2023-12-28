import React from "react";

const ErrorMessage = ({itemList}) => {
  return <>{itemList.length === 0 && <p>List is empty</p>}</>;
  return <>{fooditems.length === 0 && <p>No food</p>}</>;

};

export default ErrorMessage;
