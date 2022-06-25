import { Box, Select, MenuItem, Typography } from "@mui/material"

const Dropdown = ({ name, value, onChange, data, text }) => {
    return (
        <Box sx={{ marginBottom: '23px' }}>
            <Typography sx={{fontSize: '12px'}}>{text}</Typography>
            <Select
                value={value}
                onChange={onChange}
                displayEmpty
                name={name}
                sx={{ width: "100%" }}
            >
                {data?.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item.text}>
                            {item.text}
                        </MenuItem>
                    );
                })}
            </Select>
        </Box>

    )
}

export default Dropdown;