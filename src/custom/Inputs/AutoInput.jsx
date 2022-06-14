import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import uuid from "react-uuid";
import OutputInput from '../../components/resumes/OutputInput'

const InputMap = {
    workValue: "workHistory",
    industryValue: "industries",
    experienceValue: "experiences",
    languageValue: "languages",
    certificationValue: "certifications",
    awardValue: "awards",
    interestValue: "interests",
    schoolValue: "schools",
    skillValue: "skills",
};

const AutoInput = ({ type, value, name, onChange, title, setFieldValue, values }) => {
    console.log(InputMap[name])
    const [data, setData] = useState(values[InputMap[name]]);
    const handleKeyPress = (event) => {
        const { name } = event.target;

        if (event.key === "Enter") {
            let obj = { id: uuid(), title: value };
            data.push(obj);
            switch (name) {
                case "workValue":
                    setFieldValue(name, [...name, obj], false);
                    setFieldValue('workValue', "");
                    break;

            }
        }
    }

    const handleRemoveItem = (index, item) => {
        setData(data.filter((el, id) => id !== index));
    };

    return (
        <Box sx={{ marginBottom: '23px' }}>
            <Typography sx={styles.title}>{title}</Typography>
            <input
                type={type}
                name={name}
                value={value[name]}
                onChange={onChange}
                onKeyPress={(event) => handleKeyPress(event, name.array)}
                maxLength="35"
                placeholder="+ Write here"
                style={{
                    ...styles.textField,
                    width: `${(value.length + 1) * 7}` + "px",
                }}
            />
            {data?.map((item, index) => {
                return (
                    <div>{item.title}</div>
                    // <OutputInput
                    //     key={index}
                    //     value={item}
                    //     index={index}
                    //     handleRemoveItem={(index) =>
                    //         handleRemoveItem(index, item)
                    //     }
                    //     view={true}
                    // />
                )
            })}
        </Box>
    )
}

const styles = {
    title: {
        marginTop: "12px",
        marginBottom: "7px",
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
}

export default AutoInput;