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
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Cards = ({ place }: { place: any }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            width: { xs: "100%", md: "30%" },
            margin: { xs: "10px 0", md: "0 10px 10px 0" },
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
                label: "Location",
                icon: <LocationOnIcon sx={{ color: "#252E46" }} />,
                rate: place.subRatings.locationRate,
              },
              {
                label: "Safety",
                icon: <GppGoodOutlinedIcon sx={{ color: "#252E46" }} />,
                rate: place.subRatings.safety,
              },
              {
                label: "Facilities",
                icon: <StorefrontOutlinedIcon sx={{ color: "#252E46" }} />,
                rate: place.subRatings.facilities,
              },
              {
                label: "Convenience",
                icon: <ThumbUpOutlinedIcon sx={{ color: "#252E46" }} />,
                rate: place.subRatings.convenience,
              },
              {
                label: "Staff",
                icon: <PeopleAltOutlinedIcon sx={{ color: "#252E46" }} />,
                rate: place.subRatings.staff,
              },
            ].map((item, index) => (
              <Box key={index} display="flex" justifyContent="space-between">
                <Typography variant="body2" component="p">
                  {item.icon} {item.label}
                </Typography>
                <Rating
                  name={`${item.label.toLowerCase()}-rating`}
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
            margin: { xs: "10px 0", md: "0 0 10px 0" },
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
              Characteristic
            </Typography>
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                component="p"
              >
                Activity Types
              </Typography>
              <Typography variant="overline" component="p">
                {place.activityType?.join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                variant="body1"
                component="p"
              >
                Accessibility
              </Typography>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  textTransform: "capitalize",
                }}
                variant="overline"
                component="p"
              >
                {place.accessibility?.join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                variant="body1"
                component="p"
              >
                Duration
              </Typography>
              <Typography variant="overline" component="p">
                {place.duration}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                variant="body1"
                component="p"
              >
                What to Expect
              </Typography>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontSize: "12px",
                  textTransform: "capitalize",
                }}
                variant="overline"
                component="ul"
              >
                {place.whatToExpect?.map((expectation: any, index: any) => (
                  <li key={index}>{expectation.toLowerCase()}</li>
                ))}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: { sx: "10px 0px", md: "0 0 10px 10px" },
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
            margin: "10px 0",
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
