import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

// import "../pagescss/Domain.css";

function ChooseDomain() {

  const navigate = useNavigate()

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
      <h1 className="heading">Choose your domain of Interest</h1>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Item
          sx={{
            height: 250,
            width: 350,
            fontSize: 30,
            fontWeight: 10,
            paddingTop: 4,
            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"Computer Networks "}
          <h6 className="h6">
            Computer networking refers to interconnected computing devices that
            can exchange data and share resources with each other.
          </h6>

          <Button variant="contained" onClick={()=>{  
            const interview =  (window.location.href).split('?')[1] 
            console.log(interview)
            navigate(`/chooseLevel?${interview}&domain=CN`)
            }} >Lets Begin</Button>
        </Item>
        <Item
          sx={{
            height: 250,
            width: 350,
            fontSize: 30,
            fontWeight: 10,
            paddingTop: 4,
            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"Operating Systems"}
          <h6 className="h6">
            OS is the program that, after being initially loaded into the
            computer by a boot program, manages all of the other application
            programs in a computer.
          </h6>
          <Button variant="contained" onClick={()=>{  
            const interview =  (window.location.href).split('?')[1] 
            console.log(interview)
            navigate(`/chooseLevel?${interview}&domain=OS`)
            }}  >Lets Begin</Button>
        </Item>
        <Item
          sx={{
            height: 250,
            width: 350,
            fontSize: 30,
            fontWeight: 10,
            paddingTop: 2,

            borderRadius: 4,
            color: "RGB(31,70,144)",
          }}
        >
          {"Database Management System "}
          <h6 className="h6-1">
            Software system that enables users to define, create, maintain and
            control access to the database
          </h6>
          <Button variant="contained" onClick={()=>{  
            const interview =  (window.location.href).split('?')[1] 
            console.log(interview)
            navigate(`/chooseLevel?${interview}&domain=DBMS`)
            }}  >Lets Begin</Button>
        </Item>
      </Stack>
    </div>
  );
}

export default ChooseDomain;
