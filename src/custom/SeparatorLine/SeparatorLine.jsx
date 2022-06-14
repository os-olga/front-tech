import React from "react";
import { Typography } from "@mui/material";

const SeparatorLine = () => {
  return <Typography sx={styles.separator}>or</Typography>;
};

const styles = {
  separator: {
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "19px",
    position: "relative",
    fontWeight: "400",
    color: "#999999",
    margin: "13px 0",
    "&:before": {
      content: '""',
      width: "44%",
      borderBottom: "1px solid #C4C4C4",
      position: "absolute",
      left: 0,
      top: "50%",
      zIndex: "1",
    },
    "&:after": {
      content: '""',
      width: "44%",
      borderBottom: "1px solid #C4C4C4",
      position: "absolute",
      right: 0,
      top: "50%",
      zIndex: "1",
    },
  },
};

export default SeparatorLine;
