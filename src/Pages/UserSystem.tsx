import React, { useEffect, useState, useContext } from "react";
import { Box, CircularProgress } from "@mui/material";
import Users from "./UserSystemComponents/Users";
import About from "./UserSystemComponents/About";
import Cards from "./UserSystemComponents/Cards";
import MyPosts from "./UserSystemComponents/MyPosts";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import profileBack from "../images/Profile/profileBack.png";
import background from "../images/Profile/background.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams } from "react-router-dom";
import axios from "axios";
import { User } from "../../../api/SchemaDb";
import { UserContext } from "../UserContext";

const UserSystem = () => {
  const { user: userFromContext } = useContext(UserContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/UserSystem/${id}`);
        setUser(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
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

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Takes full viewport height
          color: "red",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        backgroundImage: `url(${background})`,
      }}
    >
      <Box
        sx={{
          backgroundColor: "teal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
          width: "100%",
          mb: 15,
          margin: "auto",
        }}
      >
        <Box
          sx={{
            maxWidth: "1280px",
          }}
        >
          <NavBar textColor="rgb(255,255,255)" />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box>
          <img
            src={profileBack}
            alt="profile Back"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: "1280px",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Users user={user} userFromContext={userFromContext} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Cards user={user} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <About user={user} />
            </Box>
            <Box sx={{ flex: 2 }}>
              <MyPosts user={user} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", margin: "auto", marginTop: "200px" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default UserSystem;
