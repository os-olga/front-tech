import React, { useState, useEffect } from "react";
import { Box, createTheme, ThemeProvider, Grid } from "@mui/material";
import API from "./helpers/api";
import { Switch, Route, } from "react-router-dom";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Resumes from "./pages/resumes/Resumes";
import ViewResume from "./pages/resumes/ViewResume";
import EditResume from "./pages/resumes/EditResume";
import CreateResume from "./pages/resumes/CreateResume";
import PdfResume from "./pages/resumes/PdfResume";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  ".MuiInputBase-input-MuiOutlinedInput-input": {
    height: "1em",
  },
});

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    API.get(`/auth/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ fontFamily: "Roboto" }}>
        {!accessToken ? (
          <Box sx={{ width: "100%", margin: "0 auto" }}>
            <Switch>
              <Route
                path="/"
              >
                <Signup
                  user={user}
                  setUser={setUser}
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                />
              </Route>
              <Route
                path="/signin"
              ><Signin
                  user={user}
                  setUser={setUser}
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                />
              </Route>
            </Switch>

            <Grid sx={styles.footerSection}>
              <Footer />
            </Grid>
          </Box>
        ) : (
            <>
              <Header />
              <Box sx={styles.container}>
                <Switch>
                  <Route
                    path="/resumes"
                  >
                    <Resumes userData={userData} />
                  </Route>
                  <Route path="/resume/:id">
                    <ViewResume />
                  </Route>
                  <Route path="/create-resume">
                    <CreateResume />
                  </Route>
                  <Route path="/edit-resume/:id">
                    <EditResume />
                  </Route>
                  <Route path="/test">
                    <PdfResume />
                  </Route>
                </Switch>
              </Box>
            </>
          )}
      </Box>
    </ThemeProvider >
  );
}

const styles = {
  container: {
    maxWidth: "1440px",
    padding: "0px 38px",
    margin: "0 auto",
    "@media (max-width: 900px)": {
      padding: "0px 24px",
    },
    "@media (max-width: 490px)": {
      width: "100%",
      padding: "0px 12px",
    },
  },
  footerSection: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
};

export default App;
