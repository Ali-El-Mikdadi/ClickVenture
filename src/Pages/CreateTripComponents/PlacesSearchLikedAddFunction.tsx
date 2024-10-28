import { Box, Typography } from "@mui/material";

// this component is the card for places that will show when user try to add to places
export default function PlacesSearchLikedAddFunction({
  places,
}: {
  places: any;
}) {
  const { name, location, imagePlace } = places;

  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        padding: "5px",
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
    </Box>
  );
}
