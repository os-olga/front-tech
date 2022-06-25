import React, { useState, useRef, } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import ActionHeader from "../../components/resumes/ActionHeader";
import Loader from "../../custom/Loader/Loader";
import CopyInput from "../../components/resumes/CopyInput";
import CopyMixInputs from "../../components/resumes/CopyMixInputs";
import {
  initialState,
  formValidation,
} from "../../components/resumes/ValidationAndInitialValues";
import { data } from "../../helpers/data";
import UploadImage from '../../custom/Uploads/UploadImage';
import AddIcon from "@mui/icons-material/Add";
import Schedule from "../../components/resumes/schedule/Schedule";
import { greyColor } from '../../helpers/colors'
import UploadedFile from "../../custom/UploadedFile/UploadedFile";

const EditResume = () => {
  const [initialValues] = useState(initialState);
  const firstFormikRef = useRef();
  const secondFormikRef = useRef();
  const [uploadImage, setUploadImage] = useState([]);
  const [workshift, setWorkshift] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [image, setImage] = useState(JSON.parse(localStorage.getItem('filePath')))
  const handleMultipleUpload = (e) => {
    setMultipleFiles(e.target.files);
  };
  console.log(image)
  const [resume] = useState(
    JSON.parse(localStorage.getItem("editResume"))
  );
  const [resumeTitle, setResumeTitle] = useState(resume.resumeTitle);

  let tempArray = [];

  function chunkArray(myArray, chunk_size) {
    let arrayLength = myArray.length;
    let myChunk;

    for (let index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }

  chunkArray(data, 13);

  let leftside = tempArray[0];
  let rightside = tempArray[1];

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
          type={"third"}
          resumeTitle={resumeTitle}
          firstFormikRef={firstFormikRef}
          secondFormikRef={secondFormikRef}
        />
      </Box>
      {resume !== null ? (
        <>
          <Grid container>
            <Grid item xs={12} sm={5} md={5} lg={4} sx={{ ...styles.introduction }}>
              {/* <input
                type="file"
                multiple
                onChange={(event) => setUploadImage(event.target.files[0])}
              /> */}
              <UploadImage setUploadImage={setUploadImage} uploadImage={" `https://storage.cloud.google.com/cv-medias/" + image[0].filePath} />
              <Formik
                innerRef={firstFormikRef}
                enableReinitialize={true}
                initialValues={{
                  surname: resume?.surname,
                  name: resume?.name,
                  kanaSurname: resume?.kanaSurname,
                  kanaName: resume?.kanaName,
                  post: resume?.position,
                  nationality: resume?.nationality,
                  gender: resume?.gender,
                  birthday: resume.birthday,
                  phone: resume?.phone,
                  eMail: resume?.eMail,
                  address: resume?.address,
                  station: resume?.station,
                  transport: resume?.transport,
                }}
                validationSchema={formValidation}
              >
                {({ values, handleChange, errors }) => (
                  <Box>
                    {leftside &&
                      leftside.map((item, index) => {
                        return (
                          <CopyInput
                            key={index}
                            item={item}
                            resumeFormikRef={firstFormikRef}
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                            value={item.name}
                          />
                        );
                      })}
                  </Box>
                )}
              </Formik>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={8} sx={{ ...styles.fields }}>
              <Formik
                innerRef={secondFormikRef}
                initialValues={{
                  motivation: resume.motivation,
                  workHistory: [...resume.workHistory],
                  industries: [...resume.industries],
                  experiences: [...resume.experiences],
                  languages: [...resume.languages],
                  certifications: [...resume.certifications],
                  awards: [...resume.awards],
                  schools: [...resume.schools],
                  selfPromotion: resume.selfPromotion,
                  skills: [...resume.skills],
                  interests: [...resume.interests],
                  files: [...resume.files],
                  whenStart: resume.whenStart,
                  workValue: "",
                  industryValue: "",
                  skillValue: "",
                  languageValue: "",
                  certificationValue: "",
                  awardValue: "",
                  schoolValue: "",
                  wishesValue: "",
                  interestValue: "",
                  experienceValue: "",
                }}
                validationSchema={formValidation}
              >
                {({ values, handleChange, setFieldValue }) => (
                  <Box>
                    {rightside &&
                      rightside.map((item, index) => {
                        return (
                          <CopyMixInputs
                            key={index}
                            item={item}
                            resumeFormikRef={secondFormikRef}
                            values={values}
                            initialValues={initialValues}
                            setFieldValue={setFieldValue}
                            handleChange={handleChange}
                          />
                        );
                      })}
                    <Typography sx={{ margin: '20px 0' }}>Files:</Typography>
                    <label style={styles.upload}>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleMultipleUpload(e)}
                        style={{ display: 'none' }}
                      />
                      <Box>
                        <AddIcon />
                        <Typography>Upload your file</Typography>
                      </Box>
                    </label>

                    {Array.from(multipleFiles)?.map((file, index) => {
                      return (
                        <UploadedFile file={file} key={index} />
                      )
                    })}

                    <Schedule setWorkshift={setWorkshift} />
                  </Box>
                )}
              </Formik>
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
export default EditResume;
