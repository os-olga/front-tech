import { Box } from "@mui/material";
import React from "react";

const Notification = ({ text }) => {
  return <Box sx={styles.container}>{text}</Box>;
};

const styles = {
  container: {
    // background: 'pink',
    // color: 'white',
    // position: "absolute",
    width: "238px",
    height: "20px",
    left: "30px",
    top: "954px",
  },
};

export default Notification;
