import { Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import OutputInput from "./OutputInput";
import uuid from "react-uuid";
import UploadImage from "../../custom/Uploads/UploadImage";

const MixInputsField = ({
  item,
  values,
  handleChange,
  value,
  setFieldValue,
  isEdit,
}) => {
  const [data, setData] = useState(item.array);

  const handleKeyPress = (event) => {
    const { name } = event.target;

    if (event.key === "Enter") {
      let obj = { id: uuid(), title: values[item.name] };
      data.push(obj);
      switch (name) {
        case "workValue":
          setFieldValue("workHistory", [...values.workHistory, obj], false);
          setFieldValue("workValue", "");
          break;

        case "industryValue":
          setFieldValue("industries", [...values.industries, obj], false);
          setFieldValue("industryValue", "");
          break;

        case "experienceValue":
          setFieldValue("experiences", [...values.experiences, obj], false);
          setFieldValue("experienceValue", "");
          break;

        case "languageValue":
          setFieldValue("languages", [...values.languages, obj], false);
          setFieldValue("languageValue", "");
          break;

        case "certificationValue":
          setFieldValue(
            "certifications",
            [...values.certifications, obj],
            false
          );
          setFieldValue("certificationValue", "");
          break;

        case "awardValue":
          setFieldValue("awards", [...values.awards, obj], false);
          setFieldValue("awardValue", "");
          break;

        case "schoolValue":
          setFieldValue("schools", [...values.schools, obj], false);
          setFieldValue("schoolValue", "");
          break;

        case "skillValue":
          setFieldValue("skills", [...values.skills, obj], false);
          setFieldValue("skillValue", "");
          break;

        case "interestValue":
          setFieldValue("interests", [...values.interests, obj], false);
          setFieldValue("interestValue", "");
          break;
      }
    }
  };

  const handleRemoveItem = (index, item) => {
    setData(data.filter((el, id) => id !== index));
    let newArray = [];
    if (item.name === "schoolValue") {
      newArray = values.schools.filter((el) => el.id !== data[index].id);
      setFieldValue("schools", newArray, false);
    }
  };

  return (
    <>
      {item.name === "motivation" || item.name === "selfPromotion" ? (
        <>
          <Typography sx={styles.title}>{item.title}</Typography>
          <textarea
            style={styles.textarea}
            name={item.name}
            maxLength="100"
            value={values[value]}
            onChange={handleChange}
            placeholder={
              item.name === "motivation"
                ? "I applied because"
                : "Why I’m the best fit for this job..."
            }
          />
        </>
      ) : item.name === "upload" ? (
        <UploadImage />
      ) : item.name === "whenStart" ? (
        <>
          <Typography sx={styles.title}>{item.title}</Typography>
          <TextField
            type="date"
            name={item.name}
            value={values[item.name]}
            onChange={handleChange}
            format={"YYYY/MM/DD"}
            sx={{ width: "343px" }}
          />
        </>
      ) : (
              <>
                <Typography sx={styles.title}>{item.title}</Typography>
                <input
                  type={item.type}
                  name={item.name}
                  value={values[item.name]}
                  onChange={handleChange}
                  onKeyPress={(event) => handleKeyPress(event, item.array)}
                  maxLength="35"
                  placeholder="+ Write here"
                  style={{
                    ...styles.textField,
                    width: `${(values[value].length + 1) * 7}` + "px",
                  }}
                />
              </>
            )}

      {data?.map((text, index) => {
        return (
          <OutputInput
            key={index}
            value={text}
            index={index}
            handleRemoveItem={(index) => handleRemoveItem(index, item, text)}
            view={true}
          />
        );
      })}
    </>
  );
};

const styles = {
  textarea: {
    border: "1px solid #9C9C9C",
    borderRadius: "4px",
    resize: "none",
    width: "97%",
    height: "100px",
    padding: "10px",
    lineHeight: "20px",
    outlineColor: "#29CC8F",
    marginBottom: "24px",
  },
  textField: {
    border: "1px solid #9C9C9C",
    borderRadius: "31px",
    minWidth: "92px",
    maxWidth: "100%",
    height: "40px",
    paddingLeft: "10px",
    outlineColor: "#29CC8F",
    marginRight: "10px",
    marginBottom: "24px",
  },
  title: {
    marginTop: "12px",
    marginBottom: "7px",
  },
};

export default MixInputsField;
