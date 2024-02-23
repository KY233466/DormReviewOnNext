// "use client";
import { useState } from "react";
import LeftContainer from "./LeftContainer";

import Content from "./Content";

import styles from "./details.module.css";

function Details({
  dormName,
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
  fetchReviews = true,
  altRatingDisplayBlock,
  ratingData,
  ratingDormData,
  ratingRoomData,
  isMobile,
  altReviewBlock,
}) {
  const [displayLeft, setDisplayLeft] = useState(true);

  function changeLeft() {
    changeDetail();
    setDisplayLeft(!displayLeft);
  }

  return (
    <div className={styles.container}>
      {displayLeft && (
        <div className={styles.leftContainer}>
          <Content
            dormName={dormName}
            title={title}
            location={location}
            pic={pic}
            altRatingDisplayBlock={altRatingDisplayBlock}
            available={available}
            bed_laundry={bed_laundry}
            path={path}
            path2={path2}
            path3={path3}
            rooms={rooms}
            pro={pro}
            con={con}
            moreInfo={moreInfo}
            description={description}
            fetchReviews={fetchReviews}
            altReviewBlock={altReviewBlock}
            ratingData={ratingData}
            ratingDormData={ratingDormData}
            ratingRoomData={ratingRoomData}
            isMobile={isMobile}
          />
        </div>
        // <LeftContainer
        //   available={available}
        //   bed_laundry={bed_laundry}
        //   rooms={rooms}
        //   moreInfo={moreInfo}
        //   description={description}
        //   path3={path3}
        //   pic={pic}
        //   pro={pro}
        //   con={con}
        //   ratingData={ratingData}
        //   isMobile={isMobile}
        // />
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
