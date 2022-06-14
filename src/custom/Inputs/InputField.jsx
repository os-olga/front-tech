import React from "react";
import { mainColor, greyColor } from "../../helpers/colors";

const InputField = ({ value, name, placeholder, type, onChange }) => (
  <input
    type={type}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    style={styles.input}
  />
);

const styles = {
  input: {
    width: "96%",
    border: `1px solid ${greyColor}`,
    borderRadius: "3px",
    padding: "10px 8px",
    outlineColor: `${mainColor}`,
  },
};

export default InputField;
