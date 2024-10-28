/* eslint-disable */
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../../images/Footer/Logo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "teal", color: "white", width: "100%" }}>
      <Grid
        container
        spacing={0}
        style={{ maxWidth: "1280px", margin: "auto" }}
      >
        <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "200px", marginBottom: "10px" }}
          />
          <Typography>
            Your sole resource for exploring Bahrain and crafting your own
            personalized trips.
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              <InstagramIcon style={{ width: "20px" }} />
            </a>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              <FacebookIcon style={{ width: "20px" }} />
            </a>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              <XIcon style={{ width: "20px" }} />
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              <GitHubIcon style={{ width: "20px" }} />
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          style={{
            textAlign: isMobile ? "center" : "start",
            marginTop: "50px",
          }}
        >
          <Typography variant="h6">Quick Menu</Typography>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Trips
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Review
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Reward
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          style={{
            textAlign: isMobile ? "center" : "start",
            marginTop: "50px",
          }}
        >
          <Typography variant="h6">Captions</Typography>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            About clickVenture
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Who we are?
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Why clickVenture
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          style={{
            textAlign: isMobile ? "center" : "start",
            marginTop: "50px",
          }}
        >
          <Typography variant="h6">Contact Us</Typography>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Manama, Bahrain
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            clickVenture@gmail.com
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
            }}
          >
            002-5861912321
          </a>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "teal",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <hr style={{ color: "white", backgroundColor: "white", height: 1 }} />
        <Typography variant="body1">
          2024 Ⓒ Copyright ClickVenture inc.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
