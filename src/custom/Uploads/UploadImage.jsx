import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { greyColor } from "../../helpers/colors";


const Input = styled("input")({
  display: "none",
});

const UploadImage = ({ setUploadImage, uploadImage = "", }) => {
  const [img, setImg] = useState(uploadImage)

  const handleChange = (event) => {
    setUploadImage(event.target.files[0])
    setImg(URL.createObjectURL(event.target.files[0]))
  }
  console.log(uploadImage)
  return (
    <Box sx={{ ...styles.uploadBox }}>
      {uploadImage === null ? (
        <label style={styles.uploadLabelFile} htmlFor="image-input">
          <Input
            type="file"
            name="image-input"
            id="image-input"
            accept="image/*"
            onChange={(event) => handleChange(event)}
            style={styles.uploadInputFile}
          />
          <Button sx={styles.button}>
            Image or up to 1 min Video with self introduction
          </Button>
        </label>
      ) : (
          <Box sx={{ ...styles.uploadBox, border: `1px solid ${greyColor}` }}>
            <img
              src={img}
              alt=""
              style={{ width: "100%", height: "inherit" }}
            />
          </Box>
        )}
    </Box>
  );
};

const styles = {
  uploadBox: {
    width: "100%",
    height: "400px",
    display: "block",
    textAlign: "center",
    marginBottom: "30px",
  },
  uploadInputFile: {
    opacity: "0",
    overflow: "hidden",
    position: "absolute",
    zIndex: "-1",
  },
  uploadLabelFile: {
    height: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    position: "relative",
    background: "#C4C4C4",
  },
  button: {
    display: "block",
    width: "100%",
    color: "#000",
    textAlign: "center",
    "&:hover": {
      background: "none",
    },
  },
  uploadImage: {
    position: "absolute",
    bottom: "0",
    right: "0",
  },

};

export default UploadImage;
