import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  Grid,
  IconButton,
  Modal,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Introduction = ({ place }: { place: any }) => {
  const { user } = useContext(UserContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  React.useEffect(() => {
    if (!user) navigate("/login");
    axios
      .get(`/user/trips/${user.id}`)
      .then((res) => {
        console.log("getting trips from user id");
        setTrips(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user._id]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 586,
    height: isMobile ? "90%" : 516,
    bgcolor: "background.paper",
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
    overflow: "auto",
  };

  return (
    <div
      style={{
        width: "100%",
        marginTop: "120px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="flex-end" sx={{ margin: "10px" }}>
        <Button
          onClick={() => navigate(`/review/${place._id}`)}
          style={{ marginRight: "10px", color: "black" }}
        >
          Review
        </Button>
        <Typography variant="h5" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Button onClick={handleOpen} style={{ color: "black" }}>
          Save
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-save-to-trip"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-save-to-trip"
            variant="h5"
            sx={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: 25 }}
          >
            Save to trip
          </Typography>
          {trips ? (
            trips.map((trip: any, index) => (
              <Card
                onClick={() => {
                  axios
                    .post(`/trip/places/addLiked`, {
                      placeId: place._id,
                      tripId: trip._id,
                      tripregion: trip.region,
                      placeregion: place.region,
                    })
                    .then((res) => {
                      console.log(res.data);
                      handleClose();
                    })
                    .catch((err) => {
                      alert(err.response.data.message);
                    });
                }}
                key={index}
                sx={{
                  display: "flex",
                  backgroundColor: "rgba(255, 211, 52, 0.58)",
                  mt: 2,
                  p: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 113, height: 94, borderRadius: 1 }}
                  image={trip.imageTrip}
                  alt={trip.tripName}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    {trip.tripName}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <DateRangeIcon />
                    <Typography variant="body2" color="text.secondary">
                      {trip.totalDays}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <LocationOnIcon />
                    <Typography variant="body2" color="text.secondary">
                      {trip.region.join(", ")}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 14,
                color: "text.secondary",
                textAlign: "center",
                mt: 5,
              }}
            >
              No trips created yet. Create New Trip
            </Typography>
          )}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => {
                navigate("/pickTrip");
              }}
              color="primary"
              aria-label="add to trip"
            >
              <AddIcon />
            </IconButton>
            <Typography variant="body1">Create Trip</Typography>
          </Box>
        </Box>
      </Modal>

      <Grid container spacing={2}>
        <Grid item xs={isMobile ? 12 : 6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", margin: "10px 0px" }}
          >
            {place.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ margin: "10px 0px" }}
          >
            <HotelIcon /> {" " + place.location}
          </Typography>
          <Typography
            variant="overline"
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Box display="flex" alignItems="center" sx={{ margin: "10px 0px" }}>
              <LocationOnIcon />
              {" " + place.type} | {" " + place.rate}{" "}
              <Rating name="place-rating" value={place.rate} readOnly />{" "}
              {place.totalComments} reviews
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "2",
            }}
          >
            {place.description}
          </Typography>
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <Grid container direction="row">
            <Grid item xs={7}>
              <img
                src={`/systemImage/${place.imagePlace[0]}`}
                alt="Main Room View"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px 0px 0px 6px",
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <img
                src={`/systemImage/${place.imagePlace[1]}`}
                alt="Lobby View"
                style={{ width: "100%", height: "50%", objectFit: "cover" }}
              />
              <img
                src={`/systemImage/${place.imagePlace[2]}`}
                alt="Facilities View"
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  marginTop: "-4px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Introduction;
