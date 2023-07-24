import React from 'react'

export const CustomerForm = () => {
  return (
    <div> <Container sx={{ mt: 5}}>
    <h1>Customer Mangement Form</h1>
    
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <TextField sx={{width:250}} id="outlined-basic" label="Customer Name" variant="outlined" />
          <TextField sx={{width:250}} id="outlined-basic" label="Item Pack Size" variant="outlined" />
          <TextField sx={{width:250}} id="outlined-basic" label="Item Unit Price" variant="outlined" />
          <TextField sx={{width:250}} id="outlined-basic" label="Item Quantity of Hand" variant="outlined" />

          <Button variant="contained">Save</Button>
      
        </Stack>

      </Container>
    

     <Container sx={{ mt: 5}}>
    
          <CustomizedTables/>

      </Container></div>
  )
}
