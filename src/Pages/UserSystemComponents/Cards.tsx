import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

import { MonetizationOn as MonetizationOnIcon } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Cards = ({ user }: { user: any }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 3,
        }}
      >
        <Card
          sx={{
            margin: 2,
            backgroundColor: "oldlace",
            flex: 1,
            minWidth: "150px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Rank</Typography>
            <img
              src={`/systemImage/${user.rankImage}`}
              alt="profile"
              style={{
                width: "25%",
                height: "25%",
                objectFit: "cover",
              }}
            />
            <Typography variant="body1">{user.rank}</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            margin: 2,
            backgroundColor: "oldlace",
            flex: 1,
            minWidth: "150px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Points</Typography>
            <MonetizationOnIcon sx={{ color: "gold", fontSize: 70 }} />
            <Typography variant="body1">{user.points}</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Cards;
