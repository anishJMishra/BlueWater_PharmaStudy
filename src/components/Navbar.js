import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = ({ onLogout }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
         Jane Hopkins
        </Typography>
        <Button color="inherit">
          Patient View
        </Button>
        <Button color="inherit">
          Add Patient
        </Button>
        <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Navbar;