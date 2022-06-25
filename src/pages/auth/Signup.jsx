import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import AuthForm from "../../components/auth/AuthForm";
import AuthSidebar from "../../components/auth/AuthSidebar";
import API from "../../helpers/api";
import { styles } from "./auth.styles";
import Footer from "../../components/footer/Footer";

const Signup = (props) => {
  let navigate = useHistory();

  async function singup(e) {
    e.preventDefault();
    if (props.user.email && props.user.password) {
      const form = {
        email: props.user.email,
        password: props.user.password,
      };
      API.post(`auth/signup`, form).then((res) => {
        let user = res.data.user;
        let token = res.data.accessToken;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate.push("/resumes");
      });
    }
  }
  return (
    <Box sx={styles.section}>
      <Grid container sx={styles.container}>
        <CornerImage />
        <AuthSidebar />
        <AuthForm
          label={"Get yourself started"}
          caption={"Sign Up"}
          type={"signup"}
          user={props.user}
          setUser={props.setUser}
          onSubmitForm={singup}
        />
      </Grid>
      <Footer/>
    </Box>
  );
};

const CornerImage = () => {
  return <img src="../../auth/animal.png" alt="" style={styles.image} />;
};

export default Signup;
