import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto/300.css"; //300 is "Light"
import "@fontsource/roboto/400.css"; // 400 is "Regular"
import "@fontsource/roboto/500.css"; // 500 is "Medium"
import "@fontsource/roboto/700.css"; // 700 is "Bold"
import "@fontsource/ubuntu/700.css"; // 700 is "Bold"
import { useMediaQuery, useTheme } from "@mui/material";

export default function Welcome() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      marginTop={isMobile ? "50px" : "30px"}
      display="flex"
      flexDirection="column"
      alignItems="flex-start" // Align text to the left
      justifyContent="center"
      style={{ padding: isMobile ? "0 5%" : "0 10%" }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: isMobile ? "20px" : "40px",
            fontFamily: "Ubuntu",
          }}
        >
          Discover, Plan, and Explore: Your Personalized Journey Starts Here
        </Typography>
      </Box>

      <Box sx={{ mb: 10 }}>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            color: "white",
            fontWeight: 500,
            fontSize: isMobile ? "10px" : "14px",
          }}
        >
          Unlock Your Perfect Bahrain Adventure: Tailored to You, Every Step of
          the Way!
        </Typography>
      </Box>

      <Box sx={{ mb: 5 }}>
        <Button
          variant="contained"
          style={{
            borderRadius: "50px",
            backgroundColor: "rgb(32, 94, 96)",
            padding: "15px 30px",
            fontSize: "15px",
            alignSelf: "center",
            width: isMobile ? "100%" : "160px",
            height: "49px",
            fontFamily: "Roboto",
            textTransform: "capitalize",
          }}
          onClick={() => navigate("/PickTrip")}
        >
          Start Trip
        </Button>
      </Box>

      {!isMobile && (
          <Box sx={{ mb: 3, width: '100%', maxWidth: "1280px", margin: "auto" }}>
            <hr
              style={{
                color: "white",
                backgroundColor: "white",
                height: 1,
                width: "100%",
                marginTop: 100,
                boxSizing: "border-box",
              }}
            />
          </Box>
        )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "white", fontSize: "32px" }}
          >
            01
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "white", fontWeight: "bold", fontSize: "15px" }}
          >
            Discover New Places
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "white", fontSize: "13px" }}
          >
            Embark on a journey of discovery with us as we unveil Bahrain's
            hidden gems. Explore new places, uncover local wonders, and create
            unforgettable memories along the way.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "white", fontSize: "32px" }}
          >
            02
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "white", fontWeight: "bold", fontSize: "15px" }}
          >
            Create Your Trip & Review Places
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "white", fontSize: "13px" }}
          >
            Craft your perfect trip with ease using our intuitive planner. From
            accommodations to activities, streamline every detail and embark on
            your dream Bahrain adventure stress-free.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "white", fontSize: "32px" }}
          >
            03
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "white", fontWeight: "bold", fontSize: "15px" }}
          >
            Earn Rewards as You Explore!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "white", fontSize: "13px" }}
          >
            Explore Bahrain, reap the rewards! With every adventure, earn
            exclusive ranks and discounts that enhance your journey. Our rewards
            program makes your travels even more fulfilling.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}