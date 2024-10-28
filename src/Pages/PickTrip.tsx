import React, { useCallback, useEffect, useMemo, useState } from "react";
import CreateTripForm from "./CreateTripComponents/CreateTripForm";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/ubuntu";
import Icon1 from "../images/PickTrip/Icon1.png";
import Icon2 from "../images/PickTrip/Icon2.png";
import Icon3 from "../images/PickTrip/Icon3.png";
import Icon4 from "../images/PickTrip/Icon4.png";
import Rectangle1 from "../images/PickTrip/Rectangle1.png";
import Rectangle2 from "../images/PickTrip/Rectangle2.png";
import Background from "../images/PickTrip/Background.png";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "15px",
};

const PickTrip = () => {
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  // const [mapCenter, setMapCenter] = useState({ lat: 26.0667, lng: 50.5577 });
  const [mapZoom, setMapZoom] = useState(10);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [blackBox, setBlackBox] = React.useState(false);
  const [places, setPlaces] = React.useState([]);

  useEffect(() => {
    axios.get("/places").then((res) => {
      setPlaces(res.data);
    });
  }, [navigate]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Box
        onClick={() => setBlackBox(false)}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5,
          display: blackBox ? "flex" : "none",
          position: "fixed",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1000,
        }}
      ></Box>
      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "85%", sm: "85%", xs: "85gi%" },
          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* create Trip form */}
        <CreateTripForm passFunction={setBlackBox} />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ width: "100%", maxWidth: 1280 }}>
          <NavBar textColor="rgb(0,0,0)" />
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundImage: `url(${Background})`,
            backgroundSize: "381px 736px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10%",
          }}
        >
          <Container>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ margin: "auto", marginTop: "70px" }}
            >
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: 37,
                  textAlign: "center",
                  fontFamily: "Ubuntu",
                  mb: 2,
                }}
              >
                Create Your Own Trip
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: 15,
                  textAlign: "center",
                  width: { xs: "100%", sm: "461px" },
                  height: "auto",
                  overflow: "auto",
                }}
              >
                Plan Your Trips: Option one lets you craft your own journey,
                exploring over 100 destinations to find your perfect path. Dive
                into a wealth of reviews and opinions, empowering you to make
                well-informed choices. Alternatively, opt for the AI-powered
                system to effortlessly generate your ideal trip.
              </Typography>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid
                  item
                  xs={matches ? 6 : 3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Icon1} sx={{ width: 58, height: 58 }} />
                  <Typography sx={{ textAlign: "center", maxWidth: 130 }}>
                    Create your own trip with us
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={matches ? 6 : 3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Icon2} sx={{ width: 58, height: 58 }} />
                  <Typography sx={{ textAlign: "center", maxWidth: 130 }}>
                    Save restaurants and popular locations and more
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={matches ? 6 : 3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Icon3} sx={{ width: 58, height: 58 }} />
                  <Typography sx={{ textAlign: "center", maxWidth: 130 }}>
                    Discover different places reviews to find your matches
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={matches ? 6 : 3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Icon4} sx={{ width: 58, height: 58 }} />
                  <Typography sx={{ textAlign: "center", maxWidth: 130 }}>
                    Save your trip, start it, or create another!
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={6}>
                  <Box sx={{ width: "100%", height: 653 }}>
                    <Card
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${Rectangle1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          color: "#fff",
                          mt: 15,
                          ml: 2,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: "800",
                            fontSize: 37,
                            fontFamily: "Roboto",
                            mb: 3,
                          }}
                        >
                          Craft Your Trip: Start From Scratch!
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#fff", mb: 3 }}
                        >
                          Browse top destinations, restaurants, and things to do
                          and save your favourite places to create your dream
                          trip.
                        </Typography>
                        <Button
                          onClick={() => {
                            if (user) setBlackBox(true);
                            else navigate("/login");
                          }}
                          variant="contained"
                          sx={{
                            backgroundColor: "rgb(0, 123, 128)",
                            width: 165,
                            height: 56,
                          }}
                        >
                          Create Trip
                        </Button>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ width: "100%", height: 653 }}>
                    <Card
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${Rectangle2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          color: "#fff",
                          mt: 15,
                          ml: 2,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: "800",
                            fontSize: 37,
                            fontFamily: "Roboto",
                            mb: 3,
                          }}
                        >
                          Craft Your Adventure: AI-Enhanced Trips!
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#fff", mb: 3 }}
                        >
                          Our AI-driven trip planner empowers you to customize
                          your adventure effortlessly. Specify your desired
                          duration, set your budget, and indicate whether you're
                          traveling members.
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "rgb(242, 183, 100)",
                            width: 165,
                            height: 56,
                          }}
                          onClick={() => navigate("/GenerateTrip")}
                        >
                          Generate Trip
                        </Button>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Box sx={{ mt: 15 }}>
            <APIProvider apiKey={"AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc"}>
              <Map
                style={{
                  ...containerStyle, // Ensure the container style is applied
                  transition: "transform 0.5s ease-in-out", // Smooth transition for zoom
                }}
                defaultCenter={{ lat: 26.0667, lng: 50.5577 }}
                defaultZoom={10}
                mapId={"1dda829dfee4886e"}
                disableDefaultUI={true}
              >
                {places.map((place: any) => (
                  <React.Fragment key={place._id}>
                    <AdvancedMarker
                      position={place.googleLocation}
                      onClick={() => setSelectedMarker(place._id)}
                    >
                      <Pin
                        background={"#465F8C"}
                        borderColor={"#252E46"}
                        glyphColor={"white"}
                      />
                    </AdvancedMarker>
                    {selectedMarker === place._id && (
                      <InfoWindow
                        position={place.googleLocation}
                        onCloseClick={() => setSelectedMarker(null)}
                      >
                        <Card>
                          <CardMedia
                            component="img"
                            height="140"
                            image={`/systemImage/${place.imagePlace[0]}`}
                            sx={{ objectFit: "cover" }}
                            alt={place.name}
                          />
                          <CardContent>
                            <Typography variant="h5" component="div">
                              {place.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Rating: {place.rate}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Type: {place.type}
                            </Typography>
                          </CardContent>
                          <Button
                            onClick={() => {
                              navigate(`/places/${place._id}`);
                            }}
                            sx={{
                              borderRadius: "25px",
                              color: "#fff",
                              backgroundColor: "#465F8C",
                              "&:hover": { backgroundColor: "#16473C" },
                              padding: "10px 20px",
                              marginLeft: "7px",
                            }}
                          >
                            Visit
                          </Button>
                        </Card>
                      </InfoWindow>
                    )}
                  </React.Fragment>
                ))}
              </Map>
            </APIProvider>
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default PickTrip;
