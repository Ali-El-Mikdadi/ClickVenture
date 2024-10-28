/* eslint-disable jsx-a11y/iframe-has-title */
import * as React from "react";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Cards = ({ place }: { place: any }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconColor = "#252E46"; // Change this to your desired color

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        display: "flex",
        marginTop: "50px",
        flexDirection: "column",
      }}
    >
      <Box
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
      >
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: "0 10px 10px 0",
            borderRadius: "10px",
            color: "white",
            height: "auto",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              variant="h5"
              component="h2"
            >
              Rating and Reviews
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "200px",
              }}
            >
              <Box
                sx={{
                  marginTop: "15px",
                  marginRight: "10px",
                }}
              >
                <Typography>{place.rate}</Typography>
              </Box>
              <Box>
                <Rating
                  sx={{
                    marginTop: "15px",
                  }}
                  name="place-rating"
                  value={place.rate}
                  readOnly
                />
              </Box>
              <Box
                sx={{
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
              >
                <Typography>{place.totalComments} reviews</Typography>
              </Box>
            </Box>
            <hr />
            <Typography
              variant="h6"
              component="p"
              sx={{ marginTop: "50px", marginBottom: "10px" }}
            >
              Ratings
            </Typography>
            {[
              {
                label: "Food Quality",
                icon: <DinnerDiningIcon sx={{ color: iconColor }} />,
                rate: place.subRatings.foodQuality,
              },
              {
                label: "Money",
                icon: <LocalAtmIcon sx={{ color: iconColor }} />,
                rate: place.subRatings.valueForMoney,
              },
              {
                label: "Service",
                icon: <VolunteerActivismIcon sx={{ color: iconColor }} />,
                rate: place.subRatings.service,
              },
              {
                label: "Menu Variety",
                icon: <MenuBookIcon sx={{ color: iconColor }} />,
                rate: place.subRatings.menuVariety,
              },
              {
                label: "Ambience",
                icon: <TableRestaurantIcon sx={{ color: iconColor }} />,
                rate: place.subRatings.ambiance,
              },
            ].map((item, index) => (
              <Box key={index} display="flex" justifyContent="space-between">
                <Typography variant="body2" component="p">
                  {item.icon} {item.label}
                </Typography>
                <Rating
                  name={`${item.label.toLowerCase().replace(" ", "-")}-rating`}
                  value={item.rate}
                  readOnly
                />
              </Box>
            ))}
          </CardContent>
        </Card>
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: "0 0 10px 0",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Characteristic
            </Typography>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                PRICE RANGE
              </Typography>
              <Typography variant="overline" component="p">
                {place.priceRange}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                CUISINES
              </Typography>
              <Typography variant="overline" component="p">
                {!!place.cuisines &&
                  place.cuisines.map((cuisines: any) => cuisines).join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                MEALS
              </Typography>
              <Typography variant="overline" component="p">
                {!!place.meals &&
                  place.meals.map((meals: any) => meals).join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                FEATURES
              </Typography>
              <Typography variant="overline" component="p">
                {!!place.featuresList &&
                  place.featuresList
                    .map((featuresList: any) => featuresList)
                    .join(", ")}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: "0 0 10px 10px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              variant="h5"
              component="h2"
            >
              Location and Contact
            </Typography>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc&q=${place.googleLocation.lat},${place.googleLocation.lng}`}
              width="100%"
              height="200px"
              style={{ border: "0", borderRadius: "20px", marginTop: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Typography variant="body1" component="p">
              <LocationOnIcon style={{ color: "#252E46", marginTop: "20px" }} />
              {place.location}
            </Typography>
            <Typography variant="body1" component="p">
              <CallIcon style={{ color: "#252E46", marginTop: "20px" }} />
              {place.phoneNumber}
            </Typography>
            <Typography variant="body1" component="p">
              <EmailIcon style={{ color: "#252E46", marginTop: "20px" }} />
              {place.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card
          sx={{
            bgcolor: "teal",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Actions
            </Typography>
            <Box>
              <Button
                onClick={() => {
                  window.location.href = `/review/${place._id}`;
                }}
                variant="contained"
                style={{
                  backgroundColor: "sandybrown",
                  margin: "20px",
                  borderRadius: "50px",
                }}
              >
                Write Review
              </Button>
              <Button
                onClick={() => {
                  window.location.href = `/reviewphoto/${place._id}`;
                }}
                variant="contained"
                style={{
                  backgroundColor: "sandybrown",
                  margin: "20px",
                  borderRadius: "50px",
                }}
              >
                Upload Image
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Cards;
