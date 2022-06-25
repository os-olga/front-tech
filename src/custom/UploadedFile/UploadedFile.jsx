import { Box, Typography } from "@mui/material";
import { mainColor } from "../../helpers/colors";

const UploadedFile = ({ file }) => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.fileName}>
        {file.name.length > 25 ? file.name.substr(0, 25) + "..." : file.name}
      </Typography>
      <img style={{ position: 'absolute', bottom: '0', right: '0' }} src="../../images/book.png" alt="" />
      <Box sx={styles.action}>
        <Box sx={styles.inner}>
          <button style={styles.btn}>View</button>
          <button style={styles.btn}>Delete</button>
        </Box>
      </Box>

    </Box>
  );
};

const styles = {
  box: {
    position: "relative",
    marginRight: "20px",
    marginBottom: "20px",
    border: `1px solid ${mainColor}`,
    minWidth: "136px",
    height: "164px",
    color: `${mainColor}`,
    borderRadius: "4px",
    "&:hover": {
      color: 'transparent',
    }
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
  btn: {
    width: '80px',
    padding: '5px 0',
    color: `${mainColor}`,
    background: '#fff',
    margin: '10px 0',
    borderRadius: '4px'
  },
  action: {
    background: "rgba(0, 0, 0, 0.3)",
    height: '100%',
    opacity: '0',
    "&:hover": {
      opacity: '1',
    }
  },
  inner: {
    zIndex: '2',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default UploadedFile;
