import { Box } from "@mui/material";
import { forwardRef } from "react";
import React, {useState, useImperativeHandle} from 'react'

const ScheduleLine = forwardRef(({ start, end, top, left, handleMouseUp }, ref) => {
    const [width, setWidth] = useState(13)
    useImperativeHandle(ref, () => ({
        changeWidth: () => {
            setWidth(width+13)
        }
      }));

    return (
        <Box sx={{
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            height: '25px',
            width: `${width}px`,
            background: 'pink',
            zIndex: '3'
        }}
            onMouseUp={handleMouseUp}
            // onMouseLeave={handleMouseUp}
            ref={ref}
        >
        </Box>
    )
})
export default ScheduleLine;