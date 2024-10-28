import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Rating from "@mui/material/Rating";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// this might be modify when we deploy the actual database
export default function SteperCard({ place }: any) {
  const [readMore, setReadMore] = useState(false);

  function countWords(text: string): number {
    const words = text.match(/\S+/g);
    return words ? words.length : 0;
  }
  return (
    <Box
      sx={{
        width: { md: "100%", xs: "80%" },
        display: "flex",
        marginTop: "10px",
        backgroundColor: "#FFF5E1",
        borderRadius: "5px",
      }}
    >
      {/* image box */}

      <img
        src={`/systemImage/${place.imagePlace[0]}`}
        style={{
          width: "50%", // Set a fixed width
          height: "50%", // Set a fixed height
          marginRight: "15px",
          objectFit: "cover", // This ensures the image covers the area without stretching
          borderRadius: "5px 0px 0px 5px",
        }}
        alt={place.name} // It's a good practice to provide an alt attribute for accessibility
      />

      {/* content box */}
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        {/* location name */}

        {/* <Box
          sx={{
            backgroundColor: "#FFD334",
            borderRadius: "3px",
            width: "auto",
            height: "auto",
            marginRight: "auto",
            paddingX: "6px",
            paddingY: "3px",
            marginBottom: "3px",
            opacity: "1",
          }}
        >
          <Typography
            fontFamily={"Roboto"}
            sx={{
              fontWeight: "regular",
              fontSize: "15px",
              textAlign: "center",
              opacity: "1",
            }}
          >
            {location}
          </Typography>
        </Box> */}

        {/* place name */}
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: "Bold",
            margin: "3px 0px",
            fontSize: "15x",
            textAlign: "left",
            color: "#000000",
          }}
        >
          {place.name}
        </Typography>

        <Rating
          sx={{ marginButton: "20px" }}
          name="rating"
          size="small"
          value={place.rate}
          readOnly
        />
        {/* things to eat content */}
        {place.category === "thingsToEat" && (
          <Box sx={{ display: "flex" }}>
            <DinnerDiningIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "5px",
                fontWeight: "regular",
              }}
            >
              {place.type}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MenuBookIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "regular",
              }}
            >
              {place.cuisine}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "5px",
                fontWeight: "regular",
              }}
            >
              ${place.priceRange}
            </Typography>
          </Box>
        )}

        {/* things to eat content */}
        {place.category === "thingsToDo" && (
          <Box sx={{ display: "flex" }}>
            <LocalActivityIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "9px",
                marginTop: "3px",
                fontWeight: "regular",
              }}
            >
              {place.type}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <AccessTimeIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "9px",
                marginTop: "2px",
                fontWeight: "regular",
              }}
            >
              {place.duration}
            </Typography>
            <Box sx={{ width: "2px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "2px",
                fontWeight: "regular",
              }}
            >
              {place.priceRange} per adult
            </Typography>
          </Box>
        )}

        {place.category === "placesToStay" && (
          <Box sx={{ display: "flex" }}>
            <StarIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "2px",
                fontWeight: "regular",
              }}
            >
              {place.hotelClass}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "2px",
                fontWeight: "regular",
              }}
            >
              {place.priceRange} per adult
            </Typography>
          </Box>
        )}

        <Box sx={{ width: "100%", height: "30%", mt: 1 }}>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Roboto",
              fontSize: "9px",
              fontWeight: "regular",
            }}
          >
            {readMore
              ? place.description
              : place.description
                  .split(" ")
                  .slice(0, countWords(place.description) / 2 / 2)
                  .join(" ") + " ..."}
          </Typography>
          <Typography
            onClick={() => setReadMore(!readMore)}
            sx={{
              fontSize: "8px",
              fontFamily: "Roboto",
              color: "#000000",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {readMore ? "Read Less" : "Read More"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
