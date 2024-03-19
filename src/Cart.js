import { Grid,Box, Typography,Button,Paper } from '@mui/material';
import  React from 'react';
import { cartItem } from './constants/data';
import Cartitems from './Cartitems';
import Carttotal from './Carttotal';
import Header from './Header';

export default function Cart(){
    return (
        < Grid style={{backgroundColor:'#EAECF0  '}}>
          <div style={{paddingBottom:'70px'}}>{<Header/>}</div>
          {cartItem.length ?
           <>
                <Grid  container rowSpacing={1}   sx={{ paddingTop: '30px', paddingBottom: '30px', paddingLeft: '30px' , overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'}} >
                    <Grid item lg={8} md={8} sm={12} xs={12} style={{backgroundColor:'white'}}>
                        
                            <Grid>
                                    <Typography style={{padding:'15px 24px'}}>My Cart ({cartItem.length})</Typography>
                                
                                {cartItem.map((item) =>(
                                    <Cartitems item={item} />
                                    ))}
                            </Grid>
                            <Grid style={{backgroundColor:'white',margin:'10px', boxShadow: '0px -2px 10px 0px rgba(0 0 0 / 10%)' }}>
                                <Button variant="contained" style={{margin:'20px',padding:'15px 80px',borderRadius:0, backgroundColor: '#FB641B',marginLeft:'350px'}}>Place Order</Button>
                            </Grid>
                       
                    </Grid>
                    <Grid item lg={4} md={3 } sm={12} xs={12} style={{backgroundColor:'white',border:'1px solid black', height: '60vh'}}>
                        <Carttotal/>
                    </Grid>
                </Grid>
                
            </>:<></>
            }
        </Grid>
    )
}
