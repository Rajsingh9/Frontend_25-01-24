// Filename - sidebar/Sidebar.js 
import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; 
import { AiOutlineClose } from 'react-icons/ai';

import { List, AppBar, Drawer, Toolbar, Divider, ListItem, IconButton } from "@mui/material";

import SubMenu from "./Submenu";
import Sidebar2data from "./Sidebar2data";

const Sidebar2 = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="fixed" style={{ background: "#15171c" }}> 
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <FaBars />
          </IconButton> 
        </Toolbar>
      </AppBar> 

      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        sx={{ width: 250 }}
      >
        <List>
          <ListItem>
            <IconButton color="inherit" onClick={handleDrawerClose}>
              <AiOutlineClose />
            </IconButton>
          </ListItem>
          <Divider />
          {Sidebar2data.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar2;
