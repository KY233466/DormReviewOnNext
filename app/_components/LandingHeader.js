import ProfileAvatar from "/components/ProfileAvatar";
import LogInSignUp from "/components/LogInSignUp";

import styles from "./landingHeader.module.css";

function LandingHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.bold}> DormReview </div>
      <div className={styles.headerR}>
        <LogInSignUp />
        <ProfileAvatar />
      </div>
    </div>
  );
}

export default LandingHeader;
