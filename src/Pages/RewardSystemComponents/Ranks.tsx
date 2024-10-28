import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import Trailblazer from "../../images/RewardSystem/Trailblazer.png";
import Adventure from "../../images/RewardSystem/Adventure.png";
import Explorer from "../../images/RewardSystem/Explorer.png";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Rank = () => {
  return (
    <div>
      <Card sx={{ backgroundColor: "oldlace" }}>
        <CardContent>
          <Typography variant="h5">Ranks</Typography>
          <Typography variant="overline">
            Accrue points to ascend in rank.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "20px",
              marginTop: "50px",
            }}
          >
            <img
              src={Trailblazer}
              alt="Trailblazer"
              style={{ width: "10%", borderRadius: "50%" }}
            />
            <Box sx={{ width: "50%", margin: "10px" }}>
              <Typography variant="h6">Trailblazer</Typography>
              <LinearProgress
                color="inherit"
                variant="determinate"
                value={0}
                style={{
                  height: "20px",
                  backgroundColor: "white",
                  borderRadius: "50px",
                }}
              />
            </Box>
            <Typography variant="body1">2,000</Typography>
            <MonetizationOnIcon style={{ color: "gold" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "20px",
              marginTop: "30px",
            }}
          >
            <img
              src={Adventure}
              alt="Adventure"
              style={{ width: "10%", borderRadius: "50%" }}
            />
            <Box sx={{ width: "50%", margin: "10px" }}>
              <Typography variant="h6">Trailblazer</Typography>
              <LinearProgress
                color="inherit"
                variant="determinate"
                value={0}
                style={{
                  height: "20px",
                  backgroundColor: "white",
                  borderRadius: "50px",
                }}
              />
            </Box>
            <Typography variant="body1">1,000</Typography>
            <MonetizationOnIcon style={{ color: "gold" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "20px",
              marginTop: "30px",
            }}
          >
            <img
              src={Explorer}
              alt="Explorer"
              style={{ width: "10%", borderRadius: "50%" }}
            />
            <Box sx={{ width: "50%", margin: "10px" }}>
              <Typography variant="h6">Explorer</Typography>
              <LinearProgress
                color="inherit"
                variant="determinate"
                value={25}
                style={{
                  height: "20px",
                  backgroundColor: "white",
                  borderRadius: "50px",
                }}
              />
            </Box>
            <Typography variant="body1">500</Typography>
            <MonetizationOnIcon style={{ color: "gold" }} />
          </Box>

          <Typography
            variant="h5"
            style={{ marginTop: "100px", marginBottom: "31px" }}
          >
            Why there’s ranks
          </Typography>
          <Typography variant="body2">
            Our site's ranks offer recognition and engagement, unlocking
            privileges as users ascend from beginner to expert. Each rank
            signifies dedication and expertise, granting access to exclusive
            benefits and rewards. Dive deeper into the community, unlock special
            content, and enjoy premium features. Join us on a journey of
            exploration, learning, and connection, showcasing your commitment to
            adventure and discovery.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rank;
