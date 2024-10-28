//eslint-disable
import * as React from "react";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
/* import Background1 from '../images/GenerateTrip/Background1.png';
import Background2 from '../images/GenerateTrip/Background2.png'; */
import StepperComponent from "./GenerateTripComponents/StepperComponent";
import SelectRegion from "./GenerateTripComponents/SelectRegion";
import DefineBudget from "./GenerateTripComponents/DefineBudget";
import PickTimePeriod from "./GenerateTripComponents/PickTimePeriod";
import GroupSize from "./GenerateTripComponents/GroupSize";
import FavouriteActivities from "./GenerateTripComponents/FavouriteActivities";
import SelectMethod from "./GenerateTripComponents/SelectMethod";

const steps = [
  "Select Method",
  "Choose Region",
  "Define Budget",
  "Pick Time Period",
  "Select Group Size",
  "Favourite Activities",
];

export default function GenerateTrip() {
  const [activeStep, setActiveStep] = React.useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        width: "100%",
        height: "100vh",
        flexDirection: isMobile ? "column" : "row",
        p: isMobile ? 2 : 4,
        mt: { md: 0, xs: 8 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // Center vertically
          position: "relative",
          // pt: isMobile ? 2 : 4,
        }}
      >
        {/* {!isMobile && <img src={Background1} style={{ position: 'absolute', top: '0%', right: '0%', width: '100%', height: '100%', objectFit: 'cover' }} />}
        {!isMobile && <img src={Background2} style={{ position: 'absolute', bottom: '0%', left: '0%', width: '100%', height: '100%', objectFit: 'cover' }} />} */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
            marginTop: { md: 0, xs: 5 },
          }}
        >
          <Typography
            variant="h1"
            style={{
              fontFamily: "Ubuntu",
              fontSize: isMobile ? 20 : 28,
              fontWeight: "bold",
            }}
          >
            AI Trip Generator
          </Typography>
          <Box mt={2}>
            <StepperComponent
              activeStep={activeStep}
              steps={steps}
              handleBack={handleBack}
              handleNext={handleNext}
            />
            <Divider sx={{ bgcolor: "#D9D9D9", height: "2px", my: 2 }} />
          </Box>
          {activeStep === 0 && (
            <Box mt={isMobile ? 2 : 5}>
              <SelectMethod
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Box>
          )}
          {activeStep === 1 && (
            <Box mt={isMobile ? 2 : 5}>
              <SelectRegion />
            </Box>
          )}

          {activeStep === 2 && (
            <Box mt={isMobile ? 2 : 5}>
              <DefineBudget />
            </Box>
          )}
          {activeStep === 3 && (
            <Box mt={isMobile ? 2 : 5}>
              <PickTimePeriod />
            </Box>
          )}
          {activeStep === 4 && (
            <Box mt={isMobile ? 2 : 5}>
              <GroupSize />
            </Box>
          )}
          {activeStep === 5 && (
            <Box mt={isMobile ? 2 : 5}>
              <FavouriteActivities />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
