import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import DocProfilePic from "../assets/docotr_profile1.jpg";

const SideBanner = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "relative",
        background: "#82b5e0",
        top: 0,
        justifyContent: "space-between",
        overflowY: "auto",
        height: {sx: 'auto', md: '100%'},
        flexDirection: {md: 'column'},
      }}
    >
      
        <Avatar    sx={{ width: 100, height: 100 }} alt="Doctor" src={DocProfilePic} />
        <Typography variant = "h6">Dr. FirstName LastName</Typography>
        <Typography>Location</Typography>
    
    </Stack>
  );
};

export default SideBanner;

// height: {sx: 'auto', md: '100%'},