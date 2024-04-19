import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">CRUD HOME</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/all_emp">SHOW</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insert_emp">INSERT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update_emp">UPDATE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete_emp">DELETE</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
