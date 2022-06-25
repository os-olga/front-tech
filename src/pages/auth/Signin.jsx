import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import AuthForm from "../../components/auth/AuthForm";
import AuthSidebar from "../../components/auth/AuthSidebar";
import AuthFooter from "../../components/auth/AuthFooter";
import Footer from "../../components/footer/Footer";
import API from "../../helpers/api";
import { styles } from "./auth.styles";

const Signin = (props) => {
  let navigate = useHistory();

  async function singin(e) {
    e.preventDefault();
    props.setSubmitted(true);
    if (props.user.email && props.user.password) {
      const form = {
        email: props.user.email,
        password: props.user.password,
      };
      API.post(`auth/signin`, form)
        .then((res) => {
          let user = res.config.data;
          let token = res.data.accessToken;
          localStorage.setItem("user", user);
          localStorage.setItem("accessToken", token);
          navigate.push("/resumes");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <Box sx={styles.section}>
      <Grid container sx={styles.container}>
        <CornerImage />
        <AuthSidebar />
        <AuthForm
          label={"Welcome back!"}
          caption={"Login to your account"}
          type={"signin"}
          user={props.user}
          setUser={props.setUser}
          setSubmitted={props.setSubmitted}
          onSubmitForm={singin}
        />
      </Grid>
      <Footer />
    </Box>
  );
};

const CornerImage = () => {
  return <img src="../../auth/animal.png" alt="" style={styles.image} />;
};

export default Signin;
