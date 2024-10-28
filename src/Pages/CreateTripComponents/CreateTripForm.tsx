import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:4000";

interface CreateTripFormProps {
  passFunction: (open: boolean) => void;
}

export default function CreateTripForm({ passFunction }: CreateTripFormProps) {
  const { user } = useContext(UserContext);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const navigator = useNavigate();
  const [days, setDays] = useState(1);
  const [errors, setErrors] = useState({
    tripName: "",
    region: "",
    description: "",
  });
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");

  function validateFields() {
    let tempErrors = {
      tripName: !tripName ? "This field is required" : "",
      region: selectedRegions.length === 0 ? "This field is required" : "",
      description: !description ? "This field is required" : "",
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  }

  function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateFields()) {
      console.log("Form is valid");
      if (!user) {
        alert("User not logged in");
        return;
      }

      axios
        .post("/trips", {
          userid: user.id,
          tripName: tripName,
          region: selectedRegions,
          days: days,
          description: description,
        })
        .then((res) => {
          console.log("Trip created response from createTripForm", res.data);
          navigator("/createtrip/" + res.data.tripID);
        })
        .catch((err) => console.error("Error creating trip", err));
    } else {
      console.log("Validation failed");
    }
  }

  function handleCancel() {
    setErrors({ tripName: "", region: "", description: "" });
    passFunction(false);
    setSelectedRegions([]);
    setDays(1);
    (document.getElementById("tripName") as HTMLInputElement).value = "";
    (document.getElementById("description") as HTMLTextAreaElement).value = "";
  }

  const handleRegionChange = (
    event: SelectChangeEvent<typeof selectedRegions>
  ) => {
    setSelectedRegions(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
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
            onChange={(e) => setTripName(e.target.value)}
            id="tripName"
            value={tripName}
            name="tripName"
            placeholder="Enter your trip name"
            error={!!errors.tripName}
            helperText={errors.tripName}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Region:</Typography>
          <Select
            fullWidth
            id="region"
            multiple
            value={selectedRegions}
            onChange={handleRegionChange}
            error={!!errors.region}
          >
            {["Northern", "Southern", "Muharraq", "Capital"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {errors.region && (
            <Typography
              color="error"
              style={{ marginTop: 1, fontSize: "0.75rem", fontStyle: "italic" }}
            >
              {errors.region}
            </Typography>
          )}
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
          <Typography variant="subtitle1">Trip Description:</Typography>
          <textarea
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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
            Create
          </Button>
        </Box>
      </FormControl>
    </div>
  );
}
