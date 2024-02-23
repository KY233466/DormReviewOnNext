import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import AltReview from "components/Review/AltReview";
import AltRatingDisplayBlock from "../AltRatingDisplayBlock";
import { config } from "../CoHoConfig";

import pic from "assets/50Winthrop.png";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import Location from "assets/location.png";
import Bed from "assets/Bed.jpg";

import OneFloor from "assets/floor/47Winthrop/47-winthrop-1.png";
import TwoFloor from "assets/floor/47Winthrop/47-winthrop-2.png";
import ThreeFloor from "assets/floor/47Winthrop/47-winthrop-3.png";

import styles from "./coho.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "3",
    name: "50 Winthrop Street - Unit 2",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "50 Winthrop Street - Unit 2",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "50 Winthrop Street - Unit 1",
  },
];

const Content = {
  title: "50 Winthrop Street",
  path: "50Winthrop",
  path2: "50Winthrop-room",
  path3: "50Winthrop-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms:
    "First unit with 5 single rooms · Second unit with 8 single rooms · Third unit with 8 single rooms",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "Close to Breed Memorial Hall, the Interfaith Center, and an array of stores, including the Campus Mini Mart and Dunkin' Donuts",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "Single Person Bathrooms",
    pic: bathroom,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
  {
    title: "Full-size Bed",
    pic: Bed,
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: Location,
  },
];

function Winthrop50() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const { buildingConfig, unitConfig } = config(Content.title);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={860}>
        <BackArrow href="/coho" />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>No Floor Plan Available</div>
        </div>
        <MobileDetailBottomSheet
          title={Content.title}
          content={Content}
          pro={Pro}
          con={Con}
          altRatingDisplayBlock={
            <AltRatingDisplayBlock unitsConfig={buildingConfig} />
          }
          altReviewBlock={<AltReview paths={unitConfig} />}
        />
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={Content.title}
            available={Content.available}
            bed_laundry={Content.bed_laundry}
            rooms={Content.rooms}
            moreInfo={Content.moreInfo}
            description={Content.description}
            location={Content.location}
            pic={Content.pic}
            pro={Pro}
            con={Con}
            changeDetail={() => changeDetail()}
            altRatingDisplayBlock={
              <AltRatingDisplayBlock unitsConfig={buildingConfig} />
            }
            altReviewBlock={<AltReview paths={unitConfig} />}
          />
          {displayDetail ? <div className={styles.placeholder}> </div> : null}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>No Floor Plan Available</div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Winthrop50;
