import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    description: "",
    icon: "",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo({ ...newInfo });
  };
  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox Info={weatherInfo} />
    </div>
  );
}
