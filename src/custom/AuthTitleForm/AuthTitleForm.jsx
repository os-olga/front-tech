import { Grid, Typography } from "@mui/material";

const AuthTitleForm = ({ label, caption }) => {
  return (
    <Grid sx={styles.titleBlock}>
      <Typography sx={styles.label}>{label}</Typography>
      <Typography sx={styles.caption}>{caption}</Typography>
    </Grid>
  );
};

const styles = {
  titleBlock: {
    marginBottom: "27px",
    textAlign: "center",
  },
  label: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#323232",
    paddingLeft: "10px",
    marginBottom: "5px",
  },
  caption: {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "21px",
    color: "#323232",
    "@media (max-width: 530px)": {
      fontSize: "16px",
    },
  },
};

export default AuthTitleForm;
