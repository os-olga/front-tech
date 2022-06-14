import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { mainColor } from "../../helpers/colors";
import Navigation from "./Navigation";
import UserProfile from "./GetUserAndMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, isShow] = useState(false);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Box
          sx={{
            ...styles.box,
            justifyContent: "space-around",
          }}
        >
          <Navigation />
          <Box sx={styles.logo}>
            <img src="../../logos/logo.png" alt="logo" />
            <Typography sx={styles.caption}>Part-time Resume</Typography>
          </Box>
        </Box>

        <img src="../../images/header.png" alt="" />

        <Box
          sx={{
            ...styles.box,
            justifyContent: "space-evenly",
            ...styles.profile,
          }}
        >
          <UserProfile />
          <Link to="/create-resume" className="link">
            <Button sx={styles.creationButton}>Create new resume</Button>
          </Link>
        </Box>
      </Box>
      <Box sx={styles.mobile}>
        <Box>
          <img src="../../logos/logo.png" alt="logo" />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 3px 4px rgb(42 204 143 / 27%)",
    marginBottom: "46px",
    position: "relative",
  },
  content: {
    width: "90%",
    margin: "0 auto",
    height: "120px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  mobile: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
    "@media (min-width: 961px)": {
      display: "none",
    },
  },
  caption: {
    marginLeft: "12px",
    paddingLeft: "12px",
    borderLeft: `2px solid ${mainColor}`,
    color: `${mainColor}`,
    fontSize: "28px",
    lineHeight: "33px",
    fontWeight: "500",
  },
  logo: {
    display: "flex",
    marginLeft: "-35px",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
  creationButton: {
    background: `${mainColor}`,
    color: "#fff",
    borderRadius: "20px",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
    textTransform: "capitalize",
    padding: "10px 27px",
    marginTop: "20px",
    "&:hover": {
      background: `${mainColor}`,
    },
  },
};

export default Header;
