import React from "react";
import RenderData from "./RenderData";

const ToDoArray = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <RenderData key={item.index} name={item.name} date={item.date} />
      ))}
    </div>
  );
};

export default ToDoArray;
