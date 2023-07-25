import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CustomizedTables from './ItemTable';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const CustomerForm = () => {
  return (
    <div> <Container sx={{ mt: 3}}>
    <h1>Customer Mangement Form</h1>
    
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <TextField sx={{width:250}} id="outlined-basic" label="Customer Name" variant="outlined"  size="small"/>
          <TextField sx={{width:250}} id="outlined-basic" label="Item Pack Size" variant="outlined"  size="small"/>
          <TextField sx={{width:250}} id="outlined-basic" label="Item Unit Price" variant="outlined" size="small" />
          <TextField sx={{width:250}} id="outlined-basic" label="Item Quantity of Hand" variant="outlined" size="small" />


          <ButtonGroup variant="contained" aria-label="outlined  button group">
          <Button color="success">Save</Button>
          <Button color="secondary">Update</Button>
          <Button color="error">Delete</Button>
          </ButtonGroup>
      
        </Stack>

      </Container>
    

     <Container sx={{ mt: 5}}>
    
          <CustomizedTables/>

      </Container></div>
  )
}
