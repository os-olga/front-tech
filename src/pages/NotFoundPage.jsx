import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import Footer from "../components/footer/Footer";

const NotFoundPage = () => {
  return (
    <Grid>
      <Grid sx={{ height: "91vh", position: "relative" }}>
        <Box sx={styles.box}>
          <img src="../../notFound.png" alt="Page not found" />
          <Typography sx={styles.title}>
            Whoops, Hayamaru-kun is confused.
          </Typography>
          <Typography sx={styles.subtitle}>
            We can’t find the page you’re looking for.
          </Typography>
          <Link to="/" className="link">
            <Typography sx={styles.link}>Go Back</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid
        sx={{
          "@media (max-width: 800px)": {
            display: "none",
          },
        }}
      >
        {/* <Footer /> */}
      </Grid>
    </Grid>
  );
};

const styles = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "100%",
  },
  title: {
    fontSize: "30px",
    fontWeight: 700,
    lineHeight: "35px",
    marginBottom: "10px",
    "@media (max-width: 1120px)": {
      fontSize: "27px",
      lineHeight: "30px",
    },
    "@media (max-width: 800px)": {
      fontSize: "25px",
      lineHeight: "25px",
    },
    "@media (max-width: 500px)": {
      fontSize: "20px",
      lineHeight: "23.44px",
    },
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "23px",
    "@media (max-width: 800px)": {
      fontSize: "17px",
      lineHeight: "20px",
    },
    "@media (max-width: 500px)": {
      fontSize: "15px",
      lineHeight: "17.58px",
    },
  },
  link: {
    marginTop: "40px",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "18px",
    color: "#29CC8F",
  },
};
export default NotFoundPage;
