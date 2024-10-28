import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Footer from "./SharedComponents/Footer";
import NavBar from "./SharedComponents/NavBar";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CreateTripPopUpContent from "./CreateTripComponents/CreateTripPopUpContent";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { useContext, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import UpdateTripInfo from "./CreateTripComponents/UpdateCreateInfo";
import { UserContext } from "../UserContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// this component must contain the hero section of create trip page
import { CircularProgress } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StepperCreateTrip from "./CreateTripComponents/StepperCreateTrip";
import CreateTripCard from "./CreateTripComponents/CreateTripCard";
import PlacesSearchLikedAddFunction from "./CreateTripComponents/PlacesSearchLikedAddFunction";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import React from "react";
const containerStyle = {
  width: "100%",
  height: "85%",
  borderRadius: "15px",
};

axios.defaults.baseURL = "http://localhost:4000";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface AccordionProps {
  children?: React.ReactNode; // data inside it
  index: number; // id or index of accordion
  value: string; // name of the accordion
}

function formatTripLikedPlacesBaseOnCategory(trip: any) {
  const thingsToDo: any = [];
  const thingsToEat: any = [];
  const placesToStay: any = [];

  trip.likedPlaces.forEach((place: any) => {
    if (place.category === "thingsToDo") {
      thingsToDo.push(place);
    } else if (place.category === "thingsToEat") {
      thingsToEat.push(place);
    } else {
      placesToStay.push(place);
    }
  });

  return { thingsToDo, thingsToEat, placesToStay };
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ width: "100%" }}>{children}</Box>}
    </div>
  );
}

// this accordion will return the accordion skeleton
function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState(true);
  const { children, index, value } = props;

  return (
    <Box id={index.toString()} sx={{ width: "100%" }}>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            fontFamily: "Roboto",
          }}
        >
          {value}
        </Typography>

        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => {}}
          sx={{ color: "black" }}
        >
          {/* if expanded true show upper arrow if not show lower arrow */}
          {expanded ? (
            <KeyboardArrowUpIcon onClick={() => setExpanded(!expanded)} />
          ) : (
            <KeyboardArrowDownIcon onClick={() => setExpanded(!expanded)} />
          )}
        </IconButton>
      </Box>
      {expanded && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* if we expand the items it will show the childrens */}
          {children}
        </Box>
      )}
    </Box>
  );
}
export default function CreateTrip() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [trip, setTrip] = useState({
    tripName: "",
    region: [],
    description: "",
    likedPlaces: [],
    days: [],
    imageTrip: "",
    _id: "",
  }); // [trip, setTrips]
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  // [mapCenter, setMapCenter
  // [mapZoom, setMapZoom]
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [blackBox, setBlackBox] = useState(false);
  const [blackBox2, setBlackBox2] = useState(false);
  const [blackBox3, setBlackBox3] = useState(false);
  const [value, setValue] = useState(0);
  const [thingsToDo, setThingsToDo] = useState<any>([]);
  const [thingsToEat, setThingsToEat] = useState([]);
  const [placesToStay, setPlacesToStay] = useState([]);
  const [likedPlaces, setLikedPlaces] = useState([]); // [likedPlaces, setLikedPlaces
  const [searchQuery, setSearchQuery] = useState("");
  const [Days, setDays] = useState([[]]);
  const [currentDaysIndex, setCurrentDaysIndex] = useState(0);
  const [mapZoom, setMapZoom] = useState(14);
  const [mapCenter, setMapCenter] = useState({ lat: 26.0667, lng: 50.5577 });
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/trips/${id}`)
      .then((res) => {
        console.log("Trip data fetched:", res.data);
        setTrip(res.data);
        setDays(res.data.days);
        setLikedPlaces(res.data.likedPlaces);
        setMapCenter(res.data.likedPlaces[0].googleLocation);

        // Categorize places and update state
        const { thingsToDo, thingsToEat, placesToStay } =
          formatTripLikedPlacesBaseOnCategory(res.data);
        setThingsToDo(thingsToDo);
        setThingsToEat(thingsToEat);
        setPlacesToStay(placesToStay);
      })
      .catch((error) => {
        console.error("Error fetching the trip data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]); // Ensure effect only runs when `id` changes
  // Depend on `id` and `user` to ensure re-run when these values change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter places based on the search query, exclude liked places, and match location from props
  const filteredData = likedPlaces.filter((place: any) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Takes full viewport height
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!trip) {
    return <div>Could not find trip</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* popup */}
      <Box
        onClick={function (e) {
          setBlackBox(false);
          setBlackBox2(false);

          setBlackBox3(false);
        }}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5,

          display: blackBox || blackBox2 || blackBox3 ? "flex" : "none",

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
          height: { md: "90%", sm: "85%", xs: "85%" },

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
        {/* example of location must be same as location from CreateTripPopUp  */}
        {/* this will be executed when more button is ***clicked*** */}
        <CreateTripPopUpContent setBlackBox={setBlackBox} trip={trip} />
      </Box>
      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "85%", sm: "85%", xs: "85%" },

          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox2 ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* example of location must be same as location from CreateTripPopUp */}
        <UpdateTripInfo trip={trip} passFunction={setBlackBox2} />
      </Box>

      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "90%", sm: "85%", xs: "85gi%" },

          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox3 ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* this will show the form of choose from liked places */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* <AddToDaysLikedElementForm trip={trip} passFunction={setBlackBox3} /> */}
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
            Select place that you want to add to your day, or search among
            different places that you have liked!
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
            placeholder="Search"
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
                <Box
                  sx={{ width: "100%" }}
                  key={place._id} // Assuming place has an _id property
                  onClick={() => {
                    // your click handler logic
                    // must be passed to specific day
                    //---------------------------------------------------------------------------------------------------------
                    axios
                      .post("/trip/addPlaceToDay", {
                        tripId: trip._id,
                        placeId: place._id,
                        dayIndex: currentDaysIndex,
                      })
                      .then((response) => {
                        const updatedTrip = response.data.trip;
                        setDays(updatedTrip.days); // Update the days state with the new array from the server
                        console.log("Updated days:", updatedTrip.days);
                        setBlackBox3(false); // Close modal after update
                      })
                      .catch((error) => {
                        console.error("Error adding place to day:", error);
                      });
                  }}
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
                setBlackBox3(false);
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
      </Box>

      <Box sx={{ width: "100%", maxWidth: 1280 }}>
        <NavBar textColor="rgb(0,0,0)" />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          maxWidth: 1280,

          paddingY: "20px",
          paddingX: { md: "0", xs: "8px" },
        }}
      >
        {/* Trip information */}
        <Box
          sx={{
            display: "flex",
            padding: { md: "0", xs: "10px" },
            flexDirection: "column",
            height: "100%",

            marginRight: { md: "5%", xs: "0" },
            width: { xs: "100%", lg: "49%" },
          }}
        >
          {/* image box */}
          <Box
            sx={{
              display: "flex",
              padding: "15px",
              borderRadius: "15px",
              justifyContent: "space-between",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${trip.imageTrip})`, // Combined linear gradient and background image
              backgroundSize: "cover",
              flexDirection: "column",
              width: { md: "100%", xs: "95%" },
              height: { md: "305px", xs: "300px" },
            }}
          >
            {/* Button icon box */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                onClick={() => setBlackBox2(true)}
                sx={{
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <SettingsIcon sx={{ color: "black" }} fontSize="large" />
              </IconButton>
            </Box>

            {/* title  box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
              }}
            >
              <Typography
                onClick={() => setBlackBox2(true)}
                sx={{
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                variant="h3"
              >
                {trip.tripName ? trip.tripName : "Trip Name"}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <AddLocationIcon sx={{ color: "black" }} fontSize="large" />
                <Typography
                  onClick={() => setBlackBox2(true)}
                  sx={{
                    color: "white",
                    fontFamily: "Roboto",
                    mt: 0.5,
                    cursor: "pointer",
                  }}
                  variant="body1"
                >
                  {trip.region && trip.region.length > 0
                    ? trip.region.join(", ")
                    : "region"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              onClick={() => setBlackBox2(true)}
              sx={{
                fontFamily: "Roboto",
                fontWeight: "small",
                color: "#6D7D8B",
                cursor: "pointer",
              }}
            >
              {trip.description ? trip.description : "Description"}
            </Typography>

            {/* content must be getting form other componenet */}
            {/* this is the old heroSection*/}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: 3,
                height: "100%",
                flexDirection: "column",
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Saves" />
                  <Tab label="Days" />
                </Tabs>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mt: 1,
                }}
              >
                {/* this tab view for saves */}
                <CustomTabPanel value={value} index={0}>
                  {/*
        the following is pseudo structure of what will be create trip page
    {
        "things to do": [array of things to do objects],
        "things to eat": [array of things to eat],
        "places to stay": [array of places to stay],   
    }        
        */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>
                      Items:{" "}
                      {trip
                        ? trip.likedPlaces.length
                        : "You don't have liked places yet"}
                    </Typography>
                    <Button
                      onClick={() => {
                        setBlackBox(true);
                      }}
                      sx={{
                        backgroundColor: "#FFD334",
                        fontFamily: "Roboto",
                        textTransform: "capitalize",
                        color: "white",
                        fontWeight: "medium",
                        fontSize: "15px",
                        borderRadius: "35px",
                        padding: "10px 25px",
                        lineHeight: "140%",
                        ":hover": { backgroundColor: "#FFC700" },
                      }}
                    >
                      More
                    </Button>
                  </Box>
                  <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                    <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                      <Accordion
                        value={`Things To Do (${thingsToDo.length})`}
                        index={0}
                      >
                        {thingsToDo.map((place: any, index: any) => (
                          <CreateTripCard
                            key={index}
                            catogry="things to do"
                            image={`/systemImage/${place.imagePlace[0]}`}
                            placeName={place.name}
                            rate={place.rate}
                            location={place.region}
                            type={place.type}
                            description={place.description}
                            price={place.priceRange}
                            duration={place.duration}
                            googleLocation={place.googleLocation}
                          />
                        ))}
                      </Accordion>
                      <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                        <Accordion
                          value={`Things To Eat (${thingsToEat.length})`}
                          index={1}
                        >
                          {thingsToEat.map((place: any, index: any) => (
                            <CreateTripCard
                              key={index}
                              catogry="things to eat"
                              image={`/systemImage/${place.imagePlace[0]}`}
                              placeName={place.name}
                              rate={place.rate}
                              location={place.region}
                              type={place.type}
                              description={place.description}
                              price={place.priceRange}
                              cuisine={place.cuisines[0]}
                              googleLocation={place.googleLocation}
                            />
                          ))}
                        </Accordion>
                      </Box>
                      <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                        <Accordion
                          value={`Places To Stay (${placesToStay.length})`}
                          index={2}
                        >
                          {placesToStay.map((place: any, index: any) => (
                            <CreateTripCard
                              key={index}
                              catogry="places to stay"
                              image={`/systemImage/${place.imagePlace[0]}`}
                              placeName={place.name}
                              rate={place.rate}
                              location={place.region}
                              type={place.type}
                              description={place.description}
                              price={place.priceRange}
                              stars={place.hotelClass}
                              googleLocation={place.googleLocation}
                            />
                          ))}
                        </Accordion>
                      </Box>
                    </Box>
                  </Box>
                </CustomTabPanel>

                {/* this tab view for days */}
                <CustomTabPanel value={value} index={1}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      borderBottom: "1px solid #E4E4E4",
                      paddingY: "10px",
                    }}
                  >
                    {Days
                      ? Days.map((dayContent: any, DayIndex: any) => {
                          return (
                            <Box
                              sx={{
                                backgroundColor: "#404040",
                                width: "10%",
                                paddingY: "4px",
                                paddingX: "7px",
                                borderRadius: "15px",
                                borderBottom: "1px solid #E4E4E4",
                                mr: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "white",
                                  fontFamily: "Roboto",
                                  fontSize: "11px",
                                  fontWeight: "regular",
                                  lineHeight: "22px",
                                }}
                              >
                                Day {DayIndex + 1}
                              </Typography>
                            </Box>
                          );
                        })
                      : "No days set yet"}
                  </Box>
                  {/* [[places],[],[],[],[]] */}

                  {Days
                    ? Days.map((places: any, DayIndex: any) => {
                        return (
                          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                            <Accordion
                              value={`Day ${DayIndex + 1}`}
                              index={DayIndex}
                            >
                              <StepperCreateTrip
                                key={places._id}
                                trip={trip}
                                Places={places}
                                setBlackBox3={setBlackBox3}
                                setCurrentDaysIndex={setCurrentDaysIndex} // Assuming this prop is meant to handle some index logic
                                dayIndex={DayIndex} // Correctly pass the day index
                                setSelectedMarker={setSelectedMarker}
                                setMapCenter={setMapCenter}
                                setMapZoom={setMapZoom}
                              />
                            </Accordion>
                          </Box>
                        );
                      })
                    : "No days set yet"}
                </CustomTabPanel>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* map box */}
        <Box
          sx={{
            width: "500px",
            height: "1000px", // Ensure this height fits within your layout
            display: { xs: "none", md: "flex" },
            position: "sticky",
            top: "0",
          }}
        >
          <APIProvider apiKey={"AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc"}>
            <Map
              style={{
                ...containerStyle, // Ensure the container style is applied
                transition: "transform 0.5s ease-in-out", // Smooth transition for zoom
              }}
              defaultCenter={{ lat: 26.0667, lng: 50.5577 }}
              defaultZoom={11}
              mapId={"1dda829dfee4886e"}
              disableDefaultUI={true}
            >
              {likedPlaces.map((place: any) => (
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
  );
}
