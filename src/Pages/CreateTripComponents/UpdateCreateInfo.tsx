import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FormControl } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdateTripInfo({
  passFunction,
  trip,
}: {
  passFunction: any;
  trip: any;
}) {
  const navigator = useNavigate();
  const [days, setDays] = useState(trip.totalDays);
  const [tripName, setTripName] = useState(trip.tripName);
  const [description, setDescription] = useState(trip.description);
  const [coverImage, setCoverImage] = useState(trip.imageTrip);
  const [errors, setErrors] = useState({
    tripName: "",
    description: "",
    coverImage: "",
  });

  function validateFields() {
    let tempErrors = {
      tripName: !(document.getElementById("tripName") as HTMLInputElement).value
        ? "This field is required"
        : "",
      description: !(
        document.getElementById("description") as HTMLTextAreaElement
      ).value
        ? "This field is required"
        : "",
      coverImage: !(document.getElementById("coverImage") as HTMLInputElement)
        .value
        ? "This filed is required"
        : "",
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  }

  function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateFields()) {
      axios
        .post(`update/trips/${trip._id}`, {
          tripName: tripName,
          description: description,
          coverImage: coverImage,
          totalDays: days,
        })
        .then((res) => {
          console.log("Trip updated successfully", res);
          // reloade the current page to show changes
          // write the logic here
          window.location.reload();
          passFunction(false);
        });
    } else {
      console.log("Validation failed");
    }
  }

  function handleCancel() {
    setErrors({
      tripName: "",
      description: "",
      coverImage: "",
    });
    passFunction(false);
  }

  return (
    <div style={{ padding: "10px" }}>
      <Typography
        variant="h4"
        style={{ textAlign: "left", fontFamily: "Roboto" }}
      >
        Create Trip
      </Typography>
      <FormControl
        component="form"
        onSubmit={formSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Trip Name:</Typography>
          <TextField
            fullWidth
            id="tripName"
            onChange={(e) => setTripName(e.target.value)}
            name="tripName"
            placeholder="Enter your trip name"
            value={tripName}
            error={!!errors.tripName}
            helperText={errors.tripName}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1">Total Days:</Typography>
            <Typography variant="body2" color="textSecondary">
              You can select from 1 up to 7 days
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => setDays(Math.max(1, days - 1))}
              sx={{ color: "#007B80" }}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              inputProps={{ min: 1, max: 7, type: "number" }}
              variant="outlined"
              size="small"
              sx={{ width: "55px", textAlign: "center" }}
            />
            <IconButton
              onClick={() => setDays(Math.min(7, days + 1))}
              sx={{ color: "#007B80" }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1">Cover Image:</Typography>
          <TextField
            fullWidth
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            id="coverImage"
            name="coverImage"
            placeholder="Enter your trip cover image..."
            error={!!errors.tripName}
            helperText={errors.tripName}
          />
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1">Trip Description:</Typography>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "96%",
              resize: "none",
              fontFamily: "Roboto",
              padding: "10px",
              borderRadius: "4px",
              border: errors.description
                ? "1px solid red"
                : "1px solid #ced4da",
            }}
            id="description"
            name="description"
            placeholder="Enter your trip description"
          />
          {errors.description && (
            <Typography
              color="error"
              style={{ marginTop: 1, fontSize: "0.75rem", fontStyle: "italic" }}
            >
              {errors.description}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "3px",
            backgroundColor: "#ced4da",
            mt: 4,
          }}
        ></Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            onClick={handleCancel}
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
          <Button
            type="submit"
            sx={{
              borderRadius: "25px",
              color: "#fff",
              backgroundColor: "#205E60",
              "&:hover": { backgroundColor: "#16473C" },
              padding: "10px 20px",
            }}
          >
            Save changes
          </Button>
        </Box>
      </FormControl>
    </div>
  );
}
