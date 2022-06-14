import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { greyColor } from "../../helpers/colors";

const CreateButton = () => {
  return (
    <Box sx={{ ...styles.cardsItem }}>
      <Link to="/create-resume" className="link">
        <Box sx={{ ...styles.card, ...styles.createButton }}>
          <Box sx={{ ...styles.content }}>
            <AddOutlinedIcon sx={{ color: "#C4C4C4" }} />
            <Typography sx={{ fontSize: "12px" }}>Create new Resume</Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const styles = {
  cardsItem: {
    position: "relative",
    display: "flex",
    padding: "0.50rem 0rem",
    marginBottom: "1rem",
    marginRight: "15px",
    "@media (max-width: 450px)": {
      margin: "0 auto",
    },
  },
  card: {
    position: "relative",
    width: "132px",
    height: "164px",
    backgroundColor: "#ffffff",
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  createButton: {
    border: `1px dashed ${greyColor}`,
    textAlign: "center",
    position: "relative",
    "@media (max-width: 34rem)": {
      margin: "0 auto",
    },
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
};
export default CreateButton;
