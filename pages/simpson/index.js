import axios from "axios";
import { useEffect, useState } from "react";

import Character from "../../components/simpson/Character";

const Simpson = () => {
  //functions to here
  let [apiData, setApiData] = useState({});

  useEffect(async () => {
    const response = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    setApiData(response.data[0]);
  }, []);

  return (
    <div>
      <Character data={apiData} />
    </div>
  );
};

export default Simpson;
