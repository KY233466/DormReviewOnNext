import { useState } from "react";
import styles from "./signup.module.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useMediaQuery from "@mui/material/useMediaQuery";
import Signup from "./signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "18px",
  p: 4,
  display: "flex",
  alignItems: "center",
};

const mobileStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "18px",
  p: 4,
  display: "flex",
  alignItems: "center",
};

const SignUpModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const matches = useMediaQuery("(max-width:899px)");

  return (
    <div>
      <button
        className={matches ? styles.mobileClick : styles.click}
        onClick={handleOpen}
      >
        Sign up
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={matches ? mobileStyle : style}>
          <Signup />
        </Box>
      </Modal>
    </div>
  );
};

export default SignUpModal;
