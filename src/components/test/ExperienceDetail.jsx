import React from 'react';
import { Formik, Form } from 'formik';
import { formValidation } from '../resumes/ValidationAndInitialValues';
import TextArea from '../../custom/TextArea/TextArea';
import AutoInput from '../../custom/Inputs/AutoInput';
import TextFieldDate from '../../custom/TextFieldDate/TextFiledDate'
import UploadFile from '../../custom/Uploads/UploadFile';
import Schedule from '../resumes/schedule/Schedule';

const Detail = ({ multipleFiles, upload, detailFormikRef, setWorkshift }) => {
    return (
        <Formik
            innerRef={detailFormikRef}
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
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                <Form>
                    <TextArea
                        name={"motivation"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.motivation}
                        errors={errors.motivation}
                        touched={touched.motivation}
                        title={"Motivation"}
                        placeholder={"I applied because"}
                    />

                    <AutoInput
                        name={"workHistory"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values}
                        errors={errors}
                        touched={touched}
                        title={"Work history"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    {/* <AutoInput
                        name={"industries"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.industries}
                        errors={errors.industries}
                        touched={touched.industries}
                        title={"Industries"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <AutoInput
                        name={"experiences"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.experiences}
                        errors={errors.experiences}
                        touched={touched.experiences}
                        title={"Experiences"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <AutoInput
                        name={"certifications"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.certifications}
                        errors={errors.certifications}
                        touched={touched.certifications}
                        title={"Certifications"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <AutoInput
                        name={"awards"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.awards}
                        errors={errors.awards}
                        touched={touched.awards}
                        title={"Awards"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <AutoInput
                        name={"schools"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.schools}
                        errors={errors.schools}
                        touched={touched.schools}
                        title={"School"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <TextArea
                        name={"selfPromotion"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.selfPromotion}
                        errors={errors.selfPromotion}
                        touched={touched.selfPromotion}
                        title={"Self promotion"}
                        values={values}
                        placeholder={"Why I’m the best fit for this job..."}
                    />

                    <AutoInput
                        name={"skills"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.skills}
                        errors={errors.skills}
                        touched={touched.skills}
                        title={"Skills"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <AutoInput
                        name={"interests"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.interests}
                        errors={errors.interests}
                        touched={touched.interests}
                        title={"Interests"}
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <UploadFile multipleFiles={multipleFiles} upload={upload} />

                    <TextFieldDate
                        name={"whenStart"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.whenStart}
                        errors={errors.whenStart}
                        touched={touched.whenStart}
                        setFieldValue={setFieldValue}
                    />

                    <Schedule setWorkshift={setWorkshift} /> */}

                </Form>
            )}
        </Formik>
    )
}

export default Detail;