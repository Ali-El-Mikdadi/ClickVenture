import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import SteperCard from "./SteperCard";
import { StepIconProps } from "@mui/material/StepIcon";
import axios from "axios";

interface ColorlibStepIconProps extends StepIconProps {
  completed?: boolean;
  icon: React.ReactNode;
}

const ColorlibStepIcon = (props: ColorlibStepIconProps) => {
  const { completed, icon } = props;
  const iconStyles = {
    backgroundColor: completed ? "#16473C" : "#007B80",
    color: "#fff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={iconStyles}>{icon}</div>;
};

export default function VerticalLinearStepper({
  Places,
  setBlackBox3,
  dayIndex,
  setCurrentDaysIndex,
  trip,
  setSelectedMarker,
  setMapCenter,
  setMapZoom,
}: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState<any[]>([]);

  // Update steps state whenever Places prop changes
  React.useEffect(() => {
    setSteps(Places);
    setActiveStep(0); // Optionally reset the active step or set it based on some logic
  }, [Places]); // Dependency array includes Places to react to changes

  const deleteLastStep = () => {
    if (steps.length === 0) {
      console.log("No steps to delete");
      return;
    }

    const lastStepId = steps[steps.length - 1]._id;

    if (window.confirm("Are you sure you want to delete this place?")) {
      axios
        .post(`/trip/places/delete`, {
          tripId: trip._id, // Assuming Places[0] is valid and has a tripId
          placeId: lastStepId,
          dayIndex: dayIndex,
        })
        .then((res) => {
          console.log("Place deleted successfully", res.data);
          const newSteps = steps.slice(0, -1);
          setSteps(newSteps);
          setActiveStep(Math.max(0, newSteps.length - 1)); // Avoid negative activeStep
        })
        .catch((err) => {
          console.error("Error deleting place", err);
          alert(err.response?.data?.message || "Error deleting place");
        });
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.length === 0 ? (
          <Step>
            <StepLabel>Click on Add to add new place</StepLabel>
          </Step>
        ) : (
          steps.map((place: any) => (
            <Step key={place._id} expanded={true} sx={{ width: "100%" }}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {place.name}
              </StepLabel>
              <StepContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "150%",
                }}
              >
                <Box
                  onMouseEnter={() => {
                    setSelectedMarker(place._id);
                    setMapCenter(place.googleLocation);
                    setMapZoom(15);
                  }}
                  onMouseLeave={() => {
                    setSelectedMarker(null);
                    setMapCenter({ lat: 26.0667, lng: 50.5577 });
                    setMapZoom(13);
                  }}
                >
                  <SteperCard place={place} />
                </Box>
              </StepContent>
            </Step>
          ))
        )}
      </Stepper>
      <Box sx={{ mt: 4, mb: 2, display: "flex" }}>
        <Button
          variant="contained"
          onClick={() => {
            setBlackBox3(true);
            setCurrentDaysIndex(dayIndex);
          }}
          sx={{
            mt: 1,
            mr: 1,
            backgroundColor: "#007B80",
            borderRadius: "30px",
            marginRight: "2rem",
            ":hover": {
              backgroundColor: "#16473C",
            },
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          onClick={deleteLastStep}
          sx={{
            mt: 1,
            mr: 1,
            backgroundColor: "#007B80",
            borderRadius: "30px",
            ":hover": {
              backgroundColor: "#16473C",
            },
          }}
          disabled={steps.length === 0}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
