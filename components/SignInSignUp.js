"use client";
import { useUserAuth } from "/context/userAuthContext";
import LoginModal from "./SignUp/signin_modal";
import SignupModal from "./SignUp/signup_modal";
import styles from "./SignUp/signup.module.css";

const Signin_signup = () => {
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

export default Signin_signup;