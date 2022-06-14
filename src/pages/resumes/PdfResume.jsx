import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { mainColor } from "../../helpers/colors";
import Pdf from "react-to-pdf";

const pdf = React.createRef();

const workHistory = ['1', '2', '3']

const PdfResume = () => {
    return (
        <Box sx={styles.container}>
            <Pdf targetRef={pdf} filename="code-example.pdf" scale={1}>
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

            <Grid container sx={{ margin: '40px', border: '1px solid #C4C4C4', width: '1000px' }} ref={pdf}>
                <Grid
                    item
                    xs={4}
                    sx={{ ...styles.introduction, }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "400px",
                            background: "gray",
                            marginBottom: "30px",
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "end",
                            marginBottom: "28px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "28px",
                                color: `${mainColor}`,
                                width: "200px",
                            }}
                        >
                            Shcherbakova Olha
                        </Typography>
                        <Typography>Developer</Typography>
                    </Box>
                    <Typography sx={styles.text}>
                        あああ
                    </Typography>
                    <Typography sx={styles.text}>Ukrainian</Typography>
                    <Typography sx={styles.text}>Female</Typography>
                    <Typography sx={styles.text}>
                        1999/11/17
                    </Typography>
                    <Typography sx={styles.text}>0934674607</Typography>
                    <Typography sx={styles.text}>os.shcherbakovaa@gmail.com</Typography>
                    <Typography sx={styles.text}>khakaska 7</Typography>
                    <Typography sx={styles.text}>
                        Close to / Bus Stop ATB
              </Typography>
                    <Typography sx={styles.text}>
                        Transport by Bus
                    </Typography>
                </Grid>

                <Grid item xs={5} sx={{ ...styles.fields }}>

                    <Typography sx={styles.title}>
                        Motivation for this Job
                  </Typography>
                    <textarea
                        value="Success"
                        disabled
                        style={styles.textarea}
                    />

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}

                    <Typography sx={styles.title}>Work History</Typography>
                    {workHistory.map((item) => (
                        <Typography key={item} sx={styles.output}>
                            {item}
                        </Typography>
                    ))}
                    {/* {resume?.industries?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>Industry</Typography>
                            {resume.industries.map((item) => (
                                <Typography key={item._id} sx={styles.output}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    {resume?.experiences?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>Experience / Skills</Typography>
                            {resume.experiences.map((item) => (
                                <Typography key={item._id} sx={styles.output}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    {resume?.languages?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>Language</Typography>
                            {resume.languages.map((item) => (
                                <Typography sx={styles.output} key={item._id}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    {resume?.certifications?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>Certifications</Typography>
                            {resume?.certifications?.map((item) => (
                                <Typography key={item._id} sx={styles.output}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    {resume?.awards?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>Awards</Typography>
                            {resume?.awards?.map((item) => (
                                <Typography key={item._id} sx={styles.output}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    {resume?.schools?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>Schools</Typography>
                            {resume?.schools?.map((item) => (
                                <Typography key={item._id} sx={styles.output}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    <Typography sx={styles.title}>
                        Self-Promotion / Extra Info
              </Typography>
                    <textarea
                        value={resume?.selfPromotion}
                        disabled
                        style={styles.textarea}
                    />
                    {resume?.skills?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>
                                Skills I want to Learn
                  </Typography>
                            {resume?.skills?.map((item) => (
                                <Typography key={item._id} sx={styles.output}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    {resume?.interests?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>
                                Industries I am Interested in
                  </Typography>
                            {resume?.interests?.map((item) => (
                                <Typography key={item._id} sx={styles.output}>
                                    {item.title}
                                </Typography>
                            ))}
                        </>
                    )}
                    {files?.length > 0 && (
                        <>
                            <Typography sx={styles.title}>Files</Typography>
                            {files?.map((file, index) => {
                                return <UploadedFile key={index} file={file} />
                            })}
                        </>
                    )}
                    <Typography sx={styles.title}>When can I start?</Typography>
                    <Typography>
                        {moment(resume.whenStart).format("YYYY/DD/MM")}
                    </Typography> */}
                    <Typography sx={{ ...styles.title, marginTop: "20px" }}>
                        DESIRABLE WORKSHIFT
              </Typography>
                    <Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

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
        // border: "1px solid #C4C4C4",
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
        // border: "1px solid #C4C4C4",
        padding: "20px",
        "@media (max-width: 700px)": {
            maxWidth: "100%",
            flexBasis: "100%",
        },
        "@media (max-width: 500px)": {
            border: "none",
            padding: "0px",
        },
    },
    title: {
        marginBottom: "10px",
    },
    text: {
        marginBottom: "18px",
    },
    output: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyItems: "start",
        border: "1px solid #29CC8F",
        borderRadius: "31px",
        height: "40px",
        marginRight: "10px",
        marginBottom: "10px",
        padding: "0 8px",
    },
    textarea: {
        border: "1px solid #29CC8F",
        borderRadius: "4px",
        resize: "none",
        width: "96%",
        minHeight: "50px",
        padding: "10px",
        lineHeight: "20px",
        marginBottom: "24px",
        background: "white",
    },
    files: {
        border: "1px solid #29CC8F",
        width: "132px",
        height: "164px",
        color: "#29CC8F",
        borderRadius: "4px",
        position: "relative",
    },
    uploadImage: {
        position: "absolute",
        bottom: "0",
        right: "0",
    },
    fileName: {
        fontFamily: "Roboto-Medium",
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
    box: {
        position: "relative",
        marginRight: "20px",
        marginBottom: "20px",
    },
};

export default PdfResume;
