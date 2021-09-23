import { useEffect } from "react";
import { useState } from "react";
import { WEATHER_URL } from "../utils/constans";

export const Weather = () => {
  const [temps, setTemps] = useState('');
  useEffect(() => {
    fetch(WEATHER_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status ${response.status}`);
        }

        return response.json();
      })
      .then((result) => {
        setTemps(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
      <div>
          <h1>Weather in the Moscow</h1>
              <article key={temps.id}>
                <h2>Description: {temps.description}</h2>
                <h3>Temperature: {temps.temperature}</h3>
                <h4>Wind: {temps.wind}</h4>
              </article>
      </div>
  )
};
