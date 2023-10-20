import SignInSignUp from "/components/SignInSignup";
import ProfileAvatar from "/components/ProfileAvatar";

import styles from "./landingHeader.module.css";

function LandingHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.bold}> DormReview </div>
      <div className={styles.headerR}>
        <SignInSignUp />
        <ProfileAvatar />
      </div>
    </div>
  );
}

export default LandingHeader;
