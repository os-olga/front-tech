import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { greyColor } from "../../helpers/colors";
import AddIcon from "@mui/icons-material/Add";
import UploadedFile from "../../custom/UploadedFile/UploadedFile"

const UploadFile = ({ multipleFiles, upload }) => {
    return (

        <Box sx={{ marginBottom: '23px' }}>
            <Typography sx={{ margin: '20px 0' }}>Files:</Typography>
            <label style={styles.upload}>
                <input
                    type="file"
                    multiple
                    onChange={upload}
                    style={{ display: 'none' }}
                />
                <Box>
                    <AddIcon />
                    <Typography>Upload your file</Typography>
                </Box>
            </label>

            {multipleFiles?.map((file, index) => {
                return <UploadedFile key={index} file={file} />
            })}
        </Box>
    );
};

const styles = {
    upload: {
        color: "#323232",
        width: "132px",
        height: "164px",
        border: `1px dashed ${greyColor}`,
        textTransform: "none",
        fontSize: "12px",
        fontWeight: 300,
        lineHeight: "14.06px",
        borderRadius: "4px",
        cursor: "pointer",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },

    output: {
        border: "1px solid #29CC8F",
        width: "132px",
        height: "164px",
        color: "#29CC8F",
        borderRadius: "4px",
    },

};

export default UploadFile;
