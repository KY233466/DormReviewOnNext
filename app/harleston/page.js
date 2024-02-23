import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import DormDisplayWrapper from "/components/DormDisplayWrapper";

const GFloor = "/floor/Harleston/HarlestionG.png";
const OneFloor = "/floor/Harleston/1Harleston.png";
const TwoFloor = "/floor/Harleston/2Harleston.png";
const ThreeFloor = "/floor/Harleston/3Harleston.png";
const FourFloor = "/floor/Harleston/4Harleston.png";

const floor = [
  {
    title: 4,
    pic: FourFloor,
  },
  {
    title: 3,
    pic: ThreeFloor,
  },
  {
    title: 2,
    pic: TwoFloor,
  },
  {
    title: 1,
    pic: OneFloor,
  },
  {
    title: "G",
    pic: GFloor,
  },
];

const Content = {
  title: "Harleston Hall",
  path: "Harleston",
  path2: "Harleston-room",
  path3: "Harleston-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed · 13 washers · 14 dryers",
  rooms: "167 doubles · 51 singles · 1 triple",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/harleston-hall",
  description:
    "Once known as South Hall, it is located downhill next to basketball courts, tennis courts, and the Ellis Oval with an adjacent student parking lot. This hall houses mostly Second-Year students.",
  location: "Downhill",
  pic: "/hhall.jpeg",
};

const Pro = [
  {
    title: "Single Person Bathrooms",
    pic: "/Bathroom.png",
  },
  {
    title: "Elevator",
    pic: "/Elevator.png",
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: "/Location.png",
  },
];

async function getData(path3) {
  try {
    const data = await getDocs(collection(db, path3));
    return data.docs.map((doc) => ({ ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

async function getDormData(path) {
  try {
    const data = await getDocs(collection(db, path));
    return data.docs.map((doc) => ({ ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

async function getRoomData(path2) {
  try {
    const data = await getDocs(collection(db, path2));
    return data.docs.map((doc) => ({ ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

async function Harleston() {
  const ratingDormData = await getDormData(Content.path);
  const ratingRoomData = await getRoomData(Content.path2);
  const ratingData = await getData(Content.path3);

  return (
    <DormDisplayWrapper
      ratingData={ratingData || []}
      ratingDormData={ratingDormData || []}
      ratingRoomData={ratingRoomData || []}
      Content={Content}
      floor={floor}
      Pro={Pro}
      Con={Con}
    />
  );
}

export default Harleston;
