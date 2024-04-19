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

function Delete_emp() {
  const [eno,setEno]=useState('');

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEno(e.target.value)
  //  setEno(eno)
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [e.target.id]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     {
      try {

        console.log(eno);
        await axios.post('http://13.233.96.111:3000/delete', {"eno":eno});
        alert("Deleted successfully");

        // Send data to the server
        // // Optionally, you can redirect the user or show a success message
        // console.log('Data submitted successfully:', formData);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
  };


  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Enter Employee Number</p>
              <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="id-badge me-3" size='lg'/>
                  <MDBInput
                    label='Enter Employee Number'
                    id='eno'
                    type='number'
                    value={eno}
                    onChange={handleChange}
                  />
                  {errors.eno && <div className="text-danger">{errors.eno}</div>}
                </div>
          <MDBBtn className='mb-4' size='lg' type="submit">Delete</MDBBtn>
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

export default Delete_emp;
