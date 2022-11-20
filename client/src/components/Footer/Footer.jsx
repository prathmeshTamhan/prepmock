import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import logo from "../../images/logo.png";
function Footer() {
  return (
    <div className="main-footer">
      <Box
        sx={{
          height: 315.9,
          backgroundColor: "#231955",
          "&:hover": {
            backgroundColor: "#1b1341",
            opacity: [0.2, 0.9, 0.9],
          },
        }}
      >
        <Container className="contains" sx={{ width: 1080 }}>
          <Grid container spacing={2}>
            <Grid item xs={19} sm={4}>
              <img src={logo} style={{ height: "70px" }} alt="/"></img>
            </Grid>
          </Grid>
          <div id="footer-links">
            <h2>Important Links</h2>
            <ul>
              <li>
                <Link href="#" underline="hover">
                  About Us
                </Link>
              </li>
              <li>
            
                <Link href="#" underline="hover">
                  Our Blogs
                </Link>
              </li>
              <li>
         
                <Link href="#" underline="hover">
                  Services
                </Link>
              </li>
              <li>
 
                <Link href="#" underline="hover">
                  Terms and Condition
                </Link>
              </li>
              <li>
       
                <Link href="#" underline="hover">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Box>
      <Box bgcolor="">
        <Container>
          <Box textAlign="center">
            PrepMock Team &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;
