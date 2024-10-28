import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search"; // Importing the search icon
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PlacesSearchLikedAddFunction from "./PlacesSearchLikedAddFunction";
import axios from "axios";

export default function AddToDaysLikedElementForm({
  passFunction,
  trip, // Renamed for clarity
}: {
  passFunction: React.Dispatch<React.SetStateAction<boolean>>;
  trip: any;
}) {
  const [likedPlaces, setLikedPlaces] = useState([]); // [likedPlaces, setLikedPlaces
  useEffect(() => {
    const fetchTrip = async () => {
      axios.get(`/trip/places/${trip._id}`).then((res) => {
        setLikedPlaces(res.data);
      });
    };
    fetchTrip();
  }, [trip]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter places based on the search query, exclude liked places, and match location from props
  const filteredData = likedPlaces.filter((place: any) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [filterArray, setFilterArray] = useState(filteredData);

  return (
    <Box
      sx={{
        width: "90%",
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "26px",
          lineHeight: "150.6%",
          color: "#000000",
        }}
      >
        Choose liked place
      </Typography>
      <Typography
        sx={{
          marginTop: "5px",
          fontFamily: "Roboto",
          fontWeight: "regular",
          fontSize: "13px",
          color: "#000000",
        }}
      >
        Select place that you want to add to your day, or search among different
        places that you have liked!
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { borderRadius: "40px" },
          }}
          placeholder="Search" // Using placeholder instead of label
        />

        <Box
          sx={{
            borderTop: "1px solid #E4E4E4",
            marginTop: "20px",
            width: "100%",
            height: "100%",
            overflowY: "auto",
            paddingY: "10px",
          }}
        >
          <Box
            sx={{
              borderTop: "1px solid #E4E4E4",
              marginTop: "20px",
              width: "100%",
              height: "100%",
              overflowY: "auto",
              paddingY: "10px",
            }}
          >
            {filteredData.length > 0 ? (
              filteredData.map((place: any) => (
                <Box
                  sx={{ width: "100%" }}
                  onClick={() => {
                    // here must we add it to days array
                    // addFunction(place.id);
                  }}
                  // here must when we click we do something like added place into the main Array
                >
                  <PlacesSearchLikedAddFunction places={place} />
                </Box>
              ))
            ) : (
              <Typography
                sx={{
                  marginTop: "20px",
                  fontFamily: "Roboto",
                  fontWeight: "regular",
                  fontSize: "16px",
                  textAlign: "center",
                  color: "grey",
                }}
              >
                No places found
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          borderTop: "1px solid #E4E4E4",
          paddingY: "15px",
        }}
      >
        <Button
          onClick={() => {
            passFunction(false);
          }}
          sx={{
            borderRadius: "25px",
            color: "#fff",
            backgroundColor: "#205E60",
            "&:hover": { backgroundColor: "#16473C" },
            padding: "10px 20px",
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
