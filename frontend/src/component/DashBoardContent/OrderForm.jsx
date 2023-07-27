import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Cart from './Cart';
import CardComponent from '../card/CardComponent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import img from '../../assets/imgs/pepsi.jpg';
import img2 from '../../assets/imgs/milo.jpg';
import img3 from '../../assets/imgs/shoe1.jpg';
export const OrderForm = () => {

  const [cusId, setCusId] = React.useState('');

  const handleChange = (event) => {
    setCusId(event.target.value);
  };

  const temCarddata = [

    {
      img:img,
      name: 'Pepsi',
      price: 450,
      packsize: '2l'
    },
    {
      img:img,
      name: 'Pepsi',
      price: 350,
      packsize: '1l'
    },
    {
      img:img3,
      name: 'NIKE',
      price: 35000,
      packsize: '44cm'
    },
    {
      img:img2,
      name: 'MILO',
      price: 120,
      packsize: '100ml'
    }
  ];
  return (
    <div >
      
  
        <Grid container sx={{ mt: 3}}>
            <Grid xs={7}>

              <Container >

                <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
>
                
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Item"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  
                
                </Paper>
              </Container>
             
              <Container style={{'height':'550px','overflowX':'auto'} } sx={{ mt: 1}}>
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" justifyContent="space-between">
                {temCarddata.map((item, index) => (
                  <CardComponent key={index} name={item.name} price={item.price} packsize={item.packsize} imageSrc={item.img} item={item}/>
                ))}
              </Stack>
                

            
              </Container>
            </Grid>
            <Grid  xs={5} >
              <Container style={{'height':'420px'}}>
                  <FormControl>
                      <InputLabel size="small"  >Customer Id</InputLabel>
                      <Select
                    
                        value={cusId}
                        label="Customer Id"
                        onChange={handleChange}
                        size="small" 
                        
                      >
                        <MenuItem selected value="Random Customer">
                          <em>Random Customer</em>
                        </MenuItem>
                        <MenuItem value={10}>C001</MenuItem>
                        <MenuItem value={20}>C002</MenuItem>
                        <MenuItem value={30}>C003</MenuItem>
                      </Select>
                      <FormHelperText>Select If Guest Customer : Random Customer</FormHelperText>
                </FormControl>
                <Cart/>
              </Container>
              

              <Container style={{ 'height':'193px'}}>
              
                <Stack direction="column" spacing={2}>
                  <h5>Sub-Total :</h5>
                  <TextField  id="outlined-basic" label="Cash" variant="outlined"  size="small" type='number'/>
                  <h5>Balance :</h5>
                  <Button variant="contained" endIcon={<SendIcon />}>Place Order</Button>
                </Stack>
              </Container>
             
            </Grid>
            
          </Grid>

     
    


     
    

    </div>
  )
}
