import React from 'react';
import { Typography, Box } from '@mui/material';

const TopBanner = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <img src="logo.png" alt="Pharma Study Logo" width="50" height="50" />
      <Typography  variant="h4" align = "center">Pharma Study</Typography>
    </Box>
  );
};

export default TopBanner;