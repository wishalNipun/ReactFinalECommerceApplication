import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
export const ItemForm = () => {
  return (
    <div>

        <h1>Item Management</h1>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <TextField sx={{width:250}} id="outlined-basic" label="Item Name" variant="outlined" />
          <TextField sx={{width:250}} id="outlined-basic" label="Item Pack Size" variant="outlined" />
          <TextField sx={{width:250}} id="outlined-basic" label="Item Unit Price" variant="outlined" />
          <TextField sx={{width:250}} id="outlined-basic" label="Item Quantity of Hand" variant="outlined" />
      
         </Stack>
       
    </div>
    
    
    )
}
