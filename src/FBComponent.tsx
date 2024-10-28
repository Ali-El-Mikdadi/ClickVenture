import React, { useEffect } from "react";
import { Fab } from "@mui/material";

import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const FABComponent = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.runningTrip === "No active trip") {
      return;
    }
  }, [user]);

  return (
    <Fab
      onClick={() => navigate(`/currentTrip/${user.runningTrip}`)}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "white",
        fontSize: "15px",
        textTransform: "capitalize", // This will capitalize the text
      }}
      variant="extended"
    >
      <img
        style={{
          width: "30px",
          height: "30px",
          marginRight: "10px",
        }}
        src="compass.gif"
        alt="compass"
      />
      Running Trip
    </Fab>
  );
};

export default FABComponent;
