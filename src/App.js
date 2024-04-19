import { useState } from 'react';
import Delete_emp from './components/Delete_emp';
import EmployeeTable from './components/Emp_table';
import Emp_table from './components/Emp_table';
import Insert_form from './components/Insert_form';
import Update_form from './components/Update_form';
import Homepage from './components/Homepage';

function App() {
  const [page, setPage] = useState("");

  const renderPage = () => {
    switch (page) {
      case "insert_form":
        return <Insert_form />;
      case "update_form":
        return <Update_form />;
      case "delete_emp":
        return <Delete_emp />;
      case "view":
        return <EmployeeTable />;
      default:
        return <Homepage />;
    }
  };

  return (
    <>
    <div >
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" onClick={()=>setPage("")}><b>CRUD HOME</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={() => setPage("view")}>View</a>

              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setPage("insert_form")}>Insert</a>

              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setPage("update_form")}>Update</a>

              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setPage("delete_emp")}>Delete</a>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {renderPage()}
    </div>
    
    </>
  );
}

export default App;
