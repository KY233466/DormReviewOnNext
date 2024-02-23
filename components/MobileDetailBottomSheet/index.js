import { useState } from "react";

import Rating from "@mui/material/Rating";

import ProCon from "../ProCon";
import Review from "../Review";
import { BottomSheet } from "./BottomSheet";

import styles from "./index.module.css";

const MobileDetailBottomSheet = ({
  content,
  pro,
  con,
  ratingData,
  ratingDormData,
  ratingRoomData,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BottomSheet
      title={content.title + " · " + content.location}
      imgSrc={content.pic}
      subtitle={content.available}
      isDebugMode={false}
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <div className={styles.containerOuter}>
        <div className={styles.container}>
          <div className={styles.data}>
            {ratingData?.map((element) => {
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

          <div style={{ marginBottom: "5px" }}>{content.bed_laundry}</div>
          <div style={{ marginBottom: "10px" }}>{content.rooms}</div>
          <hr />
          <div style={{ marginBottom: "5px", fontSize: "14px" }}>
            {content.description}
          </div>
          <a
            className={styles.link}
            href={content.moreInfo}
            target={"_blank"}
            rel="noreferrer"
          >
            View more about room, bathroom, and amenities
          </a>
          <ProCon pro={pro} con={con} isMobile={true} />
          <hr style={{ marginTop: "20px" }} />
          <Review
            ratingDormData={ratingDormData}
            ratingRoomData={ratingRoomData}
            path={content.path}
            path2={content.path2}
            path3={content.path3}
          />
        </div>
      </div>
    </BottomSheet>
  );
};

export default MobileDetailBottomSheet;
