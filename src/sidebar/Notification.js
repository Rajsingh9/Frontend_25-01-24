import React from "react";

import { Paper, Container, Typography } from "@mui/material";

const Notification = () => (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">
          This is the Notification page.
        </Typography>
      </Paper>
    </Container>
  );

export default Notification;
