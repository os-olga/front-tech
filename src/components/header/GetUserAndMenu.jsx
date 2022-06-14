import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
} from "@mui/material";
import API from "../../helpers/api";

const UserProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    API.get(`/auth/me`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(userData, "user data");

  let tmp = `${userData.email}`;
  let getMail = tmp.split("@");
  let userEmail = getMail[0];

  return (
    <Box onClick={() => setShowMenu(!showMenu)}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={styles.title}>
          Welcome,
          {userEmail ? userEmail : null}
        </Typography>
        <img src="../../Icon.png" alt="" />
      </Box>
      {showMenu && <ProfileMenu />}
    </Box>
  );
};

const ProfileMenu = () => {
  let navigate = useHistory();
  const logout = () => {
    window.localStorage.removeItem("accessToken");
    navigate.push("/signin");
  };
  return (
    <Paper
      sx={{
        width: 120,
        maxWidth: "100%",
        position: "absolute",
        top: "40px",
        right: "10px",
        zIndex: "9999",
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={logout}>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
const styles = {
  title: {
    marginRight: "10px",
  },
};
export default UserProfile;
