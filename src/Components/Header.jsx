import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Typography, InputBase, Toolbar, Box, alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [search,setSearch] = useState('');
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography 
          variant="h5" 
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Travel Advisor
        </Typography>
        
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            Explore new places
          </Typography>
          
          {/* To wrap this with Autocomplete later once the API is set up */}
          <Box 
            sx={{
              position: 'relative',
              borderRadius: (theme) => theme.shape.borderRadius,
              backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
              '&:hover': { backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25) },
              marginRight: 2,
              marginLeft: { xs: 0, sm: 3 },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Box sx={{ padding: '0 16px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SearchIcon />
            </Box>
            <InputBase 
              placeholder="Search..." 
              sx={{
                color: 'inherit',
                padding: '8px 8px 8px 0',
                paddingLeft: '48px', // space for the icon
                width: { xs: '100%', md: '20ch' },
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;