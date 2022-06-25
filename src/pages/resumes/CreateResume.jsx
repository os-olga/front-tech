import React, { useState, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ActionHeader from "../../components/resumes/ActionHeader";
import {
  initialState,
  formValidation,
} from "../../components/resumes/ValidationAndInitialValues";
import { Formik } from "formik";
import InputInformation from "../../components/resumes/InputInformation";
import MixInputsField from "../../components/resumes/MixInputsField";
import Schedule from "../../components/resumes/schedule/Schedule";
import { data } from "../../helpers/data";
import AddIcon from "@mui/icons-material/Add";
import { greyColor } from '../../helpers/colors'
import UploadImage from "../../custom/Uploads/UploadImage";
import UploadedFile from "../../custom/UploadedFile/UploadedFile";

const CreateResume = () => {
  const [initialValues, setInitialValues] = useState(initialState);
  const firstFormikRef = useRef();
  const secondFormikRef = useRef();

  const [resumeTitle, setResumeTitle] = useState("");
  const [workshift, setWorkshift] = useState(null);

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

  const [uploadImage, setUploadImage] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const handleMultipleUpload = (e) => {
    setMultipleFiles(e.target.files);
  };

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
          firstFormikRef={firstFormikRef}
          secondFormikRef={secondFormikRef}
          uploadImage={uploadImage}
          multipleFiles={multipleFiles}
          workshift={workshift}
        />
      </Box>

      <Grid container>
        <Grid item xs={12} sm={5} md={5} lg={4} sx={{ ...styles.introduction }}>
          <UploadImage setUploadImage={setUploadImage} uploadImage={uploadImage} />

          <Formik
            innerRef={firstFormikRef}
            initialValues={{
              surname: "",
              name: "",
              kanaSurname: "",
              kanaName: "",
              position: "",
              nationality: "",
              gender: "",
              birthday: new Date(),
              phone: "",
              eMail: "",
              address: "",
              busStation: "",
              transport: "",
            }}
            validationSchema={formValidation}
          >
            {({ values, handleChange, errors, touched }) => (
              <Box>
                {leftside &&
                  leftside.map((item, index) => {
                    return (
                      <InputInformation
                        key={index}
                        item={item}
                        resumeFormikRef={firstFormikRef}
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        touched={touched}
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
              motivation: "",
              workHistory: [],
              industries: [],
              experiences: [],
              languages: [],
              certifications: [],
              awards: [],
              schools: [],
              selfPromotion: "",
              skills: [],
              interests: [],
              whenStart: "",

              workValue: "",
              industryValue: "",
              experienceValue: "",
              languageValue: "",
              certificationValue: "",
              awardValue: "",
              schoolValue: "",
              skillValue: "",
              interestValue: "",
            }}
            validationSchema={formValidation}
          >
            {({ values, handleChange, errors, push, setFieldValue }) => (
              <Box>
                {rightside &&
                  rightside.map((item, index) => {
                    return (
                      <MixInputsField
                        key={index}
                        item={item}
                        resumeFormikRef={secondFormikRef}
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        setInitialValues={setInitialValues}
                        initialValues={initialValues}
                        push={push}
                        value={item.name}
                        setFieldValue={setFieldValue}
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
                {console.log(multipleFiles)}

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
    </Box>
  );
};

const styles = {
  container: {
    width: "966px",
    margin: "0 auto",
    position: "relative",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  introduction: {
    width: '333px',
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
export default CreateResume;
