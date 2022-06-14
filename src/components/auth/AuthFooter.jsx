import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const AuthFooter = ({ type }) => {
  return (
    <>
      {type === "mobile" && (
        <Grid sx={styles.mobile}>
          {window.location.pathname === "/" ? (
            <Link to="/signin" className="link">
              <Typography sx={styles.redirectLink}>
                Already have account?{" "}
                <span style={styles.typeAuth}>Log In</span>
              </Typography>
            </Link>
          ) : (
            <Link to="/" className="link">
              <Typography sx={styles.redirectLink}>
                Don’t have an account?{" "}
                <span style={styles.typeAuth}>Sign Up</span>
              </Typography>
            </Link>
          )}
        </Grid>
      )}
      {type === "dekstop" && (
        <Grid sx={styles.dekstop}>
          {window.location.pathname === "/" ? (
            <Link to="/signin" className="link">
              <Typography sx={styles.redirectLink}>
                Already have account?{" "}
                <span style={styles.typeAuth}>Log In</span>
              </Typography>
            </Link>
          ) : (
            <Link to="/" className="link">
              <Typography sx={styles.redirectLink}>
                Don’t have an account?{" "}
                <span style={styles.typeAuth}>Sign Up</span>
              </Typography>
            </Link>
          )}
        </Grid>
      )}
    </>
  );
};

const styles = {
  mobile: {
    width: "100%",
    position: "relative",
    background: "#FCFCFC",
    boxShadow: "0px -1px 10px 2px rgba(0, 0, 0, 0.1)",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "50px",
    "@media(min-width: 900px)": {
      display: "none",
    },
  },
  dekstop: {
    "@media(max-width: 900px)": {
      display: "none",
    },
    marginTop: "30px",
  },
  redirectLink: {
    textAlign: "center",
    color: "#000",
  },
  typeAuth: {
    color: "#29CC8F",
    paddingLeft: "6px",
    cursor: "pointer",
  },
};

export default AuthFooter;
