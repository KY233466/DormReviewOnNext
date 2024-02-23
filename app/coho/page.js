// import { useState } from "react";
"use client";

import { useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useLoadScript } from "@react-google-maps/api";
import MediaQuery from "react-responsive";

import useMediaQuery from "@mui/material/useMediaQuery";

// import Details from "components/details";
import BuildingRatingList from "../../components/BuildingRatingList";
// import ContentBlock from "components/details/content";
import CoHoMap from "components/Map/cohoMap";
import DormDisplayWrapper from "components/DormDisplayWrapper";

import pic from "../../public/coho.jpeg";
import cohoMap from "public/rll-coho-map.png";
import kitchen from "public/Kitchen.png";
import Bed from "public/Bed.jpg";
import Washer from "public/Washer.png";
import { CoHoDorms } from "./CoHoConfig";

import styles from "./sogo.module.css";

const Content = {
  title: "CoHo (Community Housing)",
  path: "CoHo",
  path2: "CoHo-room",
  path3: "CoHo-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry:
    "Full-size bed · laundry rooms located at Green House (12 Bellevue), 21 Bellevue, and 22 Bellevue",
  rooms:
    "2 ten-person units · 2 nine-person units · 2 eight-person units · 3 seven-person units · 1 six-person unit · 3 five-person units · 6 four-person units · 4 three-person units",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "CoHo (Community Housing) is Tufts newest housing option for juniors and seniors. Located just behind Wren Hall (between Capen Street Ext and Boston Avenue), this group of woodframe houses is home to 137 students. These houses were all fully renovated during the between 2018 and 2019.",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "Full-size Bed",
    pic: Bed,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
];

const Con = [
  {
    title: "Laundry Equipment In Another Building",
    pic: Washer,
  },
];

function CoHo() {
  const [toggleList, setToggleList] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDvioL9bPkVCyily9QdB4aPnZ3hNhimCZM",
  });

  return (
    <>
      <DormDisplayWrapper
        Content={Content}
        Pro={Pro}
        Con={Con}
        fetchReviews={false}
        altRatingDisplayBlock={
          <BuildingRatingList
            toggleList={toggleList}
            setToggleList={setToggleList}
          />
        }
        altRightContainer={
          <div className={styles.rightContainer}>
            <CoHoMap />
          </div>
        }
      />
    </>
  );
}

export default CoHo;
