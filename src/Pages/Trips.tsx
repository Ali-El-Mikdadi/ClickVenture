import React, { useEffect, useState, useContext, useCallback } from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import { Card, CardContent, CardMedia } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "100%",
};

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const Trips = () => {
  const { id } = useParams();
  const { user, refreshUser } = useContext(UserContext);
  const [mapZoom, setMapZoom] = useState(10);
  const [mapCenter, setMapCenter] = useState({ lat: 26.0667, lng: 50.5577 });
  const [trip, setTrip] = useState<any>(null);
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const handleMarkerClick = useCallback((placeId: string) => {
    setSelectedMarker((prevSelectedMarker) =>
      prevSelectedMarker === placeId ? null : placeId
    );
  }, []);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`/setrunningTrip/${id}`);
        setTrip(response.data);
        refreshUser();
        console.log("Running trip data: ", response.data);
      } catch (error) {
        console.error("Error fetching running trip data: ", error);
      }
    };

    fetchTrip();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          setMapCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting the current position: ", error);
        }
      );
    }
  }, []);

  if (!trip || !trip.days) {
    return (
      <Typography
        sx={{
          padding: "20px",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          display: "grid",
          placeItems: "center",
        }}
      >
        Loading...
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: "100%", margin: "auto" }}
      >
        <Box style={{ paddingBottom: "10px", width: "100%" }}>
          <Box sx={{ mb: 15, maxWidth: 1280, margin: "auto" }}>
            <NavBar textColor="rgb(0,0,0)" />
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                margin: "10px",
                padding: "20px",
                textAlign: isMobile ? "center" : "left",
                maxWidth: 1280,
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                {trip.tripName}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <FmdGoodIcon sx={{ marginRight: "5px" }} />
                <Typography
                  sx={{
                    marginTop: "15px",
                  }}
                  variant="subtitle1"
                >
                  {trip.region}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <AccessTimeIcon
                  sx={{ marginRight: "5px", marginBottom: "5px" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  {trip.totalDays} Days
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ margin: "10px" }}>
                {trip.description}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography
                variant="h2"
                mt={5}
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "50px",
                }}
              >
                Live map
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "600px", // Ensure this height fits within your layout
                  display: { xs: "none", md: "flex" },
                  position: "relative",
                  top: "0",
                }}
              >
                <APIProvider apiKey={"AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc"}>
                  <Map
                    style={{
                      ...containerStyle, // Ensure the container style is applied
                      transition: "transform 0.5s ease-in-out",
                      position: "relative", // Smooth transition for zoom
                    }}
                    defaultCenter={{ lat: 26.0667, lng: 50.5577 }}
                    defaultZoom={11}
                    mapId={"1dda829dfee4886e"}
                    disableDefaultUI={true}
                  >
                    {trip.days[0].map((place: any) => (
                      <React.Fragment key={place._id}>
                        <AdvancedMarker
                          position={place.googleLocation}
                          onClick={() => handleMarkerClick(place._id)}
                        >
                          <Pin
                            background={"#465F8C"}
                            borderColor={"#252E46"}
                            glyphColor={"white"}
                          />
                        </AdvancedMarker>

                        {selectedMarker === place._id && (
                          <InfoWindow
                            position={place.googleLocation} // Close InfoWindow when clicked outside
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
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Rating: {place.rate}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Type: {place.type}
                                </Typography>
                              </CardContent>
                            </Card>
                          </InfoWindow>
                        )}
                      </React.Fragment>
                    ))}
                    <Button
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        zIndex: 1,
                        width: "100px",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                    >
                      <Typography variant="h6">Day 1</Typography>
                    </Button>
                    <Button
                      onClick={() => {
                        axios
                          .post(`/terminateTrip/`, {
                            userId: user.id,
                          })
                          .then(() => {
                            refreshUser();
                            navigate("/MyTrip");
                          })
                          .catch((error) => {
                            console.error("Error terminating trip: ", error);
                          });
                      }}
                      sx={{
                        backgroundColor: "red",
                        color: "white",
                        position: "absolute",
                        top: "10px",
                        left: "120px",
                        zIndex: 1,
                        width: "10%",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      <Typography variant="h6">Terminate</Typography>
                    </Button>
                  </Map>
                </APIProvider>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Trips;
