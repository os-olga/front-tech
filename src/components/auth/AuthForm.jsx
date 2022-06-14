import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Button, Typography } from "@mui/material";
import InputField from "../../custom/Inputs/InputField";
import SeparatorLine from "../../custom/SeparatorLine/SeparatorLine";
import AuthTitleForm from "../../custom/AuthTitleForm/AuthTitleForm";
import CheckboxIsRememberMe from "./IsRememberMe";
import AuthFooter from "./AuthFooter";
import TwitterLogin from "react-twitter-login";

const AuthForm = ({ label, caption, type, user, setUser, onSubmitForm }) => {
  const [isRememberMe, setIsRememberMe] = useState(false);
  // const [payload, setPayload] = useState(null);
  // const [idToken, setIdToken] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const authHandler = (err, data) => {
    console.log(err, 'ERROR', data, 'DATA');
  }

  return (
    <>
      <Grid item xs={12} sm={12} md={6} sx={{ ...styles.authform }}>
        <Grid sx={styles.fieldGrid}>
          <AuthTitleForm label={label} caption={caption} />

          <form name="form" onSubmit={onSubmitForm}>
            <Box sx={{ marginBottom: "20px" }}>
              <InputField
                type={"text"}
                name={"email"}
                onChange={handleInputChange}
                value={user.email}
                placeholder={"Email"}
              />
            </Box>
            <Box>
              <InputField
                type={"password"}
                name={"password"}
                onChange={handleInputChange}
                value={user.password}
                placeholder={"Password"}
              />
            </Box>
            {type === "signin" && (
              <Link to="/forgot-password" className="link">
                <Typography sx={styles.forgotPassword}>
                  Forgot Password?
                </Typography>
              </Link>
            )}

            <button style={styles.authButton}>
              {type === "signin" ? "Login" : "Sign Up"}
            </button>

            {type === "signin" && (
              <CheckboxIsRememberMe
                isRememberMe={isRememberMe}
                setIsRememberMe={setIsRememberMe}
              />
            )}
          </form>

          <Grid sx={styles.content}>
            <SeparatorLine />

            <TwitterLogin
              authCallback={authHandler}
              consumerKey="LUQ0c0x0X3dIZWlzVmhiYlltN0o6MTpjaQ"
              consumerSecret="yDox-MVUQIJM3vpiRakHinCdXkoo3AgXocL0tX7fTfc64iZ4qZ"
            />


            {/* <Button sx={{ ...styles.button, ...styles.twitButton }}>
              Sign-in with Twitter
            </Button> */}
            {/* <Button
              sx={{ ...styles.button, ...styles.lineButton, marginTop: "20px" }}
            >
              Login with LINE
            </Button> */}

            <AuthFooter type={"dekstop"} />
          </Grid>
        </Grid>
      </Grid>
      <AuthFooter type={"mobile"} />
    </>
  );
};

const styles = {
  flexbox: {
    display: "flex",
  },
  authform: {
    position: "relative",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0px 40px",
    "@media (max-width: 1100px)": {
      padding: "0px 20px",
    },
    "@media (max-width: 940px)": {
      padding: "0px 10px",
    },
    "@media (max-width: 911px)": {
      padding: "0px 10px",
    },
    "@media (max-width: 500px)": {
      padding: "0px 35px",
      width: "100%",
      display: "block",
    },
  },
  authButton: {
    marginTop: "25px",
    width: "100%",
    height: "40px",
    borderRadius: "4px",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    padding: "11px 0",
    letterSpacing: "1px",
    textTransform: "inherit",
    color: "#fff",
    background: "#29CC8F",
    "@media (max-width: 700px)": {
      fontSize: "18px",
    },
    "@media (max-width: 530px)": {
      fontSize: "14px",
      padding: "9px 0",
    },
  },
  fieldGrid: {
    margin: "0 auto",
    width: "90%",
    maxWidth: "460px",
    "@media (max-width: 911px)": {
      width: "80%",
      marginTop: "50px",
    },
    "@media (max-width: 700px)": {
      width: "90%",
      marginTop: "50px",
    },
    "@media (max-width: 500px)": {
      minWidth: "100%",
    },
  },
  content: {
    marginTop: "25px",
    "@media(max-width: 530px)": {
      marginTop: "10px",
    },
  },
  button: {
    width: "100%",
    height: "40px",
    borderRadius: "4px",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    padding: "11px 0",
    letterSpacing: "1px",
    textTransform: "inherit",
    color: "#fff",
    "@media (max-width: 700px)": {
      fontSize: "18px",
    },
    "@media (max-width: 530px)": {
      fontSize: "14px",
      padding: "9px 0",
    },
  },
  loginButton: {
    background: "#29CC8F",
    "&:hover": {
      background: "#29CC8F",
    },
  },
  twitButton: {
    background: "#5B9BE2",
    "&:hover": {
      background: "#5B9BE2",
    },
    "@media (max-width: 700px)": {
      marginTop: "13px",
    },
  },
  lineButton: {
    background: "#00B900",
  },
  policyDisagree: {
    color: "#F68C8D",
    textTransform: "inherit",
    "&:hover": {
      background: "none",
    },
  },
  policyAgree: {
    background: "#29CC8F",
    color: "#fff",
    textTransform: "inherit",
    width: "140px",
    height: "40px",
    "&:hover": {
      background: "#29c68b",
    },
  },
  iframe: {
    height: "85%",
    width: "100%",
    border: "1px solid #EAEAEA",
  },
  forgotPassword: {
    fontWeight: 400,
    letterSpacing: "0.05em",
    color: "#2acc8f",
    display: "block",
    textAlign: "end",
    marginTop: "14px",
    marginBottom: "-6px",
    fontSize: "9px",
  },
};

export default AuthForm;
