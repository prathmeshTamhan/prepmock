import React from "react";
import "../index.css";
import feature from "../images/feature_1.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Services() {
  return (
    <div>
      <h2 id="Headingplans">Our plans</h2>
      <div id="plans">
        <Card sx={{ maxWidth: 300 }}>
        <CardMedia
              component="feature"
              height="140"
              image={feature}
              alt="green iguana"
            />
          <CardActionArea>
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Weekly Subscription
              </Typography>
              <Typography variant="body2" color="text.primary">
                Weekly Subscription includes 150 vide calls a day and 50 mock
                question of each domains. Difficulty level increases
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained">Buy 299/-</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Monthly Subscription
              </Typography>
              <Typography variant="body2" color="text.primary">
                Weekly Subscription includes 350 video calls a day and 150 mock
                question of each domains. More practice, means high success
                rate.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained">Buy 499/-</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Yearly Subscription
              </Typography>
              <Typography variant="body2" color="text.primary">
                Weekly Subscription includes 550 vide calls a day and 200 mock
                question of each domains. Can use this subscription for the
                quick interview prep at any moment
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained">Buy 999/-</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Services;
