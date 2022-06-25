import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ActionHeader from "../../components/resumes/ActionHeader";
import { mainColor } from "../../helpers/colors";
import moment from "moment";
import Loader from "../../custom/Loader/Loader";
import UploadedFile from '../../custom/UploadedFile/UploadedFile';
import API from "../../helpers/api";
import Pdf from "react-to-pdf";
import QRcode from 'qrcode'

const ref = React.createRef();

const ViewResume = () => {
  const [resume, setResume] = useState([]);
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState(null);
  let location = useLocation();
  let id = location.pathname.split("/")[2];

  useEffect(() => {
    async function fetchMyAPI() {
      const resp = await API.get(`/resumes/${id}`);
      setResume(resp.data);
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    API.get(`/media/${id}`)
      .then((response) => {
        setImage(response.data[0].filePath);
        setFiles(response.data.splice(1));
      })
      .catch((error) => console.log(error));
  }, [setImage]);


  console.log(resume, typeof resume, 'resume')

  const [code, setCode] = useState('')

  useEffect(() => {
    QRcode.toDataURL(document.location.href).then(setCode)
  }, [])

  return (
    <Box sx={styles.container}>
      {resume !== null ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Typography sx={{ marginBottom: "10px" }}>
              {resume.resumeTitle}
            </Typography>
            <ActionHeader type={"second"} resumeId={id} />
          </Box>
          <Pdf targetRef={ref} filename="code-example.pdf" scale={0.62} x={4} y={5}>
            {({ toPdf }) => <button style={{ position: 'absolute', right: '0', top: '10px', color: 'transparent', padding: '20px' }} onClick={toPdf}>Generate Pdf</button>}
          </Pdf>

          <Grid container ref={ref}>
            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              lg={4}
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
                <img
                  src={
                    image !== undefined &&
                    `https://storage.cloud.google.com/cv-medias/${image}`
                  }
                  alt={`${image}`}
                  style={{ width: "inherit", height: "inherit" }}
                />
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
                  {resume.surname} {resume.name}
                </Typography>
                <Typography>{resume.position}</Typography>
              </Box>
              <Typography sx={styles.text}>
                {resume.kanaSurname} {resume.kanaName}
              </Typography>
              <Typography sx={styles.text}>{resume.nationality}</Typography>
              <Typography sx={styles.text}>{resume.gender}</Typography>
              <Typography sx={styles.text}>
                {moment(resume.birthday).format("YYYY/DD/MM")}
              </Typography>
              <Typography sx={styles.text}>{resume.phone}</Typography>
              <Typography sx={styles.text}>{resume.eMail}</Typography>
              <Typography sx={styles.text}>{resume.address}</Typography>
              <Typography sx={styles.text}>
                Close to {resume.busStation} / Bus Stop
              </Typography>
              <Typography sx={styles.text}>
                Transport by {resume.transport}
              </Typography>

              <img src={code} alt="" style={{width: '300px', height: '300px'}}/>
            </Grid>

            <Grid item xs={12} sm={7} md={7} lg={8} sx={{ ...styles.fields }}>
              {resume?.motivation?.length > 0 && (
                <>
                  <Typography sx={styles.title}>
                    Motivation for this Job
                  </Typography>
                  <textarea
                    value={resume.motivation}
                    disabled
                    style={styles.textarea}
                  />
                </>
              )}
              {resume?.workHistory?.length > 0 && (
                <>
                  <Typography sx={styles.title}>Work History</Typography>
                  {resume.workHistory.map((item) => (
                    <Typography key={item._id} sx={styles.output}>
                      {item.title}
                    </Typography>
                  ))}
                </>
              )}
              {resume?.industries?.length > 0 && (
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
              {console.log(files)}
              {files?.length > 0 && (
                <>
                  <Typography sx={styles.title}>Files</Typography>
                  {files?.map((file, index) => {
                    return (
                      <p key={index}>{file.originalname}</p>
                    )
                    //  <UploadedFile key={index} file={file} />
                  })}
                </>
              )}
              <Typography sx={styles.title}>When can I start?</Typography>
              <Typography>
                {moment(resume.whenStart).format("YYYY/DD/MM")}
              </Typography>
              <Typography sx={{ ...styles.title, marginTop: "20px" }}>
                DESIRABLE WORKSHIFT
              </Typography>
              <Box>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
          <Loader />
        )}
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

  //
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

export default ViewResume;
