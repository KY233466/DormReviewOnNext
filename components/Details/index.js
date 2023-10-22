import { useState } from "react";

import Rating from "@mui/material/Rating";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import Header from "./Header";
import ProCon from "../ProCon";
import Review from "../Review";

import styles from "./details.module.css";

async function Details({
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
  const [displayLeft, setDisplayLeft] = useState(true);

  const res = await getDocs(collection(db, path3));
  const data = res.docs.map((doc) => ({ ...doc.data() }));

  function changeLeft() {
    changeDetail();
    setDisplayLeft(!displayLeft);
  }

  return (
    <div className={styles.container}>
      {displayLeft && (
        <div className={styles.leftContainer}>
          <Header key={dormName} title={dormName} location={location} />
          <img alt="dorm" src={pic} className={styles.dormPic} />
          <div className={styles.info}>
            <div className={styles.sum}>
              <div className={styles.data}>
                {data?.map((element) => {
                  return (
                    <div key={element.nReviews} className={styles.reviewData}>
                      {element.Rate.toFixed(1)}
                      <Rating
                        key="{element}"
                        index={element.index}
                        name="read-only"
                        value={element.Rate}
                        precision={0.5}
                        readOnly
                      />
                      {element.nReviews} reviews
                    </div>
                  );
                })}
              </div>
              <div> {available} </div>
              <div> {bed_laundry} </div>
              <div style={{ fontSize: "14px" }}> {rooms} </div>
            </div>

            <hr />
            <ProCon key={pro} pro={pro} con={con} />
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
            <Review path={path} path2={path2} path3={path3} />
          </div>
        </div>
      )}
      <div className={styles.btn} onClick={() => changeLeft()}>
        {displayLeft ? (
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
        )}
      </div>
    </div>
  );
}

export default Details;
