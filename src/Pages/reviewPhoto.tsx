import React from "react";
import {
  Grid,
  Box,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Modal,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import PlaceContent from "./ReviewPlaceComponents/PlaceContent";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Place } from "../../../api/SchemaDb";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";

// This interface should be used in the frontend.

// Use this interface when dealing with comments in your frontend.

import { styled } from "@mui/system";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "388px",
  },
}));

const ReviewPlace = () => {
  const { user, refreshUser } = useContext(UserContext);

  const [imageUrl, setImageUrl] = React.useState("");
  const [model, setModel] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", 1280));
  const { id } = useParams();
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    width: isMobile ? "60%" : 586,
    height: isMobile ? "40%" : 200,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
  };

  const [place, setPlace] = React.useState<Place>();
  useEffect(() => {
    const fetchFunction = async () => {
      const place = await axios.get(`http://localhost:4000/places/${id}`);
      setPlace(place.data);
    };

    fetchFunction();
  }, [id]);

  function onSubmit() {
    if (!user) return navigate("/login");
    axios
      .post("http://localhost:4000/setPhoto", {
        imageUrl,
        date: new Date(),
        placeId: id,
        userId: user.id,
      })
      .then(() => {
        refreshUser();
        navigate(`/places/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const type = true;

  return (
    <Box>
      <Modal
        open={model}
        onClose={() => setModel(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        component="div" // Add the component prop with the value "div"
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Box sx={style}>
          <Typography
            id="save-to-trip"
            variant="h5"
            component="h2"
            sx={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: 25 }}
          >
            Enter Image URL
          </Typography>
          <TextField
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
          ></TextField>
          <Button
            onClick={() => {
              setModel(false);
            }}
            sx={{
              width: "20%",
              marginTop: "25px",
              background: "#F2B764",
              borderRadius: "25px",
              color: "white",
              "&:hover": {
                backgroundColor: "#F2B764",
              },
            }}
          >
            Save Image
          </Button>
        </Box>
      </Modal>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <NavBar textColor="rgb(0,0,0)" />
        <Box sx={{ marginTop: "100px", marginBottom: "50px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={isMobile ? 12 : 4}
              sx={{ borderRight: isMediumScreen ? "none" : "1px solid #000" }}
            >
              <Box
                sx={{
                  paddingLeft: isMediumScreen ? theme.spacing(2) : 0,
                }}
              >
                {place ? (
                  <PlaceContent place={place} type={type} />
                ) : (
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
                )}
              </Box>
            </Grid>
            <Grid item xs={isMobile ? 12 : 8}>
              <Box
                sx={{
                  width: isMobile ? "100%" : "466px",
                  height: "741px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft: isMobile ? "0px" : "50px",
                  px: isMobile ? "2rem" : "0", // Add this line
                  boxSizing: "border-box", // Add this line
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <form
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                    action=""
                  >
                    <Box
                      onClick={() => {
                        setModel(true);
                      }}
                      sx={{
                        width: "100%",
                        height: "300px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#E7E7E7",
                        borderRadius: "6px",
                      }}
                    >
                      {!!!imageUrl ? (
                        <>
                          {" "}
                          <img
                            src="/systemImage/camera.png"
                            style={{
                              width: "25px",
                              height: "25px",
                            }}
                            alt=""
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "15px",
                              color: "#000",
                              marginTop: "5px",
                            }}
                          >
                            Click to add photo
                          </Typography>{" "}
                        </>
                      ) : (
                        imageUrl
                      )}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        marginTop: "5px",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>Note:</span> Only one
                      photo allowed per submission
                    </Typography>
                    <Button
                      onClick={onSubmit}
                      sx={{
                        width: isMobile ? "100%" : "100%",
                        height: "45px",
                        background: "#F2B764",
                        borderRadius: "25px",
                        color: "white",
                        marginTop: "30px",
                        "&:hover": {
                          backgroundColor: "#F2B764",
                        },
                        type: "submit",
                      }}
                    >
                      Upload your Image
                    </Button>
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ReviewPlace;
