import axios from 'axios';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CustomizedTables from './ItemTable';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CustomerFormTable from './CustomerFormTable';


export const CustomerForm = () => {
  const baseURL='http://localhost:5000/api/customers'
  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    customerAddress: '',
    customerEmail: '',
    customerContactNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Make a POST request to your backend API using Axios
    axios.post(baseURL+'/saveCustomer', formData)
      .then((response) => {
        // Handle successful response (optional)
        alert('Data saved successfully:', response.data);
      })
      .catch((error) => {
        // Handle error (optional)
        alert('Error saving data:', error);
      });
  };
  return (
    <div> <Container sx={{ mt: 3}}>
    <h1>Customer Mangement Form</h1>
    
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <TextField sx={{width:250}} id="outlined-basic" name="customerId" label="Customer Id" variant="outlined"  size="small" value={formData.customerId} onChange={handleChange}/>
          <TextField sx={{width:250}} id="outlined-basic" name="customerName" label="Customer Name" variant="outlined"  size="small"  value={formData.customerName} onChange={handleChange}/>
          <TextField sx={{width:250}} id="outlined-basic" name="customerAddress" label="Customer Address" variant="outlined"  size="small" value={formData.customerAddress} onChange={handleChange}/>
          <TextField sx={{width:250}} id="outlined-basic" name="customerEmail" label="Customer Email" variant="outlined" size="small" value={formData.customerEmail} onChange={handleChange}/>
          <TextField sx={{width:250}} id="outlined-basic" name="customerContactNumber" label="Customer ContactNumber" variant="outlined" size="small" value={formData.customerContactNumber} onChange={handleChange}/>


          <ButtonGroup variant="contained" aria-label="outlined  button group">
          <Button color="success" onClick={handleSave}>Save</Button>
          <Button color="secondary">Update</Button>
          <Button color="error">Delete</Button>
          </ButtonGroup>
      
        </Stack>

      </Container>
    

     <Container sx={{ mt: 5}}>
    
          <CustomerFormTable/>

      </Container></div>
  )
}
