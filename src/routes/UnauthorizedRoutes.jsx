import React, { useState } from "react";
import { Route } from 'react-router-dom'
import AcceptLine from "../pages/auth/AcceptLine";
import Signin from '../pages/auth/Signin'
import Signup from '../pages/auth/Signup'
import ViewResume from "../pages/resumes/ViewResume";

export default function UnauthorizedRoutes({ token, setToken }) {
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Route exact path="/">
        <Signup
          user={user}
          setUser={setUser}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </Route>

      <Route path="/signin">
        <Signin
          user={user}
          setUser={setUser}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </Route>

      <Route path="/acceptline">
        <AcceptLine />
      </Route>

      <Route path="/resume/:id">
        <ViewResume/>
      </Route>
    </>
  )
}