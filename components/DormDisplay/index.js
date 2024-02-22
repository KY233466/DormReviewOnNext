// "use client"
// import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Details from "/components/Details";
import FloorPlan from "/components/FloorPlan";

import styles from "./DormDisplay.module.css";

import LeftContainer from "../Details/LeftContainer";

// function DormDisplay({ Content, floor, Pro, Con }) {
const DormDisplay = ({ Content, floor, Pro, Con }) => {
  // const [displayDetail, setDisplayDetail] = useState(true);

  // function changeDetail() {
  //   setDisplayDetail(!displayDetail);
  // }

  return (
    <div className={styles.container}>
      <LeftContainer
        // available={available}
        // bed_laundry={bed_laundry}
        // rooms={rooms}
        // moreInfo={moreInfo}
        // description={description}
        path3={Content.path3}
        // pic={pic}
      />
      {/* <Details
        title={Content.title}
        path={Content.path}
        path2={Content.path2}
        path3={Content.path3}
        available={Content.available}
        bed_laundry={Content.bed_laundry}
        rooms={Content.rooms}
        moreInfo={Content.moreInfo}
        description={Content.description}
        location={Content.location}
        pic={Content.pic}
        pro={Pro}
        con={Con}
        changeDetail={() => console.log("?")}
      /> */}
      {/* {displayDetail ? <div className={styles.placeholder}> </div> : null} */}
      {/* <FloorPlan displayDetail={displayDetail} floor={floor} /> */}
    </div>
  );
};

export default DormDisplay;
