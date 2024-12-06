import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL1 = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "23203a7d4435fed42ec545edacb6fd3e";
  const API_URL2 = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    try {
      let response1 = await fetch(`${API_URL1}?q=${city}&appid=${API_KEY}`);
      let jsonResponse1 = await response1.json();
      let lat = jsonResponse1[0].lat;
      let lon = jsonResponse1[0].lon;
      console.log(lat, lon);
      let response2 = await fetch(
        `${API_URL2}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse2 = await response2.json();
      let result = {
        city: jsonResponse1[0].name,
        temp: jsonResponse2.main.temp,
        temp_min: jsonResponse2.main.temp_min,
        temp_max: jsonResponse2.main.temp_max,
        feels_like: jsonResponse2.main.feels_like,
        humidity: jsonResponse2.main.humidity,
        pressure: jsonResponse2.main.pressure,
        description: jsonResponse2.weather[0].description,
        icon: jsonResponse2.weather[0].icon,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <h3>Search for the weather</h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No record found!</p>}
      </form>
    </div>
  );
}
