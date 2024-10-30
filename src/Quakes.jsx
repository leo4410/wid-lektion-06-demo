import { Button, Typography } from "@mui/material";
import { useState } from "react";

const URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson";

function Quakes() {
  const [quakes, setQuakes] = useState([]);

  async function fetchQuakes() {
    const responsedata = await fetch(URL);
    const jsondata = await responsedata.json();
    setQuakes(jsondata.features);
  }

  return (
    <div>
      <Typography variant="h2">Quakes</Typography>
      <Button variant="contained" onClick={() => fetchQuakes()}>Get Quakes!</Button>

      <ul>
        {quakes.length > 0 &&
          quakes.map((quake) => {
            return (
              <li key={quake.id}>
                <pre>{quake.properties.place}</pre>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Quakes;
