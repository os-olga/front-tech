import React from "react";
import { Box, Typography } from "@mui/material";
import { greyColor } from "../../helpers/colors";
import AddIcon from "@mui/icons-material/Add";
import UploadedFile from "../../custom/UploadedFile/UploadedFile"

const UploadFile = ({ multipleFiles, upload }) => {
    return (
        <Box sx={{ marginBottom: '23px', }}>
            <Typography sx={styles.title}>Files:</Typography>
            <Typography sx={styles.subtitle}>You can upload up to 3 files with .jpg , .doc or .pdf formats.</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <label style={styles.upload}>
                    <input
                        type="file"
                        multiple
                        onChange={upload}
                        style={{ display: 'none' }}
                    />
                    <Box>
                        <AddIcon sx={{color: "#C4C4C4"}}/>
                        <Typography sx={{color: "#323232"}}>Upload your file</Typography>
                    </Box>
                    <img style={{position: 'absolute', bottom: '0', right: '0'}} src="../../images/book.png" alt="" />
                </label>

                {multipleFiles?.map((file, index) => {
                    return <UploadedFile key={index} file={file} />
                })}
            </Box>

        </Box>
    );
};

const styles = {
    upload: {
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
        textAlign: 'center',
        marginRight: '20px',
        position: 'relative'
    },
    output: {
        border: "1px solid #29CC8F",
        width: "132px",
        height: "164px",
        color: "#29CC8F",
        borderRadius: "4px",
    },
    title: {
        marginTop: '20px', 
        marginBottom: '8px', 
        fontSize: '12px', 
        textTransform: 'uppercase'
    },
    subtitle: {
        color: '#9C9C9C', 
        marginBottom: '8px', 
        fontSize: '12px', 
        lineHeight: '14px',
    }
};

export default UploadFile;
