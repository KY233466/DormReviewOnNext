import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import RatingDisplay from "../../RatingDisplay/RatingDisplay";

async function getData(path3) {
  try {
    const data = await getDocs(collection(db, path3));
    return data.docs.map((doc) => ({ ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

async function LeftContainer({
  path3,
}) {
  let ratingData = [];
  ratingData = await getData(path3);
  // console.log(ratingData);

  return (
    <>
    ???
      <RatingDisplay data={ratingData} />
    </>
  );
}

export default LeftContainer;