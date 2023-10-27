import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { navData } from './constants/data';
import TextField from '@mui/material/TextField';
import debounce from 'lodash/debounce'; // Import the debounce function
import { useState } from 'react';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      
    },
  },
}));
export default function Header() {
  const [query, setQuery] = useState('');
  // Function to handle the Enter key press
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Run your API call here using the 'query' state
      // For example, you can use fetch or axios to make the API request
      // Replace the URL with your actual API endpoint
      // fetch(`https://api.example.com/search?q=${query}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     // Handle API response data
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }
  };
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  return (

    <Box sx={{ flexGrow: 1 }} style={{position: 'fixed',top: '0',zIndex:1,width: '100%'}}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            
            <Link to="/">
            <img src="onlyicon.png" style={{width:'50px'}}/>
            </Link>
            </IconButton>
          
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 5, display: { xs: 'none', sm: 'block' }  }}
          >
           <b>Flipkart</b> 
          </Typography>
          
          <div>
      <Search style={{ borderRadius: 0, display: 'flex', flexDirection: 'row-reverse' }}>
        <StyledInputBase
          placeholder="Search for products, brands and more"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} 
          
        />
       
        <SearchIconWrapper>
        <SearchIcon style={{ color: 'blue' }} />
        </SearchIconWrapper>
          
      </Search>
      
    </div>

          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon style={{marginLeft:'50px'}}/>
          </Badge>
          <span style={{color:'white',fontWeight:'bolder',letterSpacing:'0.5px',paddingLeft:'10px',fontSize:'18px'}}>Cart</span>
          </Link>
          <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>
          <AccountCircleIcon style={{marginLeft:'50px'}}/>
          <span style={{color:'white',fontWeight:'bolder',letterSpacing:'0.5px'}}>Login/Signup</span>
          </Link>
        </Toolbar>
      </AppBar>
      
    </Box>
    
    
  );
}
