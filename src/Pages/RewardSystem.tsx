/* eslint-disable */
import * as React from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import { Box, Typography } from "@mui/material";
import Back from "../images/RewardSystem/Back.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Achivements from "./RewardSystemComponents/Achivements";
import Badges from "./RewardSystemComponents/Badges";
import Ranks from "./RewardSystemComponents/Ranks";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const RewardSystem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box
        style={{
          backgroundColor: "teal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "10px",
          width: "100%",
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
        <Box sx={{ width: "1280px" }}>
          <NavBar textColor="rgb(255,255,255)" />
        </Box>
      </Box>
        <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          margin: "auto",
          backgroundImage: `url(${Back})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "1240px",
              maxWidth: 1280,
              margin: "20px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box p={3} sx={{ marginTop: 10 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Your Achievements
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Get rewarded for exploring, reviewing, and photographing places.
                Your adventures earn you valuable perks with every step you
                take.
              </Typography>
            </Box>

            <Box>
              <Achivements />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "20px",
              }}
            >
              <Box flex={1} pt={1}>
                <Badges />
              </Box>
              <Box flex={1} pt={1}>
                <Ranks />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default RewardSystem;