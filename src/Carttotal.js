import React  from 'react';
import { Grid, Typography,Box,Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import { cartItem } from './constants/data';
export default function Carttotal({item}){
    return (
        
            <Grid >
               <Grid style={{padding:'15px 24px',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    <Typography style={{color:'#8f8f8f',fontWeight:600,fontSize:'16px'}}>PRICE DETAILS</Typography>
                    
               </Grid>
               <Divider   light={true}   style={{ backgroundColor: '#8f8f8f', opacity: 0.2   }}/>
               <Box style={{fontSize:'16px',display:'flex',flexDirection:'column',alignItems:'flex-start'   }}>
               <span style={{ display: 'inline-flex' }}>
            <Typography style={{ padding: '15px 24px' }}>Price ({cartItem.length} items) </Typography>
            <Typography style={{ paddingTop: '15px',paddingBottom:'15px',paddingLeft:'130px'}}>₹ 5000</Typography>
          </span>

          <span style={{ display: 'inline-flex' }}>
            <Typography style={{ padding: '15px 24px' }}>Discount</Typography>
            <Typography style={{ paddingTop: '15px',paddingBottom:'15px',paddingLeft:'170px',color:'green' }}>- ₹1000</Typography>
          </span>

          <span style={{ display: 'inline-flex' }}>
            <Typography style={{ padding: '15px 24px' }}>Delivery Charges</Typography>
            <Typography style={{ paddingTop: '15px',paddingBottom:'15px',paddingLeft:'120px',color:'green'}}>Free</Typography>
          </span>
          </Box>
          <Divider variant="middle" light={true} sx={{ backgroundColor: '#8f8f8f', opacity: 0.2 }} />
          <span style={{ display: 'flex',flexDirection:'row' }}>
            <Typography style={{ padding: '15px 24px', fontWeight: '500', fontSize: '20px' }}>Total Amount</Typography>
            <Typography style={{ paddingTop: '15px',paddingBottom:'15px',paddingLeft:'100px', fontWeight: '500', fontSize: '20px' }}>₹ 5000</Typography>
          </span>

          <Divider variant="middle"   light={true} sx={{ backgroundColor: 'grey', opacity: 0.2 }} />

          <span style={{ display: 'inline-flex' }}>
            <Typography style={{ padding: '15px 14px', color: 'green', fontWeight: '600' }}>You will save ₹ 1000 on this order</Typography>
            
          </span>
               
               
            </Grid>
        
    )
}