import { Box } from "@mui/material";
import backgroundImage from "./images/Home/Towerbg.png";
import NavBar from "./Pages/SharedComponents/NavBar";
import Welcome from "./Pages/HomeComponents/Welcome";
import PopularPlacesCards from "./Pages/HomeComponents/PopularPlacesCards";
import RoadMap from "./Pages/HomeComponents/Roadmap";
import Footer from "./Pages/SharedComponents/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FABComponent from "./FBComponent";
import { UserContext } from "./UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";

function App() {
  const { user } = useContext(UserContext);
  const [fabVisible, setFabVisible] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  // const [session, setSession] = useState(null);
  useEffect(() => {
    if (user && user.runningTrip !== "No active trip") {
      setFabVisible(true);
    } else {
      setFabVisible(false);
    }
  }, [setFabVisible, user]);

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const backgroundSize = isLargeScreen ? "contain" : "cover";

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {fabVisible ? <FABComponent /> : null}
      <Box
        style={{
          background: `linear-gradient(145deg, rgba(35,44,67,1) 35%, rgba(109,132,151,1) 100%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto",
        }}
      >
        <Box
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: backgroundSize,
            backgroundRepeat: "no-repeat",
            maxWidth: "1280px",
            width: "100%",
            height: "auto",
            margin: "auto",
            paddingBottom: "5%",
          }}
        >
          <Box sx={{ mb: 20, maxWidth: 1280, margin: "auto" }}>
            <NavBar textColor="rgb(255,255,255)" />
          </Box>
          <Box sx={{ maxWidth: 1280, margin: "auto" }}>
            <Welcome />
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "rgb(255, 246, 228)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box sx={{ height: "32px" }} />
        <Box sx={{ width: "100%", maxWidth: 1280, margin: "auto" }}>
          <PopularPlacesCards />
        </Box>
      </Box>

      {matches && <RoadMap />}
      <Footer />
    </Box>
  );
}

export default App;
