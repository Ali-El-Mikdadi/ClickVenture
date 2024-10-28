import * as React from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import Introduction from "./ThingsToEatComponents/Introduction";
import Cards from "./ThingsToEatComponents/Cards";
import Directions from "./ThingsToEatComponents/Directions";
import TopReviews from "./ThingsToEatComponents/TopReviews";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import Background from "../images/ThingsToEat/Background.png";
import { Place } from "../../../api/SchemaDb";

const ThingsToEat = ({ place }: { place: Place }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        style={{
          backgroundColor: "teal",
          backgroundSize: "cover",
          backgroundPosition: "center",

          width: "100%",
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 1280, width: "100%" }}>
          <NavBar textColor="rgb(255,255,255)" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: 1280,
          margin: "auto",
          postion: "realative",
        }}
      >
        <Introduction place={place} />

        <Cards place={place} />

        <Box
          sx={{
            backgroundColor: "oldlace",
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              padding: "25px",
              width: "100%",
              display: "flex",

              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "30%" },
              }}
            >
              <Directions place={place} />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "68%" },
              }}
            >
              <TopReviews place={place} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            margin: "auto",
            marginTop: "50px",
          }}
        ></Box>
      </Box>
      <Footer />
    </>
  );
};

export default ThingsToEat;
