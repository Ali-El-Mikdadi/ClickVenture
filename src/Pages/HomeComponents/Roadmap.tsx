import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css"; // 300 is "Light"
import "@fontsource/roboto/400.css"; // 400 is "Regular"
import "@fontsource/roboto/500.css"; // 500 is "Medium"
import "@fontsource/roboto/700.css"; // 700 is "Bold"
import backgroundImage from "../../images/Home/BackCOP.png"; // Import the background image

const RoadMap = () => {
  return (
    <Box
      sx={{
        position: "static", // Changed to relative for better control over child elements
        width: { lg: "1460px" }, // Full width
        height: { lg: "1700px" }, // Full viewport height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          mb: { md: 6, xs: 35 },
          mt: { md: 15, xs: 8 },
        }}
      >
        <Box sx={{ width: "50%" }}></Box>
        <Box sx={{ width: "50%", postion: "relative", top: { md: 0, xs: 15 } }}>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: { md: 5, xs: 2 },
              fontSize: { md: "25px", sm: "15px", xs: "15px" },
            }}
          >
            Discover different places around Bahrain
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: { md: "15px", xs: "12px" } }}
          >
            Discover the diverse wonders of Bahrain as you journey from the
            bustling streets of Manama to the tranquil shores of Amwaj Islands.
            Immerse yourself in the rich history of ancient forts, wander
            through traditional souks, and unwind amidst the natural beauty of
            Bahrain's coastal landscapes. With its myriad of experiences,
            Bahrain offers something for every traveler, promising unforgettable
            adventures at every turn.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: 6,
          mt: { md: 30, sx: 5 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { md: "40%", xs: "50%" },
            ml: { md: 10, xs: 0 },
            mt: { md: 0, xs: 5 },
            position: "relative",
            top: { md: 0, xs: -200 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: { md: 5, xs: 2 },
              fontSize: { md: "25px", sm: "15px", xs: "15px" },
            }}
          >
            Create trip & gain new experiences
          </Typography>
          <Typography sx={{ fontSize: { md: "15px", xs: "12px" } }}>
            Craft your journey, gain new experiences. From vibrant streets to
            serene shores, delve into Bahrain's rich history, explore
            traditional souks, and savor coastal landscapes. With endless
            adventures, Bahrain ensures unforgettable memories for every
            traveler.
          </Typography>
        </Box>
        <Box sx={{ width: { md: "60%", xs: "50%" } }}></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: { md: 28, xs: 15 },
          position: "relative",
        }}
      >
        <Box sx={{ width: "60%" }}></Box>
        <Box
          sx={{
            width: "40%",
            ml: { md: 10, xs: 0 },
            position: "relative",
            top: { md: 0, xs: -250 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: { md: 3, xs: 2 },
              fontSize: { md: "25px", sm: "15px", xs: "15px" },
            }}
          >
            Gain points & rewards when you travel
          </Typography>
          <Typography sx={{ fontSize: { md: "15px", xs: "12px" } }}>
            Earn valuable points and rewards as you embark on your travel
            adventures. With every trip, unlock exclusive perks and discounts,
            enhancing your journey with unforgettable experiences. Enroll in our
            rewards program today and start collecting points to make your
            travels even more rewarding!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RoadMap;
