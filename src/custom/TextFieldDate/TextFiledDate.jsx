import { Box, TextField } from "@mui/material"

const TextFieldDate = ({ name, value, onChange, }) => {
    return (
        <Box sx={{ marginBottom: '23px' }}>
            <TextField
                type="date"
                name={name}
                value={value}
                onChange={onChange}
                format={"YYYY/MM/DD"}
                sx={{ width: "100%" }}
            />
        </Box>

    )
}

export default TextFieldDate;