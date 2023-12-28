import React from "react";

const TodoForm = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-6">
          <input type="text" placeholder="Enter your item" />
        </div>
        <div class="col-sm-4">
          <input type="date" />
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
