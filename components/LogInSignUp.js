"use client";
import { useUserAuth } from "/context/userAuthContext";
import LoginModal from "./signUp/LogInModal";
import SignupModal from "./signUp/SignUpModal";

import styles from "./signUp/signup.module.css";

const LogInSignUp = () => {
  const { user } = useUserAuth();

  return (
    <div className={styles.signinsignup}>
      {user ? null : (
        <div className={styles.subsectionM}>
          <LoginModal />
          <SignupModal />
        </div>
      )}
    </div>
  );
};

export default LogInSignUp;
