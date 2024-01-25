import React, { useState } from "react";

import ECU from "./ECU";
import VehicleModel from "./VehicleModel";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [showAddModel, setShowAddModel] = useState(false);
  const [showAddECU, setShowAddECU] = useState(false);

  const handleModelSubmit = (data) => {
    // Handle submitted data for Vehicle Model
    const newVehicle = {
      id: vehicles.length + 1,
      model: data.modelName,
      userId: data.userId,
    };

    setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
    setShowAddModel(false);
  };

  const handleECUSubmit = (data) => {
    // Handle submitted data for ECU
    // Add your logic here

    setShowAddECU(false);
  };

  return (
    <div>
      <h2>Vehicle List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Vehicle Model Name</th>
            <th>User ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.userId}</td>
              <td>
                <button onClick={() => setShowAddECU(true)}>
                  Add ECU to {vehicle.model}
                </button>
                <button onClick={() => setShowAddModel(true)}>
                  Add Model to {vehicle.model}
                </button>
                {/* Add more buttons as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModel && <VehicleModel onModelSubmit={handleModelSubmit} />}
      {showAddECU && <ECU onECUSubmit={handleECUSubmit} />}
    </div>
  );
};

export default VehicleList;

