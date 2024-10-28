import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  InputBase,
  Box,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchSample from "../../images/NavBar/SearchSample.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: "#FFFFFF",
  width: "100%",
  height: 43,
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    width: 695,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

// Temporary array data
const data = [
  {
    category: "Things To Do",
    items: [
      { image: SearchSample, title: "Cinema", link: "/ReviewPlace" },
      { image: SearchSample, title: "Bowling", link: "/ReviewPlace" },
    ],
  },
  {
    category: "Things To Eat",
    items: [
      { image: SearchSample, title: "Restaurant 1", link: "/ReviewPlace" },
      { image: SearchSample, title: "Restaurant 2", link: "/ReviewPlace" },
    ],
  },
  {
    category: "Places To Stay",
    items: [
      { image: SearchSample, title: "Hotel 1", link: "/ReviewPlace" },
      { image: SearchSample, title: "Hotel 2", link: "/ReviewPlace" },
    ],
  },
];

const SearchBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const filteredData = data
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Select Places To Review"
        inputProps={{ "aria-label": "search" }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
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
          }}
        >
          {filteredData.map((category, index) => (
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
                {category.category}
              </Box>
              {category.items.map((item, index) => (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem
                    key={index}
                    sx={{
                      borderBottom: "1px solid #ddd",
                      "&:hover": { backgroundColor: "lightgrey" },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={item.title}
                        src={item.image}
                        sx={{
                          width: "64px",
                          height: "48px",
                          borderRadius: "10px",
                          mr: "20px",
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
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
};

export default SearchBar;
