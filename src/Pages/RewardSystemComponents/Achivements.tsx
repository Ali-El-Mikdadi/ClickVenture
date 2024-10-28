import * as React from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Slider,
} from "@mui/material";

import Reviews from "../../images/RewardSystem/Reviews.png";
import Photos from "../../images/RewardSystem/Photos.png";
import Placesvisited from "../../images/RewardSystem/Places visited.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Achivements = () => {
  const labels1 = [
    "Points",
    "1",
    "5",
    "10",
    "15",
    "20",
    "40",
    "80",
    "100",
    "150",
    "200",
    "300",
    "500",
    
  ];

  const marks1 = labels1.map((label, i) => {
    const value = i * (500 / 12);
    return { value, label };
  });

  const sliderStyles = {
    "& .MuiSlider-thumb": {
      display: "none",
    },
    "& .MuiSlider-mark": {
      height: "30px",
      width: "3px",
      backgroundColor: "white",
    },
    "& .MuiSlider-markLabel": {
      top: "-10px",
      fontSize: "7px",
    },
    "& .MuiSlider-markActive": {
      backgroundColor: "white",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "darkslategray",
    },
    "& .MuiSlider-track": {
      backgroundColor: "darkslategray",
    },
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Card sx={{ backgroundColor: "oldlace" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Achievements
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Unlock new milestones and, as a bonus, assist travelers along the
            way.
          </Typography>
          <Box
            justifyContent="space-between"
            mt={2}
            sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
          >
            <Card sx={{ flex: 1, margin: 2 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "50px",
                  }}
                >
                  <Box
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      marginRight: "10px",
                      backgroundColor: "lightBlue",
                      display: "flex",
                      justifyContent: "",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={Reviews}
                      alt="Reviews"
                      style={{ width: "70px" }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">Reviews</Typography>
                    <Typography variant="caption">Beginner</Typography>
                  </Box>
                </Box>
                <div style={{ marginLeft: "0px" }}>
                  <Slider
                    style={{
                      height: "30px",
                      borderRadius: "50px",
                      margin: "px",
                    }}
                    min={0}
                    max={500}
                    step={500 / 13}
                    value={1 * (500 / 12)}
                    marks={marks1}
                    disabled
                    sx={sliderStyles}
                  />
                </div>
                <Typography variant="body2" sx={{ marginTop: 5 }}>
                  Write reviews to gain p
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    marginTop: 20,
                    backgroundColor: "teal",
                    borderRadius: "50px",
                  }}
                >
                  Write a review
                </Button>
              </CardContent>
            </Card>
            <Card sx={{ flex: 1, margin: 2 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "50px",
                  }}
                >
                  <Box
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      marginRight: "10px",
                      backgroundColor: "lightBlue",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Photos} alt="Photos" style={{ width: "70px" }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">Photos</Typography>
                    <Typography variant="caption">Beginner</Typography>
                  </Box>
                </Box>
                <div style={{ marginLeft: "0px" }}>
                  <Slider
                    style={{
                      height: "30px",
                      borderRadius: "50px",
                      margin: "px",
                    }}
                    min={0}
                    max={500}
                    step={500 / 13}
                    value={1 * (500 / 12)}
                    marks={marks1}
                    disabled
                    sx={sliderStyles}
                  />
                </div>
                <Typography variant="body2" sx={{ marginTop: 5 }}>
                  Take a Photos to gain points
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    marginTop: 20,
                    backgroundColor: "teal",
                    borderRadius: "50px",
                  }}
                >
                  Take a Photo
                </Button>
              </CardContent>
            </Card>
            <Card sx={{ flex: 1, margin: 2 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "50px",
                  }}
                >
                  <Box
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      marginRight: "10px",
                      backgroundColor: "lightBlue",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={Placesvisited}
                      alt="Placesvisited"
                      style={{ width: "70px" }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">Places visited</Typography>
                    <Typography variant="caption">Beginner</Typography>
                  </Box>
                </Box>
                <div style={{ marginLeft: "0px" }}>
                  <Slider
                    style={{
                      height: "30px",
                      borderRadius: "50px",
                      margin: "px",
                    }}
                    min={0}
                    max={500}
                    step={500 / 13}
                    value={1 * (500 / 12)}
                    marks={marks1}
                    disabled
                    sx={sliderStyles}
                  />
                </div>
                <Typography variant="body2" sx={{ marginTop: 5 }}>
                  Visit a places to gain points
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    marginTop: 20,
                    backgroundColor: "teal",
                    borderRadius: "50px",
                  }}
                >
                  Start Trip
                </Button>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Achivements;
