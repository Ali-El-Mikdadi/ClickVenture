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
import { PlacesSearch } from "./PlacesSearch"; // Correct import for default export
import axios from "axios";

export default function CreateTripPopUpContent({
  setBlackBox, // Renamed for clarity
  trip,
}: {
  setBlackBox: React.Dispatch<React.SetStateAction<boolean>>;
  trip: any;
}) {
  const [searchPlaces, setSearchPlaces] = useState<any>([]); // [likedPlaces, setLikedPlaces

  useEffect(() => {
    const fetchTrip = async () => {
      console.log("trip from popup: ", trip);
      axios
        .post(`/trip/search`, {
          location: trip.region,
          likedPlaces: trip.likedPlaces,
        })
        .then((res) => {
          setSearchPlaces(res.data);
          console.log("searchPlaces: ", res.data);
        });
    };
    fetchTrip();
  }, [trip]); // Remove searchPlaces from dependencies

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter places based on the search query, exclude liked places, and match location from props

  const filteredData = searchPlaces.filter(
    (place: any) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("filterData: ", filteredData);
  if (!searchPlaces) return <div>Loading...</div>;

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
        Search for place
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
        Do you already have certain activities in mind that you don't want to
        miss? Locate and bookmark them for your trip.
      </Typography>
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
        sx={{ mt: 2 }}
      />

      <Box
        sx={{
          mt: 2,
          width: "100%",
          maxHeight: "300px", // Set a maximum height
          overflowY: "auto", // Enable vertical scrolling
          paddingY: "10px",
          borderTop: "1px solid #E4E4E4",
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((place: any) => (
            <PlacesSearch key={place._id} place={place} trip={trip} />
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
            setBlackBox(false);
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
        <Button
          onClick={() => {
            setBlackBox(false);
            window.location.reload();
          }}
          type="submit"
          sx={{
            borderRadius: "25px",
            color: "#fff",
            backgroundColor: "#205E60",
            "&:hover": { backgroundColor: "#16473C" },
            padding: "10px 20px",
          }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}
