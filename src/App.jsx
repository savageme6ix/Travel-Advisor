import Header from "./Components/Header";
import List from "./Components/List";
import Map from "./Components/Map";
import { Box, CssBaseline } from "@mui/material";
import { useState, useEffect } from "react";

const App = () => {
  //Get user coordinates using browser built in geolocator
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ display: "flex", height: "90vh" }}>
        <Box sx={{ width: "30%" }}>LIST</Box>

        <Box sx={{ width: "70%" }}>MAP</Box>
      </Box>
    </>
  );
};

export default App;
