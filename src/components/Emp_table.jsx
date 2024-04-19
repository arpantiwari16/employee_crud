

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button, Form } from 'react-bootstrap';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal_del, setShowModal_del] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [updatedEmployeeData, setUpdatedEmployeeData] = useState({
    eno: '',
    ename: '',
    city: '',
    salary: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://13.233.96.111:3000');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNameClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
    setUpdatedEmployeeData({
      eno: employee.eno,
      ename: employee.ename,
      city: employee.city,
      salary: employee.salary
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.post(`http://13.233.96.111:3000/update`, updatedEmployeeData);
      // Refresh employee data after update
      const response = await axios.get('http://13.233.96.111:3000');
      setEmployees(response.data);
      setShowModal(false);
      alert("Successfully updated!");
    } catch (error) {
      console.error('Error updating employee data:', error);
    }
  };

  const handleDelete = async () => {
    console.log(selectedEmployee.eno);
    try {
      await axios.post(`http://13.233.96.111:3000/delete`,{"eno":`${selectedEmployee.eno}`});
      // Refresh employee data after delete
      const response = await axios.get('http://13.233.96.111:3000');
      setEmployees(response.data);
      setShowModal_del  (false);
      alert("Successfully deleted!");
    } catch (error) {
      console.error('Error deleting employee data:', error);
    }
  };

  const handleChange = (e) => {
    setUpdatedEmployeeData({
      ...updatedEmployeeData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="container mt-5 text-capitalize">
      <h2 className="mb-4">Employee Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee Number</th>
            <th>Employee Name</th>
            <th>City</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.eno}>
              <td>{employee.eno}</td>
              <td>
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleNameClick(employee)}>{employee.ename}</span>
              </td>
              <td>{employee.city}</td>
              <td>{employee.salary}</td>
              <td>
                <Button variant="danger" onClick={() => { setSelectedEmployee(employee); setShowModal_del(true); }}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="ename">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={updatedEmployeeData.ename} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" value={updatedEmployeeData.city} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter salary" value={updatedEmployeeData.salary} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal_del} onHide={() => setSelectedEmployee(false)}>
        <Modal.Header >
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this employee record?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal_del(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeTable;
