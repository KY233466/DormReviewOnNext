// import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RatingDisplay from "../../RatingDisplay/RatingDisplay";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

import styles from "../details.module.css";

async function getData(path3) {
  try {
    const data = await getDocs(collection(db, path3));
    return data.docs.map((doc) => ({ ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

async function LeftContainer({
  available,
  bed_laundry,
  rooms,
  moreInfo,
  description,
  path3,
  pic,
}) {
  let ratingData = [];
  ratingData = await getData(path3);
  //   const isMobile = useMediaQuery("(max-width:860px)");

  return (
    <div className={styles.leftContainer}>
      {/* <Header key={dormName} title={dormName} location={location} /> */}
      <img alt="dorm" src={pic} className={styles.dormPic} />
      <div className={styles.info}>
        <div className={styles.sum}>
          <div className={styles.data}>
            <RatingDisplay data={ratingData} />
          </div>
          <div> {available} </div>
          <div> {bed_laundry} </div>
          <div style={{ fontSize: "14px" }}> {rooms} </div>
        </div>

        <hr />
        {/* <ProCon key={pro} pro={pro} con={con} /> */}
        <a
          className={styles.link}
          href={moreInfo}
          target={"_blank"}
          rel="noreferrer"
        >
          View more about room, bathroom, and amenities
        </a>
        <hr />
        <div className={styles.text}>
          <div style={{ fontSize: "14px" }}> {description} </div>
        </div>
        <hr />
        {/* <Review path={path} path2={path2} path3={path3} /> */}
      </div>
    </div>
  );
}

export default LeftContainer;
