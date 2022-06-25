import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";
import CreateButton from "../../components/resumes/CreateButton";
import ResumeCard from "../../components/resumes/ResumeCard";
import API from "../../helpers/api";
import { mainColor, greyColor } from "../../helpers/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ color: 'red' }}
    >
      {value === index && <Box sx={{ marginTop: '27px' }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const styles = {
  root: {
    width: "100%",
  },
  container: {
    maxWidth: '1160px',
    margin: '0 auto 40px auto',
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    margin: "0 auto",
    padding: "20px 0px 20px 32px",
    border: '1px solid #ccc',
    minHeight: '450px'
  },
  tab: {
    color: `${greyColor}`,
    textTransform: "inherit",
    padding: '0px',
    marginRight: '20px',
    "&.Mui-selected": {
      color: `${mainColor}`,
      textTransform: "inherit",
      fontWeight: '400',
    },
  }
};

export default function Resumes() {
  const [value, setValue] = useState(0);
  const [resumesData, setResumesData] = useState([]);

  useEffect(() => {
    API.get(`resumes`)
      .then((res) => {
        let data = res.data;
        setResumesData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.container}>
      <Box>
        <Tabs
          textColor="primary"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: `${mainColor}`, },
          }}
        >
          <Tab sx={styles.tab} label="My Resumes" {...a11yProps(0)} />
          <Tab sx={styles.tab} label="Saved Resumes" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={styles.box}>
          <CreateButton />
          {resumesData &&
            resumesData.map((item, index) => {
              return (
                <ResumeCard
                  type={"create"}
                  item={item}
                  key={index}
                  resumesData={resumesData}
                  setResumesData={setResumesData}
                />
              );
            })}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={styles.box}></Box>
      </TabPanel>
    </Box>
  );
}
