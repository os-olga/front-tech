import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const Birthday = ({
  item,
  values,
  handleChange,
  onFocus,
  onBlur,
  isNotRequired,
}) => {
  return (
    <Box sx={{ margin: "20px 0", width: "100%" }}>
      <Typography sx={styles.label}>
        {!isNotRequired && <span style={styles.require}>*</span>}{" "}
        {item.placeholder}
      </Typography>
      <TextField
        type="date"
        name={item.name}
        defaultValue={values[item.name]}
        // value={values[item.name].split("T")[0].replaceAll("-", "/")}
        onChange={handleChange}
        // format={"YYYY/MM/DD"}
        onFocus={onFocus}
        onBlur={onBlur}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

const Gender = ({
  item,
  values,
  handleChange,
  onFocus,
  onBlur,
  isNotRequired,
  errors,
  touched,
}) => {
  return (
    <Box sx={{ margin: "20px 0" }}>
      <Typography sx={styles.label}>
        {!isNotRequired && <span style={styles.require}>*</span>}{" "}
        {item.placeholder}
      </Typography>
      <Select
        value={values[item.name]}
        onChange={handleChange}
        displayEmpty
        name={item.name}
        sx={{ width: "100%" }}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <MenuItem disabled selected sx={{ color: "#777777", fontSize: "14px" }}>
          Gender
        </MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
    </Box>
  );
};

const Nationality = ({
  item,
  values,
  handleChange,
  nationality,
  onFocus,
  onBlur,
  isNotRequired,
}) => {
  return (
    <>
      <Typography sx={styles.label}>
        {!isNotRequired && <span style={styles.require}>*</span>}{" "}
        {item.placeholder}
      </Typography>
      <Select
        value={values[item.name]}
        onChange={handleChange}
        displayEmpty
        name={item.name}
        sx={{ width: "100%" }}
      >
        {nationality.map((natio, index) => {
          return (
            <MenuItem key={index} value={natio.text}>
              {natio.text}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

const Input = styled("input")({
  display: "none",
});

const CopyInput = ({ item, values, value, handleChange }) => {
  const [nationality, setNationality] = useState([
    { text: "日本" },
    { text: "アイスランド" },
    { text: "アイルランド" },
    { text: "アゼルバイジャン" },
    { text: "アフガニスタン" },
    { text: "アラブ首長国連邦" },
    { text: "アルジェリア" },
    { text: "アルゼンチン" },
    { text: "アルバニア" },
    { text: "アルメニア" },
  ]);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  let isNotRequired = item.placeholder === "Position at work";

  return (
    <Box>
      {item.name === "gender" ? (
        <Gender
          item={item}
          values={values}
          handleChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          isNotRequired={isNotRequired}
        />
      ) : item.name === "birthday" ? (
        <Birthday
          item={item}
          values={values}
          handleChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          isNotRequired={isNotRequired}
        />
      ) : item.name === "nationality" ? (
        <Nationality
          item={item}
          values={values}
          handleChange={handleChange}
          nationality={nationality}
          onFocus={onFocus}
          onBlur={onBlur}
          isNotRequired={isNotRequired}
        />
      ) : (
              <>
                <Typography sx={styles.label}>
                  {!isNotRequired && <span style={styles.require}>*</span>}{" "}
                  {item.placeholder}
                </Typography>
                <input
                  type={item.type}
                  name={item.name}
                  value={values[item.name]}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                  style={{
                    ...styles.input,
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </>
            )}
    </Box>
  );
};

const styles = {
  input: {
    border: "1px solid #9C9C9C",
    borderRadius: "5px",
    height: "40px",
    paddingLeft: "10px",
    width: "96%",
    marginBottom: "23px",
  },
  label: {
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 400,
    marginBottom: "6px",
  },
  require: {
    color: "#F68C8D",
    fontSize: "12px",
    lineHeight: "14px",
  },

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
};

export default CopyInput;
