import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ Info }) {
  const Init_URL =
    "https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let Hot_URL =
    "https://images.unsplash.com/photo-1517535088187-bee8563156e1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Cold_URL =
    "https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Rain_URL =
    "https://images.unsplash.com/photo-1629667287749-6ca63f1d570c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <h3>Weather Info</h3>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            Info.humidity > 80 ? Rain_URL : Info.temp > 15 ? Hot_URL : Cold_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="city">
            {Info.city}
            {"   "}
            {Info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : Info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div>
              <strong>Temperature: </strong>
              {Info.temp}&deg;C
            </div>
            <div>
              <strong>Min Temperature: </strong>
              {Info.temp_min}&deg;C
            </div>
            <div>
              <strong>Max Temperature: </strong>
              {Info.temp_max}&deg;C
            </div>
            <div>
              <strong>Humidity: </strong>
              {Info.humidity}
            </div>
            <div>
              The weather can be described as {Info.description} today and feels
              like {Info.feels_like}&deg;C.
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
