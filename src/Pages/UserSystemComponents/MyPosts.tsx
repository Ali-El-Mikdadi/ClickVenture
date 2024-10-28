import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Rating,
} from "@mui/material";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MyPosts = ({ user }: { user: any }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Card>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ justifyContent: "flex-start" }}
        >
          <Tab label="Reviews" />
          <Tab label="Photos" />
        </Tabs>
        {value === 0 && (
          <CardContent
            sx={{
              margin: "30px",
              backgroundColor: "oldlace",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10px",
              }}
            >
              {user.reviewComments && user.reviewComments.length > 0 ? (
                user.reviewComments.map((comment: any) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                      borderTop: "1px solid #000",
                    }}
                    key={comment._id}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          margin: "10px",
                        }}
                      >
                        <img
                          src={user.avatarImage}
                          alt="profile"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <Box>
                        <Typography variant="body1">{user.name}</Typography>
                        <Typography variant="body1">
                          {user.joinDate
                            ? format(parseISO(user.joinDate), "MMMM dd, yyyy")
                            : "Date not available"}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "10px",
                      }}
                    >
                      <Rating name="read-only" value={comment.rate} readOnly />
                    </Box>
                    <Box>
                      <Typography variant="body2">
                        {comment.commentBody}
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      Date visited:{" "}
                      {comment.dateVisit
                        ? format(parseISO(comment.dateVisit), "MMMM dd, yyyy")
                        : "Date not available"}
                    </Typography>
                    <Link
                      to={`/places/${comment.placeID._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        sx={{
                          width: "80%",
                          height: "80%",
                          margin: "10px",
                          backgroundColor: "whitesmoke",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {comment.placeID.imagePlace &&
                          comment.placeID.imagePlace.length > 0 && (
                            <img
                              src={`/systemImage/${comment.placeID.imagePlace[0]}`}
                              alt={comment.placeID.name}
                              style={{
                                width: "40%",
                                borderRadius: "10px",
                                margin: "10px",
                              }}
                            />
                          )}
                        <Box>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {comment.placeID.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {comment.placeID.region}
                          </Typography>
                          <Rating
                            name="place-rating"
                            value={comment.placeID.rate}
                            readOnly
                          />
                          <Typography
                            variant="subtitle1"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {comment.placeID.description}
                          </Typography>
                        </Box>
                      </Card>
                    </Link>
                  </Box>
                ))
              ) : (
                <Typography>User does not have reviews yet.</Typography>
              )}
            </Box>
          </CardContent>
        )}

        {value === 1 && (
          <CardContent
            sx={{
              margin: "30px",
              backgroundColor: "oldlace",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10px",
              }}
            >
              {user.photosReview && user.photosReview.length > 0 ? (
                user.photosReview.map((photo: any, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                      borderTop: "1px solid #000",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          margin: "10px",
                        }}
                      >
                        <img
                          src={user.avatarImage}
                          alt="profile"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <Box>
                        <Typography variant="body1">{user.name}</Typography>
                        <Typography variant="body1">
                          {user.joinDate
                            ? format(parseISO(user.joinDate), "MMMM dd, yyyy")
                            : "Date not available"}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <img
                        src={photo.image}
                        alt={`photo-${index}`}
                        style={{
                          width: "90%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          margin: "10px 0",
                        }}
                      />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Date:{" "}
                      {photo.dateOfTaken
                        ? format(parseISO(photo.dateOfTaken), "MMMM dd, yyyy")
                        : "Date not available"}
                    </Typography>
                    <Link
                      to={`/places/${photo.placeID._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        sx={{
                          width: "80%",
                          height: "80%",
                          margin: "10px",
                          backgroundColor: "whitesmoke",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {photo.placeID.imagePlace &&
                          photo.placeID.imagePlace.length > 0 && (
                            <img
                              src={`/systemImage/${photo.placeID.imagePlace[0]}`}
                              alt={photo.placeID.name}
                              style={{
                                width: "40%",
                                borderRadius: "10px",
                                margin: "10px",
                              }}
                            />
                          )}
                        <Box>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {photo.placeID.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {photo.placeID.region}
                          </Typography>
                          <Rating
                            name="place-rating"
                            value={photo.placeID.rate}
                            readOnly
                          />
                          <Typography
                            variant="subtitle1"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {photo.placeID.description}
                          </Typography>
                        </Box>
                      </Card>
                    </Link>
                  </Box>
                ))
              ) : (
                <Typography>User does not have photos yet.</Typography>
              )}
            </Box>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default MyPosts;
