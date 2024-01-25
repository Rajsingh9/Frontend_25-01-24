import React, { useState } from "react";

import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";

const FirmwareManagement = () => {
  const [formData, setFormData] = useState({
    scriptName: "",
    version: "",
    vehicleModel: "",
    description: "",
    ecu: "",
    preCondition: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle the form submission here
    console.log("Form Data Submitted:", formData);
    // You can send the formData to the server or perform any other actions

    // Open the Snackbar to notify the user
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          maxWidth: "400px",
          width: "100%", // Added width: "100%" to make the form take full width
          boxSizing: "border-box", // Added boxSizing to include padding in the width
        }}
      >
        <TextField
          label="Script Name"
          name="scriptName"
          value={formData.scriptName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Version"
          name="version"
          value={formData.version}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Vehicle Model"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="ECU"
          name="ecu"
          value={formData.ecu}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Pre-Condition"
          name="preCondition"
          value={formData.preCondition}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>

      {/* Snackbar for notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          Form Submitted Successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default FirmwareManagement;
