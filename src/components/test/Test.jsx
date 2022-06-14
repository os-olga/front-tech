import { Box, Grid } from '@mui/material'
import React, { useState, useRef } from 'react'
import ActionHeader from '../resumes/ActionHeader';
import { greyColor } from '../../helpers/colors'
import Self from './SelfinfoDetail'
import Detail from './ExperienceDetail';

const Test = () => {
    const [resumeTitle, setResumeTitle] = useState("");
    const [uploadImage, setUploadImage] = useState(null);
    const [multipleFiles, setMultipleFiles] = useState(null);
    const [workshift, setWorkshift] = useState(null);

    const handleMultipleUpload = (e) => {
        const data = [];
        for (let i = 0; i < e.target.files.length; i++) {
            data.push(e.target.files[i]);
        }
        setMultipleFiles(data);
    };

    const selfFormikRef = useRef();
    const detailFormikRef = useRef();

    return (
        <Box sx={styles.container}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                }}
            >
                <input
                    type="text"
                    value={resumeTitle}
                    onChange={(event) => setResumeTitle(event.target.value)}
                    placeholder="resume title"
                    style={styles.resumeTitle}
                />
                <ActionHeader
                    type={"first"}
                    resumeTitle={resumeTitle}
                    firstFormikRef={selfFormikRef}
                    secondFormikRef={detailFormikRef}
                />
            </Box>

            <Grid container>
                <Grid item xs={12} sm={5} md={5} lg={4} sx={{ ...styles.introduction }}>
                    <Self
                        uploadImage={uploadImage}
                        setUploadImage={setUploadImage}
                        selfFormikRef={selfFormikRef}
                    />
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={8} sx={{ ...styles.fields }}>
                    <Detail
                        multipleFiles={multipleFiles}
                        setMultipleFiles={setMultipleFiles}
                        upload={handleMultipleUpload}
                        detailFormikRef={detailFormikRef}
                        setWorkshift={setWorkshift}
                    />
                </Grid>
            </Grid>

        </Box>
    )
}

const styles = {
    container: {
        width: "90%",
        margin: "0 auto",
        position: "relative",
        "@media (max-width: 900px)": {
            width: "100%",
        },
    },
    introduction: {
        border: "1px solid #C4C4C4",
        padding: "20px",
        borderRight: "none",
        "@media (max-width: 900px)": {
            paddingBottom: "15px",
        },
        "@media (max-width: 700px)": {
            maxWidth: "100%",
            flexBasis: "100%",
            borderRight: "1px solid #C4C4C4",
            borderBottom: "0px",
        },
        "@media (max-width: 500px)": {
            border: "none",
            padding: "0px",
        },
    },
    fields: {
        border: "1px solid #C4C4C4",
        padding: "20px",
        "@media (max-width: 900px)": {},
        "@media (max-width: 700px)": {
            maxWidth: "100%",
            flexBasis: "100%",
        },
        "@media (max-width: 500px)": {
            border: "none",
            padding: "0px",
        },
    },
    resumeTitle: {
        paddingLeft: "8px",
        border: "none",
        borderBottom: "1px solid",
        outline: "none",
    },
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

export default Test;