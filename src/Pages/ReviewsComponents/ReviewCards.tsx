import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, IconButton, Typography, Box, Rating } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Place1 from '../../images/Reviews/place1.png';
import Place2 from '../../images/Reviews/place2.png';
import Place3 from '../../images/Reviews/place3.png';
import Place4 from '../../images/Reviews/place4.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const images = [Place1, Place2, Place3, Place4];

interface ReviewCardProps {
  index: number;
}

const places = [
    { name: 'Bahrain City Center', description: 'Northern' },
    { name: 'China Garden', description: 'Northern' },
    { name: 'Sofitel Bahrain Zallaq', description: 'Southern' },
    { name: 'Gulf Hotel Bahrain', description: 'Muharraq' },
  ];
  
  const ReviewCard: React.FC<ReviewCardProps> = ({ index }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const image = images[index];
    const place = places[index];

    return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card key={index} sx={{ borderRadius: 3, width: isMobile ? '100%' : 364, height: 101}}>
        <Grid container>
          <Grid item xs={4}>
            <Box sx={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CardMedia
                component="img"
                height="78"
                image={image}
                alt={`place${index + 1}`}
                sx={{ width: 96, borderRadius: 3 }}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <CardContent sx={{ position: 'relative', pb: 0 }}>
            <IconButton aria-label="settings" sx={{ position: 'absolute', top: theme.spacing(1), right: theme.spacing(1) }}>
                <MoreHorizIcon />
            </IconButton>
              <Typography variant="body1" component="p" sx={{ fontSize: 12, fontWeight: 'bold' }}>
                {place.name}
              </Typography>
  
              <Typography variant="body2" component="p" sx={{ fontSize: 10, color: '#989898' }}>
                {place.description}
              </Typography>
              <Rating name="read-only" value={index % 5 + 1} readOnly />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
    );
  };

export default ReviewCard;