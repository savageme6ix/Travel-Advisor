import Header from "./Components/Header";
import List from "./Components/List";
import Map from "./Components/Map";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ display: "flex", height: "90vh" }}>
      <Box sx={{ width: "30%" }}>LIST</Box>

      <Box sx={{ width: "70%" }}>MAP</Box>
    </Box>
  );
};

export default App;
