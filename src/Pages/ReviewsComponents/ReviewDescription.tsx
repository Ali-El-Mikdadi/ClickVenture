import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Rating } from '@mui/material';
import Place1 from '../../images/Reviews/place1.png';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ReviewDescriptionProps {
  index: number;
}

const ReviewDescription: React.FC<ReviewDescriptionProps> = ({ index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box key={index} sx={{ marginTop: 2 }}>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={Place1} alt="Review" width={isMobile ? '50%' : '75'} height="63" />
        <Box sx={{ marginLeft: 2 }}>
        <Typography variant="body1" component="p" sx={{ fontSize: isMobile ? 10 : 12, fontWeight: 'bold' }}>
            Bahrain City Center
          </Typography>
          <Typography variant="body2" component="p" sx={{ fontSize: 10, color: '#989898' }}>
            Northern
          </Typography>
        </Box>
      </Box>
      <Rating name="read-only" value={index % 5 + 1} readOnly />

      <Typography variant="body1" component="p" sx={{ fontSize: 13, fontWeight: 'bold', marginTop: theme.spacing(1) }}>
        Title of your review for this place
        </Typography>
        <Typography variant="body2" component="p" sx={{ fontSize: 10, color: '#989898' }}>
            Written March 16, 2024
        </Typography>

        <Typography variant="body2" component="p" sx={{ marginTop: theme.spacing(1) }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non porta dui. Nunc turpis tortor, interdum eget eros in, egestas dictum dolor. Pellentesque vitae neque ac elit hendrerit placerat. Nullam pretium quam augue, id elementum nisl molestie eu. Sed quis nunc ac quam semper aliquam. Vivamus ipsum turpis, pharetra ut purus non, viverra volutpat orci. Vivamus lacus mi, ultrices viverra eros eget, tristique elementum risus. Morbi lobortis ipsum erat, at semper tellus ornare efficitur.
        </Typography>

        <Typography variant="body1" component="p" sx={{ fontSize: 12, fontWeight: 'bold', marginTop: theme.spacing(1) }}>
            Date Visited: March 2024
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: theme.spacing(1), marginTop: theme.spacing(1) }}>
        {['Service', 'Room Quality', 'Facilities', 'Location', 'Cleanliness', 'Ambiance'].map((rating, index) => (
          <Box key={index}>
            <Typography variant="body2" component="p" sx={{ fontSize: 10, color: '#989898' }}>
              {rating}
            </Typography>
            <Rating name={`rating-${index}`} value={index % 5 + 1} readOnly />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewDescription;