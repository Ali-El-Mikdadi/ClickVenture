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

import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Place } from "../../../../api/SchemaDb";

const Cards = ({ place }: { place: any }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        // padding: "20px",
        display: "flex",
        marginTop: "10px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <Card
          sx={{
            width: "100%",
            bgcolor: "teal",
            flex: 1,

            borderRadius: "10px",
            color: "white",
            height: "Auto",
          }}
        >
          <Box
            sx={{
              width: "95%",
              height: "Auto",
              display: "flex",
              padding: "10px",
              flexDirection: isMobile ? "column" : "row",
              gap: "10px",
            }}
          >
            <Box
              sx={{ bgcolor: "teal", flex: 1, color: "white", height: "Auto" }}
            >
              <Typography variant="h4" component="h2" sx={{ margin: "20px" }}>
                About Hotel
              </Typography>
              <CardContent sx={{ borderBottom: "1px solid white" }}>
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
                    />{" "}
                  </Box>
                  <Box
                    sx={{
                      marginTop: "15px",
                      marginLeft: "10px",
                    }}
                  >
                    <Typography>{place.totalComments + " "} reviews</Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <PinDropOutlinedIcon sx={{ color: "#252E46" }} />
                    {"  "}
                    location
                  </Typography>
                  <Rating
                    name="service-rating"
                    value={place.subRatings.locationRate}
                    readOnly
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <CorporateFareIcon sx={{ color: "#252E46" }} />
                    {"  "}
                    facilities
                  </Typography>
                  <Rating
                    name="service-rating"
                    value={place.subRatings.facilities}
                    readOnly
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <HowToRegOutlinedIcon style={{ color: "#252E46" }} />{" "}
                    Service
                  </Typography>
                  <Rating
                    name="food-quality-rating"
                    value={place.subRatings.service}
                    readOnly
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <BedOutlinedIcon style={{ color: "#252E46" }} /> Room
                    Quality
                  </Typography>
                  <Rating
                    name="money-rating"
                    value={place.subRatings.roomQuality}
                    readOnly
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <CleaningServicesOutlinedIcon
                      style={{ color: "#252E46" }}
                    />{" "}
                    Cleanliness
                  </Typography>
                  <Rating
                    name="service-rating"
                    value={place.subRatings.cleanliness}
                    readOnly
                  />
                </Box>
              </CardContent>

              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "roboto",
                    fontWeight: "bold",
                  }}
                  variant="h5"
                  component="h2"
                >
                  Location and contact
                </Typography>
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc&q=${place.googleLocation.lat},${place.googleLocation.lng}`}
                  width="100%"
                  height="200px"
                  style={{
                    border: "0",
                    borderRadius: "20px",
                    marginTop: "20px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <Typography variant="body1" component="p">
                  <LocationOnIcon
                    style={{ color: "#252E46", marginTop: "20px" }}
                  />
                  {" " + place.location}
                </Typography>
                <Typography variant="body1" component="p">
                  <CallIcon style={{ color: "#252E46", marginTop: "20px" }} />
                  {" " + place.phoneNumber}
                </Typography>
                <Typography variant="body1" component="p">
                  <EmailIcon style={{ color: "#252E46", marginTop: "20px" }} />
                  {" " + place.email}
                </Typography>
              </CardContent>
            </Box>

            <Box
              sx={{
                bgcolor: "teal",
                flex: 1,
                margin: "10px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  Characteristic
                </Typography>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <ApartmentOutlinedIcon sx={{ color: "#252E46" }} />{" "}
                    ACCOMMODATION TYPE
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.accommodationType &&
                      place.accommodationType
                        .map((accommodationType: any) => {
                          return accommodationType;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <ChairOutlinedIcon sx={{ color: "#252E46" }} /> Amenities
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.amenities &&
                      place.amenities
                        .map((amenities: any) => {
                          return amenities;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <BedroomParentOutlinedIcon sx={{ color: "#252E46" }} /> ROOM
                    TYPE
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.roomType &&
                      place.roomType
                        .map((roomType: any) => {
                          return roomType;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <PinDropOutlinedIcon sx={{ color: "#252E46" }} /> Location
                    Type
                  </Typography>
                  <Typography variant="overline" component="p">
                    {place.locationType}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <SupportAgentOutlinedIcon sx={{ color: "#252E46" }} />{" "}
                    Additional Services
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.additionalServices &&
                      place.additionalServices
                        .map((additionalServices: any) => {
                          return additionalServices;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <GTranslateOutlinedIcon sx={{ color: "#252E46" }} />{" "}
                    LANGUAGE SPOKEN
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.languagesSpoken &&
                      place.languagesSpoken
                        .map((languagesSpoken: any) => {
                          return languagesSpoken;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <LocalAtmOutlinedIcon sx={{ color: "#252E46" }} /> PRICE
                    RANGE
                  </Typography>
                  <Typography variant="overline" component="p">
                    {place.priceRange}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <StarsOutlinedIcon sx={{ color: "#252E46" }} /> Hotel Class
                  </Typography>
                  <Rating
                    name="location-rating"
                    value={place.hotelClass}
                    readOnly
                  />
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            bgcolor: "teal",
            borderRadius: "10px",
            color: "white",
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Characteristic
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
                Write review
              </Button>
              <Button
                onClick={() => {
                  window.location.href = `/reviewPhoto/${place._id}`;
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
