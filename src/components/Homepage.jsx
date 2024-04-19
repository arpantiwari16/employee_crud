import React from "react";

function Homepage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-70">
      <div className="container mt-5">
        <h1 className="display-4 text-center"><b>Welcome to CRUD APPLICATION</b></h1>
        <p className="lead text-center">
          Here you can view, insert, update, and delete employees.
        </p>

        <div className="mx-auto   card w-50 ">
          <div className="card-body">
            <h3 className="card-title">Details:</h3>
            <ol className="list-group">
              <li className="list-group-item font-weight-bold">Frontend is built with React JS</li>
 
              <li className="list-group-item font-weight-bold">Data fetched from MongoDB via Node.js backend API:</li>
              <li className="list-group-item font-weight-bold">View employees</li>
              <li className="list-group-item font-weight-bold">Insert new employees</li>
              <li className="list-group-item font-weight-bold">Update employee details</li>
              <li className="list-group-item font-weight-bold">Delete employees</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
