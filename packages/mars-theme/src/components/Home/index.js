import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const Home = ({ state, actions }) => {
  useEffect(() => {
    actions.source
      .fetch("/home")
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, []);

  const data = state.source.get("/home");

  return (
    <Container maxWidth="xl" style={{ marginTop: "100px" }}>
      {data ? (
        <Grid container spacing={3}>
          {/* Left side content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {state.frontity.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {/* {data.content.rendered} */}
              sadsa
            </Typography>
            <Button variant="contained" color="primary">
              CTA Button
            </Button>
          </Grid>

          {/* Right side image */}
          <Grid item xs={12} md={6}>
            <img
              src="your_image_url_here"
              alt="Your Image"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default connect(Home);
