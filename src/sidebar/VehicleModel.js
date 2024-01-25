// VehicleModel.js
// Add this import at the top of the file
import React, { useState } from 'react';
 
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const VehicleModel = ({ onModelSubmit }) => {
  const [companyName, setCompanyName] = useState('');
  const [modelName, setModelName] = useState('');

  const handleSubmit = () => {
    // Validate and submit data
    if (companyName && modelName) {
      onModelSubmit({ companyName, modelName });
      // Optionally, reset the form fields
      setCompanyName('');
      setModelName('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Box>
      <h2>Vehicle Model</h2>
      <TextField
        label="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Model Name"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box> 
  );
};

export default VehicleModel;
