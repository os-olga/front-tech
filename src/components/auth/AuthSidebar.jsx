import { Box, Grid, Typography } from "@mui/material";
import { mainColor } from "../../helpers/colors";

const AuthSidebar = () => {
  return (
    <Grid item xs={12} sm={12} md={6} sx={{ ...styles.section }}>
      <Header />
      <Info />
      <Image />
    </Grid>
  );
};

const Header = () => {
  return (
    <Box sx={styles.box}>
      <Box sx={{ ...styles.desktop, width: "57px", height: "33px" }}>
        <img
          src="../../logos/whitelogo.png"
          alt="logo"
          style={{
            width: "inherit",
            height: "auto",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        />
      </Box>
      <Box sx={styles.mobile}>
        <img src="../../logos/logo.png" alt="logo" />
      </Box>

      <Box sx={{ ...styles.text }}>
        <Typography>WelcomeHR</Typography>
        <Typography>Part-time Resume</Typography>
      </Box>
    </Box>
  );
};

const Info = () => {
  return (
    <Box
      sx={{
        height: "24%",
        "@media (max-width: 900px)": {
          display: "none",
        },
      }}
    >
      <Typography sx={styles.title}>Resume in Minutes</Typography>
      <Typography sx={styles.subtitle}>
        Create your own resume ,download the PDF or send link to your employer.{" "}
      </Typography>
    </Box>
  );
};

const Image = () => {
  return (
    <Box sx={styles.image}>
      <img src="../../auth/image.png" alt="" style={{ width: "95%" }} />
    </Box>
  );
};

const styles = {
  section: {
    background: `${mainColor}`,
    color: "#ffffff",
    padding: "0px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      background: "transparent",
    },
  },
  flexbox: {
    display: "flex",
  },
  text: {
    marginTop: "13px",
    marginLeft: "10px",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#fff",
    "@media (max-width: 900px)": {
      color: `${mainColor}`,
      fontSize: "16px",
    },
  },
  title: {
    fontWeight: 500,
    fontSize: "40px",
    lineHeight: "47px",
    marginTop: "50px",
    marginBottom: "20px",
    letterSpacing: "1px",
    textTransform: "inherit",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "@media (max-width: 900px)": {
      marginTop: "25px",
      marginBottom: "19px",
      fontSize: "32px",
    },
  },
  mobileTitle: {
    fontSize: "16px",
    color: "#29CC8F",
  },
  subtitle: {
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "18px",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  image: {
    width: "90%",
    minHeight: "38%",
    marginTop: "20px",
    "@media (max-width: 1110px)": {
      width: "95%",
    },
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  box: {
    minHeight: "20%",
    display: "flex",
    alignItems: "center",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    "@media (max-width: 900px)": {
      filter: "none",
      marginTop: "36px",
    },
  },
  desktop: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  mobile: {
    "@media (min-width: 900px)": {
      display: "none",
    },
  },
};

export default AuthSidebar;
