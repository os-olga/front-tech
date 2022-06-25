import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import AuthorizedRoutes from "./AuthorizedRoutes";
import UnauthorizedRoutes from "./UnauthorizedRoutes";
import API from "../helpers/api";

const Routes = () => {
    const [token, setToken] = useState(null || localStorage.getItem("accessToken"))
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        API.get(`/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                setUserData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Box sx={styles.container}>
            <UnauthorizedRoutes token={token} setToken={setToken} />
            <AuthorizedRoutes userData={userData} token={token} />
        </Box>
    )
}

const styles = {
    footerSection: {
        "@media (max-width: 900px)": {
            display: "none",
        },
    },
};

export default Routes;