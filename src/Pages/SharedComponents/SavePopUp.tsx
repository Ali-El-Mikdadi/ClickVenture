import * as React from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  ButtonBase,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

// Importing the Example Image
import ExampleImage from "../../images/ThingsToDo/Cardimage1.png";

const SavePopUp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Adjusted the style to be responsive
  const style = {
    position: "absolute",
    width: isMobile ? "90%" : 586,
    height: isMobile ? "90%" : 516,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
  };

  // Temporary Array of card data
  const cards = [
    {
      image: ExampleImage,
      tripName: "Global Trip",
      duration: "5 Days",
      location: "Northern, Capital, Muharraq",
    },
    {
      image: ExampleImage,
      tripName: "Global Trip",
      duration: "5 Days",
      location: "Northern, Capital, Muharraq",
    },

    // add more cards as needed
  ];

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "black" }}>
        Save
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="save-to-trip"
        aria-describedby="save-to-trip-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="save-to-trip"
            variant="h5"
            component="h2"
            sx={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: 25 }}
          >
            Save to trip
          </Typography>
          {/* Map over the cards array to create a Card component for each object */}
          {cards.map((card, index) => (
            <Link to="#" style={{ textDecoration: "none" }}>
              <Card
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
                  image={card.image}
                  alt={card.tripName}
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
                    component="div"
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    {card.tripName}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <DateRangeIcon />
                    <Typography variant="body2" color="text.secondary">
                      {card.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <LocationOnIcon />
                    <Typography variant="body2" color="text.secondary">
                      {card.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          ))}

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="primary" aria-label="add to trip">
              <AddIcon />
            </IconButton>
            <Typography variant="body1">Create Trip</Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SavePopUp;
