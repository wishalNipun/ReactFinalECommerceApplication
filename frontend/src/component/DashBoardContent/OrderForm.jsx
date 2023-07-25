import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Cart from './Cart';
import CardComponent from '../card/CardComponent';
import img from '../../assets/imgs/shoe1.jpg';
import Stack from '@mui/material/Stack';

export const OrderForm = () => {
  return (
    <div >
      
  
        <Grid container sx={{ mt: 3}}>
            <Grid xs={7} style={{ border: '2px solid'}}>

              <Container style={{ border: '2px solid green'}}>

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
             
              <Container style={{ border: '2px solid green','height':'550px','overflowX':'auto'} } sx={{ mt: 1}}>
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" justifyContent="space-between">
                <CardComponent  imageSrc={img}/>
                <CardComponent  imageSrc={img}/>
                <CardComponent  imageSrc={img}/>
                <CardComponent  imageSrc={img}/>
                <CardComponent  imageSrc={img}/>
                <CardComponent  imageSrc={img}/>
                <CardComponent  imageSrc={img}/>
              </Stack>
                

            
              </Container>
            </Grid>
            <Grid  xs={5} style={{'border':'2px solid red','height':'600px'}}>
              <Cart/>

              <Container style={{ border: '2px solid grey'}}>
                
              </Container>
             
            </Grid>
            
          </Grid>

     
    


     
    

    </div>
  )
}
