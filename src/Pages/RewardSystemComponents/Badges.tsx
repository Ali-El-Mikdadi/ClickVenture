import * as React from "react";

import { Box, Typography, Card, CardContent } from "@mui/material";
import HotelHunter from "../../images/RewardSystem/Hotel Hunter.png";
import HotelGuider from "../../images/RewardSystem/Hotel guider.png";
import HotelLens from "../../images/RewardSystem/Hotel Lens.png";
import HotelExpert from "../../images/RewardSystem/Hotel expert.png";
import FoodHunter from "../../images/RewardSystem/Food Hunter.png";
import FoodGuider from "../../images/RewardSystem/Restaurant guider.png";
import FoodLens from "../../images/RewardSystem/Restaurant Lens.png";
import FoodExpert from "../../images/RewardSystem/Restaurants expert.png";
import RunisHunter from "../../images/RewardSystem/Runis Hunter.png";
import Guider from "../../images/RewardSystem/Guider.png";
import HeritageLens from "../../images/RewardSystem/Heritage Lens.png";
import Explorerplace from "../../images/RewardSystem/Explorer place.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Badges = () => {
  return (
    <div>
      <Card sx={{ backgroundColor: "oldlace" }}>
        <CardContent>
          <Typography variant="h5">Badges</Typography>
          <Typography variant="body1">
            Begin sharing to earn badges and showcase your skills! Every badge
            will give you 300 points.
          </Typography>

          <Typography variant="h6">Places to stay</Typography>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={HotelHunter}
                  alt="Hotel Hunter"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/3
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Hotel Hunter
              </Typography>
              <Typography variant="overline">Visit 3 hotels</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={HotelGuider}
                  alt="Hotel Guider"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/5
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Hotel guider
              </Typography>
              <Typography variant="overline">Write 5 reviews</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={HotelLens}
                  alt="Hotel Lens"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/3
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Hotel Lens
              </Typography>
              <Typography variant="overline">Upload pictures</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={HotelExpert}
                  alt="Hotel Expert"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/1
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Hotel expert
              </Typography>
              <Typography variant="overline">Visit hotel</Typography>
            </Box>
          </Box>

          <Typography variant="h6">Things to eat</Typography>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={FoodHunter}
                  alt="Food Hunter"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/3
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Food Hunter
              </Typography>
              <Typography variant="overline">Visit 3 restaurant</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={FoodGuider}
                  alt="Food Guider"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/5
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Restaurant guider
              </Typography>
              <Typography variant="overline">Write 5 reviews</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={FoodLens} alt="Food Lens" style={{ width: "50px" }} />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/3
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Restaurant Lens
              </Typography>
              <Typography variant="overline">Upload pictures</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={FoodExpert}
                  alt="Food Expert"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/15
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Restaurants expert
              </Typography>
              <Typography variant="overline">Visit Restaurants</Typography>
            </Box>
          </Box>

          <Typography variant="h6">Things to do</Typography>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={RunisHunter}
                  alt="Runis Hunter"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/3
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Runis Hunter
              </Typography>
              <Typography variant="overline">Visit 3 places</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Guider} alt="Guider" style={{ width: "50px" }} />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/5
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Guider
              </Typography>
              <Typography variant="overline">Write 5 reviews</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={HeritageLens}
                  alt="Heritage Lens"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/3
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Heritage Lens
              </Typography>
              <Typography variant="overline">Upload pictures</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Explorerplace}
                  alt="Explorer place"
                  style={{ width: "50px" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                0/10
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Explorer
              </Typography>
              <Typography variant="overline">Visit 10 places</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Badges;
