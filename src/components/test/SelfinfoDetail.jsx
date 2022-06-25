import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { formValidation } from '../resumes/ValidationAndInitialValues';
import InputText from '../../custom/Inputs/InputSelfino';
import { Box } from '@mui/material';
import SelectMenu from '../../custom/Dropdown/Dropdown';
import TextFieldDate from '../../custom/TextFieldDate/TextFiledDate';
import UploadImage from '../../custom/Uploads/UploadImage';

const Self = ({ uploadImage, setUploadImage, selfFormikRef }) => {

    const [nationality] = useState([
        { text: "日本" },
        { text: "アイスランド" },
        { text: "アイルランド" },
        { text: "アゼルバイジャン" },
        { text: "アフガニスタン" },
        { text: "アラブ首長国連邦" },
        { text: "アルジェリア" },
        { text: "アルゼンチン" },
        { text: "アルバニア" },
        { text: "アルメニア" },
    ]);

    const gender = [{ text: 'Male' }, { text: 'Female' }, { text: 'Other' }]

    return (
        <Formik
            innerRef={selfFormikRef}
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
            {({ values, errors, touched, handleChange, handleBlur, }) => (
                <Form sx={{ display: 'block', }}>
                    <UploadImage uploadImage={uploadImage} setUploadImage={setUploadImage} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <InputText
                            name={"surname"}
                            type={"text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.surname}
                            errors={errors.surname}
                            touched={touched.surname}
                            text={'Surname'}
                            width={'auto'}
                        />

                        <InputText
                            name={"name"}
                            type={"text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            errors={errors.name}
                            touched={touched.name}
                            text={'Name'}
                            width={'auto'}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <InputText
                            name={"kanaSurname"}
                            type={"text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.kanaSurname}
                            errors={errors.kanaSurname}
                            touched={touched.kanaSurname}
                            text={'Kana Surname'}
                            placeholder={'Ex : タナカ'}
                            width={'auto'}
                        />

                        <InputText
                            name={"kanaName"}
                            type={"text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.kanaName}
                            errors={errors.kanaName}
                            touched={touched.kanaName}
                            text={'Kana Name'}
                            placeholder={'Ex : タロウ'}
                            width={'auto'}
                        />
                    </Box>

                    <InputText
                        name={"position"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.position}
                        errors={errors.position}
                        touched={touched.position}
                        text={'Position at Work'}
                        placeholder={'Ex : Floor Staff'}
                        width={'96%'}
                    />

                    <SelectMenu
                        name={"nationality"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nationality}
                        errors={errors.nationality}
                        touched={touched.nationality}
                        text={'Nationality'}
                        data={nationality}
                    />

                    <SelectMenu
                        name={"gender"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                        errors={errors.gender}
                        touched={touched.gender}
                        text={'Gender'}
                        data={gender}
                    />

                    <TextFieldDate
                        name={"birthday"}
                        onBlur={handleBlur}
                        value={values.birthday}
                        errors={errors.birthday}
                        touched={touched.birthday}
                        text={'Birthday'}
                        width={'100%'}
                    />

                    <InputText
                        name={"phone"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        errors={errors.phone}
                        touched={touched.phone}
                        text={'Phone Number'}
                        placeholder={'Ex : 080-0000-0000'}
                        width={'96%'}
                    />

                    <InputText
                        name={"eMail"}
                        type={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.eMail}
                        errors={errors.eMail}
                        touched={touched.eMail}
                        text={'E-mail'}
                        placeholder={'Ex : name@example.com'}
                        width={'96%'}
                    />

                    <InputText
                        name={"address"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        errors={errors.address}
                        touched={touched.address}
                        text={'Address'}
                        width={'96%'}
                    />

                    <InputText
                        name={"busStation"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.busStation}
                        errors={errors.busStation}
                        touched={touched.busStation}
                        text={'Closest Train/Bus Station'}
                        width={'96%'}
                    />

                    <InputText
                        name={"transport"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.transport}
                        errors={errors.transport}
                        touched={touched.transport}
                        text={'Transport'}
                        width={'96%'}
                    />

                </Form>
            )}
        </Formik>
    )
}

export default Self;