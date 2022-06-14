import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { mainColor } from "../../helpers/colors";

const Navigation = () => {
  let location = useLocation()
  return (
    <Box sx={styles.navigation}>
      {data.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.src}
            className="link"
            style={{ margin: "0 10px" }}
          >
            <Typography
              style={
                location.pathname === `${link.src}`
                  ? {
                    borderBottom: `1px solid ${mainColor}`,
                    color: `${mainColor}`,
                  }
                  : { borderBottom: "1px solid transparent" }
              }
            >
              {link.link}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
};

const data = [
  {
    link: "Resume List",
    src: "/resumes",
  },
  {
    link: "Settings",
    src: "/test",
  },
  {
    link: "Help",
    src: "/help",
  },
];

const styles = {
  navigation: {
    marginLeft: "10px",
    display: "flex",
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
};

export default Navigation;
