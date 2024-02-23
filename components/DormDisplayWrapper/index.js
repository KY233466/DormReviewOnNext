"use client"

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../DormDisplay";
import DormDisplayMobile from "../../app/_components/DormDisplayMobile";

const DormDisplayWrapper = ({
  Content,
  floor,
  Pro,
  Con,
  ratingData,
  ratingDormData,
  ratingRoomData,
  fetchReviews = true,
  altRatingDisplayBlock,
  altRightContainer,
}) => {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay
      Content={Content}
      floor={floor}
      Pro={Pro}
      Con={Con}
      ratingData={ratingData}
      ratingDormData={ratingDormData}
      ratingRoomData={ratingRoomData}
      isMobile={isMobile}
      fetchReviews={fetchReviews}
      altRatingDisplayBlock={altRatingDisplayBlock}
      altRightContainer={altRightContainer}
    />
  ) : (
    <DormDisplayMobile
      Content={Content}
      floor={floor}
      Pro={Pro}
      Con={Con}
      ratingData={ratingData}
      ratingDormData={ratingDormData}
      ratingRoomData={ratingRoomData}
    />
  );
};

export default DormDisplayWrapper;
