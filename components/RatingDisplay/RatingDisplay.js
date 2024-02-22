// import { useState, useEffect } from "react";

import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./RatingDisplay.module.css";

// async function getData(path3) {
//   try {
//     const data = await getDocs(collection(db, path3));
//     return data.docs.map((doc) => ({ ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching documents:", error);
//   }
// }

// const RatingDisplay = async ({ path3 }) => {
const RatingDisplay = ({data}) => {

  return (
    <div className={styles.data}>
      {/* {data?.length > 0 ? ( */}
      {data?.length > 0 && (
        <div className={styles.data}>
          <div className={styles.reviewData}>
            {Number.parseFloat(data[0].Rate).toFixed(1)}
            <Rating
              name="read-only"
              value={Number.parseFloat(data[0].Rate)}
              precision={0.5}
              readOnly
            />
            {data[0].nReviews} reviews
          </div>
        </div>
      )}
      {/* // ) : (
      //   <Skeleton width={"150px"} height={"35px"} />
      // )} */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            // name: product.name,
            // description: product.description,
            // Add more properties as needed
          }),
        }}
      />
    </div>
  );
};

export default RatingDisplay;
