import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  InputBase,
  lighten,
  Box,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { Place } from "../../../../api/SchemaDb";

// Main Search component wrapping the search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "15px",
  backgroundColor: "#E4E4E4", // Updated base color
  "&:hover": {
    backgroundColor: lighten("#E4E4E4", 0.2), // Lighter on hover
  },
  color: "#6D7D8B", // Updated text color
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  maxWidth: "600px", // Prevent the Search component from stretching beyond 600px
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// Wrapper for the search icon
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Input field for the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#6D7D8B", // Updated text color
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontWeight: "bold", // Make the text bold
    color: "#000", // Make the text more black
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40ch",
    },
    [theme.breakpoints.up("xl")]: {
      width: "50ch",
    },
  },
}));

// Main function rendering the search bar
export default function SearchBar() {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<Place[]>([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Group data by category
  const groupedData = filteredData.reduce<Record<string, Place[]>>(
    (grouped, place) => {
      (grouped[place.category] = grouped[place.category] || []).push(place);
      return grouped;
    },
    {}
  );

  // Helper function to format category names
  const formatCategoryName = (name: string) => {
    return name
      .split(/(?=[A-Z])/) // Split the string into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words back together with spaces in between
  };

  return (
    <Search
      sx={{
        backgroundColor: "#E4E4E4",
        borderRadius: "30px",
        position: "relative",
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#6D7D8B" }} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ color: "#6D7D8B" }}
        placeholder={showPlaceholder ? "Search Places!" : ""}
        inputProps={{ "aria-label": "search" }}
        onMouseEnter={() => setShowPlaceholder(true)}
        onMouseLeave={() => setShowPlaceholder(false)}
        onFocus={() => {
          setShowPlaceholder(true);
          setShowDropdown(true);
        }}
        onBlur={() => {
          setTimeout(() => {
            setShowDropdown(false);
          }, 200);
        }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {showDropdown && (
        <Box
          sx={{
            backgroundColor: "white",
            mt: 1,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            position: "absolute",
            width: "100%",
            zIndex: 1,
            maxHeight: "400px", // Adjusted max height
            overflow: "auto",
            borderRadius: "15px", // Rounded corners for dropdown
          }}
        >
          {Object.entries(groupedData).map(([category, places], index) => (
            <Box key={index} sx={{ borderBottom: "1px solid #ddd" }}>
              <Box
                sx={{
                  p: 2,
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "teal",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                }}
              >
                {formatCategoryName(category)}
              </Box>
              {places.map((place, index) => (
                <Link
                  key={place._id ? place._id.toString() : index.toString()}
                  to={`/places/${place._id ? place._id.toString() : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #ddd",
                      "&:hover": { backgroundColor: "lightgrey" },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={place.name}
                        src={`/systemImage/${place.imagePlace[0]}`}
                        sx={{
                          width: "64px",
                          height: "48px",
                          borderRadius: "10px",
                          mr: "20px",
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={place.name}
                      primaryTypographyProps={{
                        color: "black",
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Search>
  );
}
