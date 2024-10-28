import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function PlacesSearch({ place, trip }: { place: any; trip: any }) {
  const { name, location, imagePlace } = place;
  const [like, setlike] = useState(false);
  // Initial like state based on props
  function addToLikedPLaces() {
    axios
      .post(`/trip/places/addLiked`, {
        tripId: trip._id,
        placeId: place._id,
        placeregion: place.region,
        tripregion: trip.region,
      })
      .catch((err) => {
        console.error("Error adding liked place to trip", err);
      });
  }

  return (
    <Box
      sx={{
        width: "95%",
        height: "auto",
        marginX: "auto",
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
      }}
    >
      {/* image and information box */}
      <Box sx={{ display: "flex", width: "50%", height: "100%" }}>
        <Box sx={{ width: "40%", height: "100%" }}>
          <img
            src={`/systemImage/${imagePlace[0]}`}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "49%",
            marginLeft: "15px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "regular",
              fontSize: "12px",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "regular",
              fontSize: "9px",
              marginTop: "3px",
              color: "gray",
            }}
          >
            {location}
          </Typography>
        </Box>
      </Box>
      {/* like box button */}
      <Box
        sx={{
          width: "10%",
          height: "100%",
          marginTop: "5px",
          padding: "5px 10px",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "100px",
        }}
      >
        <Button
          onClick={() => {
            addToLikedPLaces();
            setlike(true);
          }}
          size="medium"
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "100%",
            minWidth: "0px",
            height: "100%",
            border: "1px solid black",
          }}
        >
          {like ? (
            <FavoriteIcon fontSize="medium" sx={{ color: "red" }} /> // Use local like state
          ) : (
            <FavoriteBorderIcon fontSize="medium" />
          )}
        </Button>
      </Box>
    </Box>
  );
}
