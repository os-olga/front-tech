import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { dangerColor } from "../../helpers/colors";
import Modal from "../../custom/Modal/Modal";
import API from "../../helpers/api";
import ToastNotification from "../../custom/ToastNotification/ToastNotification";

const ResumeCard = ({ item, type, resumesData, setResumesData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeResume = (resumeId) => {
    API.delete(`resumes/` + resumeId)
      .then((res) => {
        setIsOpen(false);
        setResumesData(resumesData.filter((item) => item._id !== resumeId));
        return <ToastNotification text={`${resumeId} deleted`} value={true} />;
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Box>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 400, marginBottom: "30px" }}
          >
            Delete Resume
          </Typography>
          <Typography
            sx={{ fontSize: "14px", lineHeight: "20px", fontWeight: 400 }}
          >
            "{item.resumeTitle}" will be permanently deleted.
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "end", marginTop: "30px" }}
          >
            <Button
              sx={{
                border: `1px solid ${dangerColor}`,
                color: `${dangerColor}`,
                marginRight: "16px",
                "&:hover": { background: "none" },
              }}
              onClick={() => setIsOpen(false)}
            >
              No
            </Button>
            <Button
              sx={{
                background: `${dangerColor}`,
                color: "#fff",
                "&:hover": { background: `${dangerColor}` },
              }}
              onClick={() => removeResume(item._id)}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={styles.cardsItem}>
        <img
          src="../../actionIcon/delete.png"
          alt="remove"
          style={styles.deleteButton}
          onClick={() => setIsOpen(true)}
        />
        <Link className="link" to={`/resume/${item._id}`}>
          <Box
            sx={{
              ...styles.card,
              justifyContent: "space-between",
              paddingTop: "28px",
              border: "1px solid #29CC8F",
            }}
          >
            {item.status && (
              <Box
                sx={
                  item.status === "saved" ? { display: "none" } : styles.status
                }
              >
                {item.status}
              </Box>
            )}

            <Typography
              sx={{
                fontSize: "14px",
                padding: "0 15px",
                fontWeight: "400",
              }}
            >
              {item.resumeTitle}
            </Typography>
            <Box sx={{ ...styles.detail }}>
              <Typography sx={styles.text}>
                <b>Last edit:</b> YYYY/MM/DD {item.lastEdit}
              </Typography>
              <Typography sx={styles.text}>
                <b>Created:</b> YYYY/MM/DD {item.created}
              </Typography>

              <Box sx={styles.actionBox}>
                <img
                  src="../../actionIcon/edit.png"
                  alt="edit"
                  style={{ cursor: "pointer", marginRight: "10px" }}
                />
                <img
                  src="../../actionIcon/copy.png"
                  alt="copy"
                  style={{ cursor: "pointer", marginRight: "10px" }}
                />
                <img
                  src="../../../actionIcon/download.png"
                  alt="download"
                  style={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    </>
  );
};

const styles = {
  cardsItem: {
    position: "relative",
    display: "flex",
    padding: "0.50rem 0rem",
    marginBottom: "1rem",
    marginRight: "24px",
    height: "164px",
    "@media (max-width: 450px)": {
      margin: "0 auto",
    },
  },
  card: {
    position: "relative",
    width: "132px",
    height: "137px",
    backgroundColor: "#ffffff",
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  status: {
    position: "absolute",
    left: "0px",
    top: "6px",
    background: "#29CC8F",
    color: "#fff",
    fontSize: "9px",
    fontWeight: "700",
    padding: "3px 7px",
    textTransform: "uppercase",
    borderRadius: "0px 2px 2px 0px",
  },
  deleteButton: {
    cursor: "pointer",
    position: "absolute",
    right: "15px",
    top: "16px",
    zIndex: "100",
    width: "12px",
    height: "16px",
    color: "#F68C8D",
  },
  detail: {
    width: "100%",
    height: "60%",
    display: "flex",
    alignItems: "end",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  actionBox: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: "10px",
  },
  text: {
    fontSize: "9px",
    marginRight: "6px",
  },
  // downloadImage: {
  //   width: "100%",
  //   height: "auto",
  //   cursor: "pointer",
  // },
  // icon: {
  //   width: "36px",
  //   height: "40px",
  //   cursor: "pointer",
  //   display: "block",
  //   padding: "10px",
  //   transform: "rotate(45deg)",
  // },
  // actionBox: {
  //   display: "flex",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   padding: "8px 0px",
  // },

  // title: {
  //   fontFamily: "Roboto-Light",
  //   fontSize: "14px",
  //   lineHeight: "14px",
  //   color: "#29CC8F",
  // },
  // menuButton: {
  //   color: "#CCCCCC",
  //   minWidth: "5px",
  //   minHeight: "5px",
  //   width: "30px",
  // },
  // menuIcon: {
  //   width: "15px",
  //   marginRight: "13px",
  //   textAlign: "center",
  // },
};

export default ResumeCard;
