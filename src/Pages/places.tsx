import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ThingsToDo from "./ThingsToDo";
import ThingsToEat from "./ThingsToEat";
import PlacesToStay from "./PlacesToStay";
import { Place } from "../../../api/SchemaDb";
import { CircularProgress } from "@mui/material";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
// Uncomment other imports if needed
// import ThingsToEat from "./ThingsToEat";
// import PlacesToStay from "./PlacesToStay";

export default function Places() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  // Initialize 'place' to null and define it to accept 'Place' or 'null'
  const [place, setPlace] = useState<Place | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/places/${id}`);
        setPlace(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlaces();
  }, [id]);

  // Ensure the component does not return undefined by handling all possible states
  if (!place) {
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

  if (place.category === "thingsToDo") {
    console.log(place);
    return <ThingsToDo place={place} />;
  } else if (place.category === "thingsToEat") {
    console.log(place);
    return <ThingsToEat place={place} />;
  } else {
    console.log(place);
    return <PlacesToStay place={place} />;
  }
}
