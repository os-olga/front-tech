import { Box, Typography } from "@mui/material";
import { mainColor } from "../../helpers/colors";

const UploadedFile = ({ file }) => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.fileName}>
        {file.name.length > 25 ? file.name.substr(0, 25) + "..." : file.name}
      </Typography>
      <img
        src="../../resumeDetail/book2.png"
        style={styles.uploadImage}
        alt=""
      />
    </Box>
  );
};

const styles = {
  box: {
    position: "relative",
    marginRight: "20px",
    marginBottom: "20px",
    border: `1px solid ${mainColor}`,
    width: "132px",
    height: "164px",
    color: ` ${mainColor}`,
    borderRadius: "4px",
  },
  fileName: {
    fontSize: "12px",
    fontWeight: 500,
    wordBreak: "break-word",
    textAlign: "center",
    width: "85%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default UploadedFile;
