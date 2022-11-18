import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

import "../pagescss/Domain.css";

function Chooselevel() {

  const navigate = useNavigate()

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div id="level">
      <Navbar />
      <h1 className="heading">Choose Your Level for Preparation</h1>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Item
          sx={{
            height: 90,
            width: 490,
            fontSize: 25,
            fontWeight: 10,
            paddingTop: 2.4,
            paddingLeft: 10,
            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"Beginner                                       "}
          <Button variant="contained" onClick={() => {
            const interviewAndSub = (window.location.href).split('?')[1]
            navigate(`/start?${interviewAndSub}&level=beginner`)
          }}  >LetsGo</Button>
        </Item>
        <Item
          sx={{
            height: 90,
            width: 490,
            fontSize: 25,
            fontWeight: 10,
            paddingTop: 2.4,
            paddingLeft: 10,
            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"Intermediate  "}
          <Button variant="contained" onClick={() => {
            const interviewAndSub = (window.location.href).split('?')[1]
            navigate(`/start?${interviewAndSub}&level=intermediate`)
          }}>LetsGo</Button>
        </Item>
        <Item
          sx={{
            height: 90,
            width: 490,
            fontSize: 25,
            fontWeight: 10,
            paddingTop: 2.4,
            paddingLeft: 10,
            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"Advance     "}
          <Button variant="contained" onClick={() => {
            const interviewAndSub = (window.location.href).split('?')[1]
            navigate(`/start?${interviewAndSub}&level=advance`)
          }}>LetsGo</Button>
        </Item>
      </Stack>
    </div>
  );
}

export default Chooselevel;
