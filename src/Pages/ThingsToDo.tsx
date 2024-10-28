/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import Introduction from "./ThingsToDoComponents/Introduction";
import Cards from "./ThingsToDoComponents/Cards";
import Directions from "./ThingsToDoComponents/Directions";
import TopReviews from "./ThingsToDoComponents/TopReviews";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Background from "../images/ThingsToDo/Background.jpg";
import { Place } from "../../../api/SchemaDb";

const ThingsToDo = ({ place }: { place: Place }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
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
          position: "relative",
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
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          margin: "auto",
          marginTop: "200px",
        }}
      ></Box>
      <Footer />
    </>
  );
};

export default ThingsToDo;
