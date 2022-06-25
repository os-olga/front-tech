import { Box, Typography } from "@mui/material"
import { ErrorMessage } from 'formik';
import { mainColor } from "../../helpers/colors";

const InputText = ({ name, type, value, placeholder, onChange, onBlur, helperText, error, width, text}) => {
    return (
        <Box sx={{position: 'relative', display: 'block'}}>
            <Typography sx={{fontSize: '12px'}}>{text}</Typography>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder || null}
                onBlur={onBlur}
                helperText={helperText}
                error={error}
                style={{
                    ...styles.input,
                    width: `${width}`,
                }}
            />
            <ErrorMessage name={name} component="div" style={{ position: 'absolute', top: '30px', left: '-10px', background: 'rgba(0, 0, 0, 0.9)', padding: '16px 30px', color: '#fff', zIndex: '3'  }} />
        </Box>
    )
}

const styles = {
    input: {
        border: "1px solid #9C9C9C",
        borderRadius: "5px",
        height: "40px",
        paddingLeft: "10px",
        marginBottom: "23px",
        outlineColor: `${mainColor}`
    },
}

export default InputText;