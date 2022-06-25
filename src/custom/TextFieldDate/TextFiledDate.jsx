import { Box, TextField, Typography } from "@mui/material"

const TextFieldDate = ({ name, value, onChange, width, text }) => {
    return (
        <Box sx={{ marginBottom: '23px' }}>
            {text &&  <Typography sx={{marginBottom: "7px", fontSize: '12px'}}>{text}</Typography>}
           
            <TextField
                type="date"
                name={name}
                value={value}
                onChange={onChange}
                format={"YYYY/MM/DD"}
                sx={{ width: `${width}` }}
            />
        </Box>
    )
}

export default TextFieldDate;