import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const ToastNotification = ({ text, value }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <>{alert && <Box sx={styles.box}>{text}</Box>}</>;
};

const styles = {
  box: {
    background: "#000000",
    color: "#ffffff",
    padding: "16px 24px",
    fontSize: "14px",
    fontWeight: "400",
    width: "100px",
    position: "absolute",
    left: "16px",
    bottom: "24px",
  },
};

export default ToastNotification;
