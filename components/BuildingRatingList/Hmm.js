import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState, useEffect } from "react";

import RatingDisplay from "components/RatingDisplay/RatingDisplay";

function Lol({ path3 }) {
      const [reviews, setReviews] = useState(null);

    useEffect(() => {
      const getReviews = async () => {
        try {
          const data = await getDocs(collection(db, path3));
          setReviews(data.docs.map((doc) => ({ ...doc.data() })));
        //   setLoading(false);
        } catch (error) {
          console.error("Error fetching documents:", error);
        }
      };

      getReviews();
    }, [path3]);

  return <RatingDisplay data={reviews} />;

  // return
}

export default Lol;
