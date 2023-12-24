import React from "react";

const Todoitem2 = () => {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-6">
            <p>Buy milk</p>
          </div>
          <div className="col-sm-4">
            <p>4/10/23</p>
          </div>
          <div className="col-sm-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todoitem2;
