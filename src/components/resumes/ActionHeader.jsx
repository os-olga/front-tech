import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Box, Button, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled, alpha } from "@mui/material/styles";
import { Menu } from "@mui/material";
import API from "../../helpers/api";
import ActionButton from "../../custom/Button/Button";
import axios from "axios";

const ActionHeader = ({
  type,
  firstFormikRef,
  secondFormikRef,
  resumeTitle,
  resumeId,
  uploadImage,
  multipleFiles,
  workshift,
}) => {
  let navigate = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const open = Boolean(anchorEl);

  let location = useLocation();
  let id = location.pathname.split("/")[2];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const accessToken = localStorage.getItem("accessToken");

  const uploadFile = async (uploadImage, resumeId) => {
    const formData = new FormData();
    formData.append("image", uploadImage);
    formData.append("resumeId", resumeId);

    await axios
      .post("http://localhost:4040/media", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          type: "formData",
        },
      })
      .then((res) => {
        navigate.push("/resumes");
      })
      .catch((err) => console.log(err));
  };

  const saveResume = async () => {
    let sendData = {
      ...firstFormikRef.current.values,
      ...secondFormikRef.current.values,
      image: "qewe",
      resumeTitle: resumeTitle,
      status: "saved",
      workshift: workshift,
    };
    console.log(firstFormikRef.current.values)
    console.log(secondFormikRef.current.values)
    console.log(uploadImage)
    const createResume = await API.post(`resumes`, sendData).catch((err) =>
      console.log(err)
    );

    uploadFile(uploadImage, createResume.data._id);
    for (let i = 0; i < multipleFiles.length; i++) {
      uploadFile(multipleFiles[i], createResume.data._id);
    }
  };

  const publishResume = async () => {
    let sendData = {
      ...firstFormikRef.current.values,
      ...secondFormikRef.current.values,
      image: "qewe",
      resumeTitle: resumeTitle,
      status: "published",
      workshift: workshift,
    };
    console.log(firstFormikRef.current.values)
    console.log(secondFormikRef.current.values)
    console.log(uploadImage)
    const createResume = await API.post(`resumes`, sendData).catch((err) =>
      console.log(err)
    );

    uploadFile(uploadImage, createResume.data._id);
    for (let i = 0; i < multipleFiles.length; i++) {
      uploadFile(multipleFiles[i], createResume.data._id);
    }
  };

  const openEditResume = async () => {
    API.get(`/resumes/${resumeId}`)
      .then((response) => {
        localStorage.setItem("editResume", JSON.stringify(response.data));
        navigate.push(`/edit-resume/${resumeId}`);
      })
      .catch((error) => console.log(error));
    API.get(`/media/${resumeId}`)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem("filePath", JSON.stringify(response.data));
        navigate.push(`/edit-resume/${resumeId}`);
      })
      .catch((error) => console.log(error));
  };

  const generate = () => {
    API.get(`/generate/${resumeId}`)
      .then((response) => {
        let file = new Blob([response.data], { type: "application/pdf" });
        setPdfFile(URL.createObjectURL(file));
      })
      .catch((error) => console.log(error));
  };

  const editResume = async () => {
    let sendData = {
      ...firstFormikRef.current.values,
      ...secondFormikRef.current.values,
      resumeTitle: resumeTitle,
      status: "saved",
      workshift: workshift,
    };

    await API.put(`resumes/${id}`, sendData).then((res) => {
      console.log(res)
      navigate.push("/resumes")
    }).catch((err) => console.log(err))
  }

  const publishEditResume = () => {
    console.log(firstFormikRef.current.values)
  }

  return (
    <>
      <Box sx={styles.box}>
        {type === 'first' && (
          <>
            <ActionButton text={"Save changes"} func={saveResume} />
            <ActionButton text={"Publish"} func={publishResume} />
          </>
        )}

        {type === 'second' && (
          <>
            <ActionButton text={"EDIT"} func={openEditResume} />
            <ActionButton text={"GENERATE"} func={generate} />
          </>
        )}

        {type === 'third' && (
          <>
            <ActionButton text={"Save changes"} func={editResume} />
            <ActionButton text={"Publish"} func={publishEditResume} />
          </>
        )}
      </Box>


      <Box sx={styles.mobileView}>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          onClick={handleClick}
          sx={{ border: "1px solid #29CC8F", color: "#29CC8F" }}
        >
          <MoreHorizIcon />
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              saveResume();
              handleClose();
            }}
            disableRipple
          >
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Download pdf
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Share
          </MenuItem>
        </StyledMenu>
      </Box>
    </>
  );
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: "60px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const styles = {
  firstType: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
  },
  secondType: {
    display: "flex",
    justifyContent: "end",
    marginBottom: "10px",
    "@media (max-width: 850px)": {
      display: "none",
    },
  },
  box: {
    display: "flex",
    "@media (max-width: 850px)": {
      display: "none",
    },
  },
  mobileView: {
    textAlign: "right",
    "@media (min-width: 851px)": {
      display: "none",
    },
  },
  buttonGoBack: {
    display: "flex",
    alignItems: "center",
    color: "#000",
    textTransform: "inherit",
  },
  thirdType: {},
  buttonThirdType: {
    width: "100%",
    textTransform: "none",
    height: "40px",
    marginBottom: "20px",
  },
};

export default ActionHeader;
