import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../pagescss/Domain.css";

function ChooseInterview() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div id="domain">
      <Navbar />
      <h1 className="heading">Choose Type of Interview for preparation</h1>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Item
          sx={{
            height: 250,
            width: 350,
            fontSize: 34,
            fontWeight: 15,
            paddingTop: 4,

            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"Technical Round"}
          <h6 className="h6">
            Technical Round of any interview include various questions from
            different domains to check how technically sound interviwee is? This
            section include questions from different technical domains
          </h6>
          <Button variant="contained">Go Ahead</Button>
        </Item>
        <Item
          sx={{
            height: 250,
            width: 350,
            fontSize: 33,
            fontWeight: 13,
            paddingTop: 4,
            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"HR Round"}
          <h6 className="h6">
            HR round include general and habitual questions to check interviwee
            personality traits and to check various behavioural factors to
            determine interviwee's actual personality.
          </h6>
          <Button variant="contained">Go Ahead</Button>
        </Item>
      </Stack>
    </div>
  );
}

export default ChooseInterview;
