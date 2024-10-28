import * as React from "react";
import { Box, Typography, Rating } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Place } from "../../../../api/SchemaDb";

const Directions = ({ place }: { place: Place }) => {
  return (
    <div>
      <Typography variant="h6" component="div" sx={{ fontSize: "17px" }}>
        {place.rate} <Rating name="read-only" value={5} readOnly />{" "}
        {place.totalComments} reviews
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Exceptional
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={5} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            {place.exceptional}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Great
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={4} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            {place.great}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Satisfactory
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={3} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            {place.satisfactory}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Poor
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={2} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            {place.poor}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Bad
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={1} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            {place.bad}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Directions;
