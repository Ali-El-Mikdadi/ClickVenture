import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import ReviewCard from "./ReviewsComponents/ReviewCards";
import SearchBar from "./ReviewsComponents/SearchBar";
import ReviewDescription from "./ReviewsComponents/ReviewDescription";
import CardImage from "../images/Reviews/card1.png";
import BackgroundImage from "../images/Reviews/bg1.png";

const Reviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(899));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(900, 1279));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1280));

  let gridTemplateColumns;
  if (isMobile) {
    gridTemplateColumns = "repeat(1, 1fr)";
  } else if (isMediumScreen) {
    gridTemplateColumns = "repeat(2, 1fr)";
  } else if (isLargeScreen) {
    gridTemplateColumns = "repeat(3, 1fr)";
  }

  return (
    <Box>
      <Box
        sx={{
          maxWidth: 1280,
          margin: isMobile ? 0 : "auto",
          bgcolor: "#FFFFFF",
        }}
      >
        <NavBar textColor="rgb(0,0,0)" />
        <Box
          sx={{
            flexGrow: 1,
            padding: isMobile ? theme.spacing(1) : theme.spacing(2),
            bgcolor: "#8AABC6",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: "Ubuntu",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              fontSize: 27,
              mt: 15,
              mb: 5,
            }}
          >
            What are the places you want to Review?
          </Typography>

          <Box sx={{ mb: 15 }}>
            <SearchBar />
          </Box>

          <Box
            sx={{
              marginLeft: theme.spacing(5),
              marginRight: theme.spacing(5),
              paddingBottom: theme.spacing(15),
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "black",
                textAlign: "left",
                fontSize: 27,
                marginTop: theme.spacing(2),
              }}
            >
              Pick Place To Review
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: gridTemplateColumns,
                gap: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <ReviewCard key={index} index={index} />
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ padding: theme.spacing(10) }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: isMobile ? "center" : "inherit",
            }}
          >
            Your Reviews
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 12 : 6}>
              {Array.from({ length: 2 }).map((_, index) => (
                <React.Fragment key={index}>
                  <ReviewDescription index={index} />
                  <Divider sx={{ my: 2 }} />
                </React.Fragment>
              ))}
            </Grid>
            <Grid
              item
              xs={isMobile ? 12 : 6}
              container
              justifyContent="flex-end"
              sx={{ position: "relative", overflow: "hidden" }}
            >
              <Card sx={{ maxWidth: 364, height: 437, position: "relative" }}>
                <CardMedia
                  component="img"
                  height="100%" // set height to 100%
                  image={CardImage} // use the imported image here
                  alt="Why to review"
                  sx={{ filter: "brightness(0.7)" }} // darken the image
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "#fff",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      fontSize: 27,
                    }}
                  >
                    Why to review?
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ fontFamily: "Roboto", fontSize: 10 }}
                  >
                    Witness how your reviews positively impact millions of
                    travelers and business owners alike.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      color: "##fff",
                      backgroundColor: "#F2B764",
                      borderRadius: 15,
                      mt: 2,
                      width: 150,
                      height: 40,
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-15%",
                  right: "-5%",
                  display: isMobile ? "none" : "block",
                }}
              >
                <img
                  src={BackgroundImage}
                  alt="Background"
                  style={{ width: 600, height: 300 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Reviews;
