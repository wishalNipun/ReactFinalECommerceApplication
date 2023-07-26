import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomerFormTable() {
  const baseURL='http://localhost:5000/api/customers'
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Make a GET request to your backend API using Axios
    axios.get(baseURL+'/')
      .then((response) => {
        // Update the rows state with the received data
        setRows(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Id</StyledTableCell>
            <StyledTableCell align="right">Customer Name</StyledTableCell>
            <StyledTableCell align="right">Customer Address</StyledTableCell>
            <StyledTableCell align="right">Customer Email</StyledTableCell>
            <StyledTableCell align="right">Customer ContactNumber</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}