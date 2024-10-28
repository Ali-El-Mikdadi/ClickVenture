import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import person from "../../images/Profile/person.png";
import { CalendarToday as CalendarTodayIcon } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UserContext } from "../../UserContext";

const Users = ({ user, userFromContext }: any) => {
  const [showForm, setShowForm] = useState(false);
  const { refreshUser } = useContext(UserContext);
  // Default image if no avatarImage is provided
  const defaultAvatarUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png?20221210150350";
  const [name, setName] = useState(user.name || "");
  const [userName, setUserName] = useState(user.userName || "");
  const [description, setDescription] = useState(user.description || "");
  const [avatarImage, setAvatarImage] = useState(
    user.avatarImage || defaultAvatarUrl
  );

  const handleClickOpen = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleChange =
    (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      switch (field) {
        case "name":
          setName(value);
          break;
        case "userName":
          setUserName(value);
          break;
        case "description":
          setDescription(value);
          break;
        case "avatarImage":
          setAvatarImage(value || defaultAvatarUrl); // Use default URL if field is empty
          break;
        default:
          break;
      }
    };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const updatedAvatarImage = avatarImage || defaultAvatarUrl; // Ensure there's always an avatar image URL
    try {
      const response = await fetch(`/UserSystem/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          userName,
          description,
          avatarImage: updatedAvatarImage,
        }),
      });

      if (response.ok) {
        console.log("User updated successfully");
        refreshUser(); // Refresh user data in context
        handleClose();
        window.location.reload(); // Refresh the page on successful update
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        marginTop: "-10%",
      }}
    >
      <Box sx={{ marginLeft: "100px" }}>
        <button
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={() => {
            if (userFromContext.id === user._id) {
              handleClickOpen();
            }
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={avatarImage || defaultAvatarUrl} // Fallback to default image if avatarImage is not specified
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </button>

        <Dialog open={showForm} onClose={handleClose}>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={handleClickOpen}
                  style={{ padding: 0, border: "none", background: "none" }}
                >
                  <img
                    src={person}
                    alt="profile"
                    style={{
                      backgroundColor: "darkslategray",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Button>
              </div>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                value={name}
                onChange={handleChange("name")}
              />
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={userName}
                onChange={handleChange("userName")}
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                margin="normal"
                value={description}
                onChange={handleChange("description")}
              />
              <TextField
                fullWidth
                label="Avatar Image URL"
                variant="outlined"
                margin="normal"
                value={avatarImage}
                onChange={handleChange("avatarImage")}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "darkslategray",
                    color: "white",
                    margin: "10px",
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        <Typography
          sx={{
            marginTop: "5px",
          }}
          variant="body1"
        >
          @{user.userName}
        </Typography>
        <Typography
          sx={{
            marginTop: "5px",
          }}
          variant="body1"
        >
          <CalendarTodayIcon sx={{ fontSize: 16, marginRight: "5px" }} />{" "}
          {new Date(user.joinDate).toISOString().split("T")[0]}
        </Typography>
      </Box>
    </Box>
  );
};

export default Users;
