import React from 'react';
import OrganizationButtons from "../components/OrganizationButtons";
import {
  Button,
  Stack,
  TextField,
  Typography,
  IconButton,
  AppBar, Toolbar
} from "@mui/material";
import FDAIcon from "../assets/fda-logo.jpeg";
import JHIcon from "../assets/JaneHopkins.jpg";
import BavariaIcon from "../assets/Bavaria.jpg";
import { Route, Switch } from 'react-router-dom';

const HomePage = () => {
 

  return (
    <div style={{ height: "100vh" }} className="App">
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h2" color="inherit" component="div">
          PharmaStudy
        </Typography>
        {/* <div style={{ position: "relative", top: "120px", right: "350px" }}>
          <Button variant="contained" onClick={() => addPatient()}>
            Add Patient
          </Button>
        </div> */}
      </Toolbar>
    </AppBar>
        <Typography
          sx = {{
            pt: 10
          }}
          align = "center"
          variant = "h4"
        >
          Welcome. Choose an organization below to login.
        </Typography>
      <Stack sx={{ pt: 10 }}
        direction = "row"
        justifyContent= "center"
        spacing = {7.5}
      >
        <OrganizationButtons name = "FDA" logo = {FDAIcon} />
        <OrganizationButtons name = "Jane Hopkins" logo = {JHIcon} />
        <OrganizationButtons name = "Bavaria" logo = {BavariaIcon} />

      </Stack>
    </div>
  )
}

export default HomePage;