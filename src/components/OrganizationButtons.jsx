import React, { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";
import FDAIcon from "../assets/fda-logo.jpeg";
import JHIcon from "../assets/JaneHopkins.jpg";
import BavariaIcon from "../assets/Bavaria.jpg";

const OrganizationButtons = (props) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    if (props.name === "Jane Hopkins") {
      navigate("/JaneHopkinsDoctor");
    }

    handleClose();
  };

  return (
    <div>
      <Box>
        <Typography sx={{ color: "#fff", bgcolor: "#1b76d2" }} variant="h4">
          {props.name}
        </Typography>
        <Button
          sx={{ bgcolor: "#003987" }}
          variant="contained"
          onClick={handleOpen}
        >
          <Modal open={open} onClose={handleClose}>
            <Box
              position="absolute"
              top="25%"
              left="36%"
              sx={{
                backgroundColor: "#003987",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <LoginModal
                name={props.name}
                onClose={handleClose}
                onLogin={handleLogin}
              />
            </Box>
          </Modal>
          <img src={props.logo} style={{ width: "200px", height: "150px" }} />
        </Button>
      </Box>
    </div>
  );
};

export default OrganizationButtons;