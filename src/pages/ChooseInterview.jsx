import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
function ChooseInterview() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#231955",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const style = {
    section: {
      color: "#231955",
      backgroundColor: "#231955",
      justifyContent: "space-around",
      position: "relative",
      padding: "200px 350px",
    },
  };
  return (
    <div>
      <Navbar />
      <div style={style.section}>
        <Box>
          <Grid container spacing={3} xs={0}>
              <Item
                sx={{
                  height: 240,
                  width: 300,
                }}
              >
                <h1>TECHNICAL ROUND</h1>
                <Button variant="contained">Lets Begin</Button>
              </Item>
              <Item
                sx={{
                  height: 240,
                  width: 300,
                }}
              >
                <h1>HR ROUND</h1>
                <Button variant="contained">Lets Begin</Button>
              </Item>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ChooseInterview;
