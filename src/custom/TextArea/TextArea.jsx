import { Box, Typography } from "@mui/material"

const TextArea = ({ name, value, onChange, title, placeholder }) => {
    return (
        <Box sx={{ marginBottom: '23px' }}>
            <Typography sx={styles.title}>{title}</Typography>
            <textarea
                style={styles.textarea}
                name={name}
                maxLength="100"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Box>

    )
}

const styles = {
    title: {
        marginTop: "12px",
        marginBottom: "7px",
    },
    textarea: {
        border: "1px solid #9C9C9C",
        borderRadius: "4px",
        resize: "none",
        width: "97%",
        height: "100px",
        padding: "10px",
        lineHeight: "20px",
        outlineColor: "#29CC8F",
        marginBottom: "24px",
    },
}

export default TextArea;