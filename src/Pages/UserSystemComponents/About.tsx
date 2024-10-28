import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import {
  EmojiEvents as EmojiEventsIcon,
  Reviews as ReviewsIcon,
  CropOriginal as CropOriginalIcon,
  WhereToVote as WhereToVoteIcon,
} from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const About = ({ user }: { user: any }) => {
  return (
    <div>
      <Card sx={{ margin: 2 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">About</Typography>
          <Typography variant="body1">{user.description}</Typography>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Box sx={{ display: "flex", margin: "20px" }}>
              <EmojiEventsIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Contributions
              </Typography>
              <Typography variant="subtitle1">{user.contribution}</Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "20px" }}>
              <ReviewsIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Reviews
              </Typography>
              <Typography variant="subtitle1">{user.comments}</Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "20px" }}>
              <CropOriginalIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Photos
              </Typography>
              <Typography variant="subtitle1">{user.photos}</Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "20px" }}>
              <WhereToVoteIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Places visited
              </Typography>
              <Typography variant="subtitle1">{user.placesVisited}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ margin: 2 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Badges</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
            {user.badges && user.badges.length > 0 ? (
              user.badges.map((badge: string, index: number) => (
                <Box
                  key={index}
                  sx={{ marginBottom: "10px", marginRight: "10px" }}
                >
                  <img src={badge} alt={badge} />
                  <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                    {badge}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography
                sx={{
                  marginTop: "10px",
                }}
              >
                This user don't have any bages yet.
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
