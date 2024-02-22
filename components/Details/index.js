// import { useState } from "react";

import Rating from "@mui/material/Rating";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

// import Header from "./Header";
import ProCon from "../ProCon";
import LeftContainer from "./LeftContainer";
// import Review from "../Review";
import RatingDisplay from "../RatingDisplay/RatingDisplay";

import styles from "./details.module.css";


// async function getData(path3) {
//   try {
//     const data = await getDocs(collection(db, path3));
//     return data.docs.map((doc) => ({ ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching documents:", error);
//   }
// }

function Details({
  title,
  path,
  path2,
  path3,
  available,
  bed_laundry,
  rooms,
  moreInfo,
  description,
  location,
  pic,
  pro,
  con,
  changeDetail,
}) {
  const dormName = title;

  return (
    <div className={styles.container}>
      <LeftContainer
        // available={available}
        // bed_laundry={bed_laundry}
        // rooms={rooms}
        // moreInfo={moreInfo}
        // description={description}
        path3={path3}
        // pic={pic}
      />
      {/* {displayLeft && ( */}

      {/* )} */}
      {/* <div className={styles.btn} onClick={() => changeLeft()}> */}
      {/* {displayLeft ? (
          <img
            alt=""
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.img}
          ></img>
        ) : (
          <img
            alt=""
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.imgR}
          ></img>
        )} */}
      {/* </div> */}
    </div>
  );
}

export default Details;
