// this component must contain the hero section of create trip page
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import StepperCreateTrip from "./StepperCreateTrip";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import CreateTripCard from "./CreateTripCard";
import Button from "@mui/material/Button";
import Hotel from "./Hotel.jpg";
import Circuit from "./Circuit.jpg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Rest from "./Rest.jpg";
import { Dispatch, SetStateAction } from "react";
// interfaces for the functions
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
// end of function accordion
// NEED TO BE MOVED TO THE MAIN CREATE TRIP PAGE
export default function HeroCreateTripComponent({
  setBlackBox3,
  setBlackBox,
  trip,
}: {
  setBlackBox3: Dispatch<SetStateAction<boolean>>;
  setBlackBox: Dispatch<SetStateAction<boolean>>;
  trip: any;
}) {
  const [value, setValue] = useState(0);

  // fake data array from data base just ignore it
  const fakeDaysData = [
    [
      {
        id: "Id-fake-from-database",
        catogry: "things to do",
        image: Circuit,
        placeName: "Bahrain International Circuits",
        rate: 5,
        location: "Northern",
        type: "Landing Mark",
        description:
          "Bahrain, in the heart of the Middle East, is a contemporary blend of modern racing and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners.",
        duration: "3 - 4",
        price: "3",
      },
      {
        id: "Iddsfsf-fake-from-database",
        catogry: "things to do",
        image: Circuit,
        namee: "Bahrain International Circuits",
        rate: 5,
        location: "Northern",
        type: "Landing Mark",
        description:
          "Bahrain, in the heart of the Middle East, is a contemporary blend of modern racing and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners.",
        duration: "3 - 4",
        price: "3",
      },
    ],
    [],
    [
      {
        id: "Id2-fake-from-database",
        catogry: "things to do",
        image: Circuit,
        namee: "Bahrain International Circuits",
        rate: 5,
        location: "Northern",
        type: "Landing Mark",
        description:
          "Bahrain, in the heart of the Middle East, is a contemporary blend of modern racing and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners.",
        duration: "3 - 4",
        price: "3",
      },
    ],
    [
      {
        id: "Id23-fake-from-database",
        catogry: "things to do",
        image: Circuit,
        namee: "Bahrain International Circuits",
        rate: 5,
        location: "Northern",
        type: "Landing Mark",
        description:
          "Bahrain, in the heart of the Middle East, is a contemporary blend of modern racing and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners.",
        duration: "3 - 4",
        price: "3",
      },
    ],
    [
      {
        id: "Id23-fake-from-database213",
        catogry: "things to do",
        image: Circuit,
        namee: "Bahrain International Circuits",
        rate: 5,
        location: "Northern",
        type: "Landing Mark",
        description:
          "Bahrain, in the heart of the Middle East, is a contemporary blend of modern racing and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners.",
        duration: "3 - 4",
        price: "3",
      },
    ],
    [
      {
        id: "Id23-fake-from-database2132e",
        catogry: "things to do",
        image: Circuit,
        namee: "Bahrain International Circuits",
        rate: 5,
        location: "Northern",
        type: "Landing Mark",
        description:
          "Bahrain, in the heart of the Middle East, is a contemporary blend of modern racing and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners.",
        duration: "3 - 4",
        price: "3",
      },
    ],
    [
      {
        id: "Id23-fake-from-database23223defee",
        catogry: "things to do",
        image: Circuit,
        namee: "Bahrain International Circuits",
        rate: 5,
        location: "Northern",
        type: "Landing Mark",
        description:
          "Bahrain, in the heart of the Middle East, is a contemporary blend of modern racing and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners.",
        duration: "3 - 4",
        price: "3",
      },
    ],
  ];

  const [Days, setDays] = useState(fakeDaysData);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>5 items</Typography>
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
            <Accordion value="Things to do" index={0}>
              <CreateTripCard
                catogry="things to do"
                image={Circuit}
                placeName="Bahrain International Circuits"
                rate={5}
                location="Northern"
                type="Landing Mark"
                description="Bahrain Circuit, nestled in the heart of the Middle East, is a captivating blend of modern racing prowess and Arabian charm. This world-class facility offers a dynamic track layout that challenges drivers with its fast straights and technical corners. Surrounded by the desert landscape, its illuminated beauty under the night sky during races creates an unforgettable spectacle, making it a favorite among motorsport enthusiasts worldwide."
                price="3"
                duration="3 - 4"
                googleLocation={{ lat: 26.0322, lng: 50.5102 }}
              />
            </Accordion>
          </Box>
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <Accordion value="Things to eat" index={1}>
              <CreateTripCard
                catogry="things to eat"
                image={Rest}
                placeName="Restaurant Sufra"
                rate={4}
                location="Capital"
                type="Restuant"
                description="Welcome to Restaurant Sufra, where every dish tells a story of tradition and taste. Inspired by the rich culinary heritage of the Mediterranean, Sufra invites you on a journey of flavor exploration. From sizzling kebabs to aromatic tagines, our menu is a celebration of authentic flavors and fresh ingredients meticulously crafted to delight your senses. Whether you're seeking a cozy dinner with loved ones or a vibrant gathering with friends, let Restaurant Sufra be your culinary sanctuary, where every meal is a cherished memory in the making."
                price="250"
                cuisine="Indian"
                googleLocation={{ lat: 26.0322, lng: 50.5102 }}
              />
            </Accordion>
          </Box>{" "}
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <Accordion value="Places to stay" index={2}>
              <CreateTripCard
                catogry="places to stay"
                image={Hotel}
                stars={5}
                placeName="Hilton Bahrain
                Hotel"
                rate={5}
                location="Muharrqa"
                type="Hotel"
                price="250 - 300"
                description="The Hilton Bahrain, a beacon of luxury nestled along the azure coastline of the Arabian Gulf, embodies elegance and opulence. Boasting stunning panoramic views, lavish accommodations, and impeccable service, this five-star haven offers a seamless blend of modern comfort and traditional Arabian hospitality. Whether indulging in gourmet dining experiences, rejuvenating at the spa, or lounging by the pristine poolside, guests are immersed in a world of unparalleled luxury at the Hilton Bahrain."
                googleLocation={{ lat: 26.0322, lng: 50.5102 }}
              />
            </Accordion>
          </Box>
        </CustomTabPanel>

        {/* this tab view for days */}
        <CustomTabPanel value={value} index={1}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E4E4E4",
              paddingY: "10px",
            }}
          >
            {Days.map((dayContent: any, DayIndex: any) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "#404040",
                    width: "10%",
                    paddingY: "4px",
                    paddingX: "7px",
                    borderRadius: "15px",
                    borderBottom: "1px solid #E4E4E4",
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
            })}
          </Box>

          {Days.map((dayContent: any, DayIndex: any) => {
            return (
              <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                <Accordion value={`Day ${DayIndex + 1}`} index={DayIndex}>
                  <StepperCreateTrip
                    key={DayIndex}
                    Places={dayContent}
                    setBlackBox3={setBlackBox3}
                  />
                </Accordion>
              </Box>
            );
          })}
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
