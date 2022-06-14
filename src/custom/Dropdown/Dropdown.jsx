import { Box, Select, MenuItem } from "@mui/material"

const Dropdown = ({ name, value, onChange, data }) => {
    return (
        <Box sx={{ marginBottom: '23px' }}>
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