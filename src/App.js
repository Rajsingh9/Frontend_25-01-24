import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css"; 
import LoginFrame from "./LoginFrame";
import SubMenu from "./sidebar/Submenu"; // Corrected import
import Homepage from "./random/Homepage";
import Sidebar2 from "./sidebar/Sidebar2"; 
import Notification from "./sidebar/Notification"; 
import Sidebar2data from "./sidebar/Sidebar2data"; // Corrected import
import UserManagement from "./sidebar/UserManagement";
import VehicleManagement from "./sidebar/VehicleManagement";
import FirmwareManagement from "./sidebar/FirmwareManagement";
 
const App = () => (  
  <> 
    <ToastContainer />
    <Router>
      <Sidebar2 />
      <div style={{ display: 'flex' }}> 
        <Routes>
          <Route path="/" element={<LoginFrame />} />
          <Route path="/LoginFrame" element={<LoginFrame />} />
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route path="/FirmwareManagement" element={<FirmwareManagement />} />
          <Route path="/VehicleManagement" element={<VehicleManagement />} /> 
          <Route path="/Notification" element={<Notification />} /> 
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Sidebar2" element={<Sidebar2 />} />
          <Route path="/Sidebar2data" element={<Sidebar2data />} />
          <Route path="/SubMenu" element={<SubMenu />} /> 
        </Routes> 
      </div> 
    </Router> 
  </> 
);

export default App;
