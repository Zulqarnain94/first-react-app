import React from "react";

const RenderData = ({ name, date }) => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-6">{name}</div>
        <div class="col-sm-4">{date}</div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success">
            Success
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderData;
