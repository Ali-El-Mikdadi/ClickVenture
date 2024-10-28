/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Rating,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { format, parseISO } from "date-fns";

import profile from "../../images/Profile/profile.png";
import Adventure from "../../images/RewardSystem/Adventure.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Comment, Photo, Place } from "../../../../api/SchemaDb";
import { useNavigate } from "react-router-dom";

const TopReviews = ({ place }: { place: Place }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  console.log(place);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [votes, setVotes] = useState(0);
  const [voteType, setVoteType] = useState<"upvote" | "downvote" | null>(null);

  const upvote = () => {
    if (voteType === "upvote") {
      setVotes(0);
      setVoteType(null);
    } else {
      setVotes(1);
      setVoteType("upvote");
    }
  };

  const downvote = () => {
    if (voteType === "downvote") {
      setVotes(0);
      setVoteType(null);
    } else {
      setVotes(-1);
      setVoteType("downvote");
    }
  };

  const [commentAnchorEls, setCommentAnchorEls] = useState<
    Record<string, HTMLElement | null>
  >({});
  const [photoAnchorEls, setPhotoAnchorEls] = useState<
    Record<string, HTMLElement | null>
  >({});

  const handleCommentClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    commentId: string
  ) => {
    setCommentAnchorEls((prev: any) => ({
      ...prev,
      [commentId]: event.currentTarget,
    }));
  };

  const handleCommentClose = (commentId: string) => {
    setCommentAnchorEls((prev) => ({ ...prev, [commentId]: null }));
  };

  const handlePhotoClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    photoId: string
  ) => {
    setPhotoAnchorEls((prev: any) => ({
      ...prev,
      [photoId]: event.currentTarget,
    }));
  };

  const handlePhotoClose = (photoId: string) => {
    setPhotoAnchorEls((prev) => ({ ...prev, [photoId]: null }));
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ justifyContent: "flex-start", width: "100%" }}
      >
        <Tab label="Reviews" />
        <Tab label="Photos" />
      </Tabs>

      {value === 0 && (
        <>
          {place.comments.length === 0 ||
          Object.keys(place.comments[0]).length === 0 ? (
            <h2 style={{ textAlign: "center" }}>No reviews yet</h2>
          ) : (
            place.comments.map((comment: any) => (
              <Box key={comment._id} sx={{ overflow: "hidden", width: "90%" }}>
                <CardContent
                  sx={{
                    position: "relative",
                    borderTop: "2px solid black",
                    borderBlockColor: "gainsboro",
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
                      width: "100%",
                      height: "40px",
                      justifyContent: "end",
                    }}
                  >
                    <Box
                      sx={{
                        margin: "10px",
                        display: "flex",
                        backgroundColor: "white",
                        width: "100px",
                        height: "35px",
                        borderRadius: "50px",
                        border: "1px solid black",
                      }}
                    >
                      <IconButton onClick={upvote} sx={{ flex: "1" }}>
                        <ArrowUpwardIcon />
                      </IconButton>
                      <Typography
                        sx={{
                          flex: "1",
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: "20px",
                          mt: "2px",
                        }}
                      >
                        {comment.score}
                      </Typography>
                      <IconButton onClick={downvote} sx={{ flex: "1" }}>
                        <ArrowDownwardIcon />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        onClick={(event) =>
                          handleCommentClick(event, comment._id)
                        }
                      >
                        <MoreHorizIcon
                          sx={{
                            fontSize: "20px",
                            color: "black",
                            padding: "5px",
                          }}
                        />
                      </IconButton>
                      <Menu
                        anchorEl={commentAnchorEls[comment._id] || null}
                        open={Boolean(commentAnchorEls[comment._id])}
                        onClose={() => handleCommentClose(comment._id)}
                      >
                        <MenuItem
                          onClick={() => handleCommentClose(comment._id)}
                        >
                          Report
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigate(`/usersystem/${comment.userID}`);
                          }}
                        >
                          View Profile
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={`${comment.avatarImage}`}
                      alt="profile"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        objectFit: "cover",
                        marginRight: "10px",
                        objectPosition: "center",
                      }}
                    />

                    <Box>
                      <Typography variant="subtitle1">
                        {comment.username}
                      </Typography>
                      <Typography variant="caption">
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                          {comment.contribution}
                        </Box>{" "}
                        contributions
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="subtitle1">
                          {comment.rank}{" "}
                        </Typography>
                        <img
                          src={`/systemImage/${comment.rankImage}`}
                          alt="Adventure"
                          style={{
                            width: "20px",
                            height: "auto",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Rating name="read-only" value={comment.rate} readOnly />
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {comment.title}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1} mb={2}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                        variant="body1"
                      >
                        Written{" "}
                        {comment.writtenDate
                          ? format(
                              parseISO(comment.writtenDate),
                              "MMMM dd, yyyy"
                            )
                          : "Date not available"}
                      </Typography>
                      <CircleIcon
                        sx={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                      <Typography variant="body1">
                        {" "}
                        {comment.withWhom}
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      {comment.commentBody}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body1">
                        <strong>Date visited:</strong>
                        {comment.dateVisit
                          ? format(parseISO(comment.dateVisit), "MMMM dd, yyyy")
                          : "Date not available"}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{ marginTop: "20px" }}
                    >
                      <Box display="flex" justifyContent="space-between">
                        <Box>
                          <Typography variant="body2" component="p">
                            facilities
                          </Typography>
                          <Rating
                            name="location-rating"
                            value={comment.facilities}
                            readOnly
                          />
                        </Box>
                        <Box>
                          <Typography variant="body2" component="p">
                            safety
                          </Typography>
                          <Rating
                            name="food-quality-rating"
                            value={comment.safety}
                            readOnly
                          />
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Box>
                          <Typography variant="body2" component="p">
                            Location
                          </Typography>
                          <Rating
                            name="service-rating"
                            value={comment.location}
                            readOnly
                          />
                        </Box>
                        <Box>
                          <Typography variant="body2" component="p">
                            Convenience
                          </Typography>
                          <Rating
                            name="menu-variety-rating"
                            value={comment.convenience}
                            readOnly
                          />
                        </Box>
                        <Box>
                          <Typography variant="body2" component="p">
                            staff
                          </Typography>
                          <Rating
                            name="ambience-rating"
                            value={comment.staff}
                            readOnly
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            ))
          )}
        </>
      )}

      {value === 1 &&
        (place.photos.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>No photos yet</h2>
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Top Photos
            </Typography>
            {place.photos.map((photo: any) => (
              <Box key={photo._id} sx={{ overflow: "hidden", width: "90%" }}>
                <CardContent
                  sx={{
                    position: "relative",
                    borderTop: "2px solid black",
                    borderBlockColor: "gainsboro",
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
                      width: "100%",
                      justifyContent: "end",
                    }}
                  >
                    <Box
                      sx={{
                        margin: "10px",
                        display: "flex",
                        backgroundColor: "white",
                        width: "100px",
                        height: "50px",
                        borderRadius: "50px",
                        border: "1px solid black",
                      }}
                    >
                      <IconButton onClick={upvote} sx={{ flex: "1" }}>
                        <ArrowUpwardIcon />
                      </IconButton>
                      <p style={{ flex: "1", fontWeight: "bold" }}>
                        {photo.score}
                      </p>
                      <IconButton onClick={downvote} sx={{ flex: "1" }}>
                        <ArrowDownwardIcon />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        onClick={(event) => handlePhotoClick(event, photo._id)}
                      >
                        <MoreHorizIcon sx={{ fontSize: "50px" }} />
                      </IconButton>
                      <Menu
                        anchorEl={photoAnchorEls[photo._id] || null}
                        open={Boolean(photoAnchorEls[photo._id])}
                        onClose={() => handlePhotoClose(photo._id)}
                      >
                        <MenuItem onClick={() => handlePhotoClose(photo._id)}>
                          Report
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigate(`/usersystem/${photo.userID}`);
                          }}
                        >
                          View Profile
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={`${photo.avatarImage}`}
                      alt="profile"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        objectFit: "cover",
                        marginRight: "10px",
                        objectPosition: "center",
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1">
                        {photo.username}
                      </Typography>
                      <Typography variant="caption">
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                          {photo.contribution}
                        </Box>{" "}
                        contributions
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="subtitle1">
                          {photo.rank}{" "}
                        </Typography>
                        <img
                          src={`/systemImage/${photo.rankImage}`}
                          alt="Adventure"
                          style={{
                            width: "20px",
                            height: "auto",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                    </Box>
                  </Box>
                  <Box>
                    <img
                      src={photo.image}
                      alt="image"
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Date:{" "}
                      {photo.dateOfTaken
                        ? format(parseISO(photo.dateOfTaken), "MMMM dd, yyyy")
                        : "Date not available"}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            ))}
          </>
        ))}
    </div>
  );
};

export default TopReviews;
