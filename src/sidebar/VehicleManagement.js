import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import ECU from "./ECU";
import VehicleList from "./VehicleList";
import VehicleModel from "./VehicleModel";

const VehicleManagement = () => {
  const [showVehicleModel, setShowVehicleModel] = useState(false);
  const [showECU, setShowECU] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  const handleModelSubmit = (data) => {
    const newVehicle = {
      id: vehicles.length + 1,
      model: data.modelName,
      userId: data.userId,
    };

    setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
    setShowVehicleModel(false);
  };

  const handleECUSubmit = (data) => {
    setShowECU(false);
    setVehicles((prevVehicles) => [...prevVehicles, data]);
  };

  return (
    <Container>
      <Card raised>
        <CardContent>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" component="div" fontWeight="bold" mb={2} textAlign="center">
                Vehicle Management
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Button onClick={() => setShowVehicleModel(true)} variant="contained" color="primary">
                    + Add Vehicle Model
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => setShowECU(true)} variant="contained" color="primary">
                    + Add ECU
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {showVehicleModel && <VehicleModel onModelSubmit={handleModelSubmit} />}
              <hr />
              {showECU && <ECU onECUSubmit={handleECUSubmit} />}
            </Grid>
            <Grid item xs={12}>
              <VehicleList vehicles={vehicles} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default VehicleManagement;
