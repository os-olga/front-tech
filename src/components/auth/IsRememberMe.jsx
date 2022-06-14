import { Grid, Typography, Checkbox } from "@mui/material";

const CheckboxIsRememberMe = ({ isRememberMe, setIsRememberMe }) => {
  return (
    <Grid sx={styles.box}>
      <Checkbox
        checked={isRememberMe}
        onChange={(e) => setIsRememberMe(e.target.checked)}
        sx={styles.checkbox}
      />
      <Typography sx={styles.label}>Remember me</Typography>
    </Grid>
  );
};

const styles = {
  box: {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    marginBottom: "-20px",
  },
  label: {
    fontSize: "12px",
    fontWeight: 400,
  },
};

export default CheckboxIsRememberMe;
