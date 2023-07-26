import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Swal = require('sweetalert2');
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
    
    axios.post(baseURL+'/saveCustomer', formData)
      .then((response) => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: response.data,
          showConfirmButton: false,
          timer: 1500
      })
     
        loadAllCustomers();
        
      })
      .catch((error) => {
       
        alert('Error saving data:', error);
      });
  };
  
  const [rows, setRows] = useState([]);

  useEffect(() => {
   loadAllCustomers();
    
  }, []); 

  function loadAllCustomers(){
    axios.get(baseURL+'/')
    .then((response) => {
      
      setRows(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }


  const handleUpdate = (customerId) => {
    
  };

  const handleDelete = (customerId) => {

    console.log(customerId);
    axios
    .delete(`${baseURL}/deleteCustomer/${customerId}`)
    .then((response) => {
      alert(response);
   
      loadAllCustomers();
    })
    .catch((error) => {
      console.error('Error deleting customer:', error);
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
          </ButtonGroup>
      
        </Stack>

      </Container>
    

     <Container sx={{ mt: 5}}>
    
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Customer Id</StyledTableCell>
                <StyledTableCell align="right">Customer Name</StyledTableCell>
                <StyledTableCell align="right">Customer Address</StyledTableCell>
                <StyledTableCell align="right">Customer Email</StyledTableCell>
                <StyledTableCell align="right">Customer ContactNumber</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.customerId}>
                  <StyledTableCell component="th" scope="row">
                    {row.customerId}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.customerName}</StyledTableCell>
                  <StyledTableCell align="right">{row.customerAddress}</StyledTableCell>
                  <StyledTableCell align="right">{row.customerEmail}</StyledTableCell>
                  <StyledTableCell align="right">{row.customerContactNumber}</StyledTableCell>
                  <StyledTableCell align="right"> 
                  <IconButton
                      color="primary"
                      onClick={() => handleUpdate(row.customerId)}
                    >
                      <EditIcon />
                    </IconButton>
                
                  <IconButton aria-label="delete" color="error"  onClick={() => handleDelete(row.customerId)}>
                    <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Container></div>
  )
}
