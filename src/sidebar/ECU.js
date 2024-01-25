// ECU.js
import React, { useState } from 'react';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ECU = ({ onECUSubmit }) => {
  const [ecuName, setECUName] = useState('');

  const handleSubmit = () => {
    // Validate and submit data
    if (ecuName) {
      onECUSubmit({ ecuName });
      // Optionally, reset the form field
      setECUName('');
    } else {
      alert('Please fill in the ECU name');
    }
  };

  return (
    <Box>
      <h2>ECU</h2>
      <TextField
        label="ECU Name"
        value={ecuName}
        onChange={(e) => setECUName(e.target.value)}
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

export default ECU;
