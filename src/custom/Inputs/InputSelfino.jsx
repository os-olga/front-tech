import { Box } from "@mui/material"
import { ErrorMessage } from 'formik';

const InputText = ({ name, type, value, placeholder, onChange, onBlur, errors, touched, helperText, error }) => {
    console.log(value, 'value')
    return (
        <Box>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                helperText={helperText}
                error={error}
                style={{
                    ...styles.input,
                }}
            />
            <ErrorMessage name={name} component="div" style={{ background: 'green', color: '#fff' }} />
        </Box>
    )
}

const styles = {
    input: {
        border: "1px solid #9C9C9C",
        borderRadius: "5px",
        height: "40px",
        paddingLeft: "10px",
        width: "96%",
        marginBottom: "23px",
    },
}

export default InputText;