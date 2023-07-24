import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CustomizedTables from './ItemTable';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
export const ItemForm = () => {
  return (
    <div>
        <Container sx={{ mt: 5}}>
        <h1>Item Management</h1>
        
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
              <TextField sx={{width:250}} id="outlined-basic" label="Item Name" variant="outlined" />
              <TextField sx={{width:250}} id="outlined-basic" label="Item Pack Size" variant="outlined" />
              <TextField sx={{width:250}} id="outlined-basic" label="Item Unit Price" variant="outlined" />
              <TextField sx={{width:250}} id="outlined-basic" label="Item Quantity of Hand" variant="outlined" />

              <Button variant="contained">Save</Button>
          
            </Stack>

          </Container>
        

         <Container sx={{ mt: 5}}>
        
              <CustomizedTables/>

          </Container>
        
       
    </div>
    
    
    )
}
