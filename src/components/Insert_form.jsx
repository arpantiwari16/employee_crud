import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Insert_form() {
  const [formData, setFormData] = useState({
    ename: '',
    city: '',
    salary: '',
    eno: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [e.target.id]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send data to the server
        await axios.post('http://13.233.96.111:3000/employees', formData);
        // Optionally, you can redirect the user or show a success message
        console.log('Data submitted successfully:', formData);
        alert("Data submitted successfully");
        console.log(Response);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.ename.trim()) {
      newErrors.ename = 'Employee name is required';
      valid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    }

    if (!formData.salary.trim()) {
      newErrors.salary = 'Salary is required';
      valid = false;
    }

    if (!formData.eno.trim()) {
      newErrors.eno = 'Employee number is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Enter Employee Details</p>
              <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="id-badge me-3" size='lg'/>
                  <MDBInput
                    label='Enter Employee Number'
                    id='eno'
                    type='text'
                    value={formData.eno}
                    onChange={handleChange}
                  />
                  {errors.eno && <div className="text-danger">{errors.eno}</div>}
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput
                    label='Enter Employee Name'
                    id='ename'
                    type='text'
                    className='w-100'
                    value={formData.ename}
                    onChange={handleChange}
                  />
                  {errors.ename && <div className="text-danger">{errors.ename}</div>}
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="map-marker-alt me-3" size='lg'/>
                  <MDBInput
                    label='Enter City'
                    id='city'
                    type='text'
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <div className="text-danger">{errors.city}</div>}
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="dollar-sign me-3" size='lg'/>
                  <MDBInput
                    label='Enter Salary'
                    id='salary'
                    type='number'
                    value={formData.salary}
                    onChange={handleChange}
                  />
                  {errors.salary && <div className="text-danger">{errors.salary}</div>}
                </div>
              
                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>
                <MDBBtn className='mb-4' size='lg' type="submit">Register</MDBBtn>
              </form>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Insert_form;
