// Filename - sidebar/SubMenu.js 
// Add this import at the top of the file
import React, { useState } from "react";
import { Link } from "react-router-dom";
 
import { styled } from "@mui/system";
import { Collapse, ListItemIcon } from "@mui/material";

const StyledSidebarLink = styled(Link)(({ theme }) => ({
  display: "flex",
  color: "#15171c",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  listStyle: "none",
  height: "60px",
  textDecoration: "none",
  fontSize: "18px",
  "&:hover": {
    background: "#9ab5f5",  
    borderLeft: "4px black", /* 4px solid white */
    cursor: "pointer", 
  },
}));

const StyledSidebarLabel = styled("span")({
  marginLeft: "16px",
});

const StyledDropdownLink = styled(Link)(({ theme }) => ({
  background: "#15171c",
  height: "60px", 
  paddingLeft: "3rem",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#ffffff", 
  fontSize: "18px",
  "&:hover": {
    background: "black",
    cursor: "pointer",
  },
})); 

const SidebarMenuItem = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <StyledSidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <StyledSidebarLabel>{item.title}</StyledSidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </StyledSidebarLink>
      <Collapse in={subnav} timeout="auto" unmountOnExit>
        {item.subNav &&
          item.subNav.map((subItem, index) => (
            <StyledDropdownLink to={subItem.path} key={index}>
              <ListItemIcon>{subItem.icon}</ListItemIcon>
              <StyledSidebarLabel>{subItem.title}</StyledSidebarLabel>
            </StyledDropdownLink>
          ))}
      </Collapse>
    </>
  );
};

export default SidebarMenuItem;
