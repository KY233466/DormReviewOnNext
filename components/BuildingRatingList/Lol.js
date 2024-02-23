import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import RatingDisplay from "components/RatingDisplay/RatingDisplay";

async function getData(path3) {
  try {
    const data = await getDocs(collection(db, path3));
    return data.docs.map((doc) => ({ ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

export async function Lol({path3}) {
    const data = getData(path3);

    return <RatingDisplay data={data} />;

  // return
}

// export Lol;
