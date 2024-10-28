import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  CardMedia,
  Rating,
  useMediaQuery,
  useTheme,
  Skeleton
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Place } from '../../../../api/SchemaDb';
import { Link } from 'react-router-dom';

const PopularPlacesCards = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [place, setPlace] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft === scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const element = scrollContainerRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        if (element) {
          element.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

useEffect(() => {
  axios.get('http://localhost:4000/api/data')
    .then(response => {
      const shuffledData = [...response.data];
      for (let i = shuffledData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
      }
      const filteredData = shuffledData.filter(place => place.rate >= 4.5); // Filter places with rating >= 4.5
      setPlace(filteredData);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      setIsLoading(false);
    });
}, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center", mb: 2, fontWeight: 600, color: "rgb(242, 183, 100)" }}>
        Trending Places
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mb: 4, fontWeight: 500 }}>
        Check Popular Places
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!isMobile && (
          <Box sx={{ borderRadius: "50%", backgroundColor: "rgb(138, 171, 198)", p: 1 }}>
            <IconButton style={{ color: isAtStart ? "gray" : "white" }} onClick={() => scrollContainerRef.current?.scrollBy({ left: -1165, behavior: 'smooth' })}>
              <ArrowBackIcon />
            </IconButton>
          </Box>
        )}
        <Box ref={scrollContainerRef} sx={{ overflowX: "auto", display: "flex", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          {isLoading ? (
            Array.from(new Array(5)).map((_, index) => (
              <Box key={index} sx={{ minWidth: 275, mx: 1 }}>
                <Skeleton variant="rectangular" width={210} height={256} />
                <Box sx={{ px: 2, py: 1 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
            ))
          ) : (
            place.map((place) => (
              <Link key={place._id?.toString()} to={`/places/${place._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Box key={place.id} sx={{ minWidth: 275, mx: 1 }}>
                <Card sx={{ borderRadius: "10px", boxShadow: "none", overflow: "hidden", transform: "scale(0.95)", transition: "transform 0.3s", "&:hover": { transform: "scale(1)" } }}>
                  <CardMedia component="img" height="256" width="256" src={`/systemImage/${place.imagePlace[0]}`} alt="card image" />
                  <CardContent sx={{ height: "150px", overflow: "hidden", backgroundColor: "rgb(255, 246, 228)" }}>
                    <Typography variant="h5" component="div" sx={{ height: "3em", overflow: "hidden" }}>
                      {place.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Rating name="read-only" value={place.rate || 0} precision={0.5} readOnly />
                      <Typography variant="body2" component="span">
                        {(place.rate || 0).toFixed(1)}
                      </Typography>
                    </Box>
                    <Typography variant="body1" component="div" sx={{ textTransform: "capitalize" }}>
                      {place.category.replace(/([a-z])([A-Z])/g, '$1 $2')} {" • "} {place.type}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              </Link>
            ))
          )}
        </Box>
        {!isMobile && (
          <Box sx={{ borderRadius: "50%", backgroundColor: "rgb(138, 171, 198)", p: 1 }}>
            <IconButton style={{ color: isAtEnd ? "gray" : "white" }} onClick={() => scrollContainerRef.current?.scrollBy({ left: 1165, behavior: 'smooth' })}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PopularPlacesCards;