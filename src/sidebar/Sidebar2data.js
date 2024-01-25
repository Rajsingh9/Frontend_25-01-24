// Filename - sidebar/SidebarData.js
// Filename - sidebar/SidebarData.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaBell } from 'react-icons/fa';
import { IoMdCar, IoIosCar } from 'react-icons/io';
import { AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const Sidebar2data = [
  {
    title: 'User Management',
    path: '/UserManagement',
    icon: <AiOutlineUser size={24} />,
    iconClosed: <AiOutlineUser size={24} />,
    iconOpened: <AiOutlineUserAdd size={24} />,
  },
  { 
    title: 'Vehicle Management',
    path: '/VehicleManagement',
    icon: <IoIosCar size={24} />,
    iconClosed: <IoIosCar size={24} />,
    iconOpened: <IoMdCar size={24} />,
  },
  {
    title: 'Firmware Management',
    path: '/FirmwareManagement',
    icon: <FaCog size={24} />,
  },
  {
    title: 'Notification',
    path: '/Notification',
    icon: <FaBell size={24} />,
  },
];

const Sidebar2 = () => (
    <List>
      {Sidebar2data.map((item) => (
        <ListItem button key={item.title} component={Link} to={item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );

export default Sidebar2data; 
