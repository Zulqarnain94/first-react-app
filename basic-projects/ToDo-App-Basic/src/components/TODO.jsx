import React from "react";

const TODO = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6" >
            <input type="text" placeholder="Enter ToDo Here"></input>
          </div>
          <div className="col-sm-4">
            <input type="date" />
          </div>
          <div className="col-sm-2">
          <button type="button" className="btn btn-success">Success</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default TODO;
