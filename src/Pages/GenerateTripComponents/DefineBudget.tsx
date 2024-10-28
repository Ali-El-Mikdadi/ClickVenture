import * as React from 'react';
import { Box, Typography, Slider, TextField, useTheme, useMediaQuery } from '@mui/material';
import BudgetContext from '../../BudgetContext';

export default function DefineBudget() {
  const { budget, setBudget } = React.useContext(BudgetContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setBudget(newValue as number[]);
  };

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === '' ? 0 : Number(event.target.value);
    const newBudget = [...budget];
    newBudget[index] = value;
    setBudget(newBudget);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" style={{ fontFamily: 'Roboto', fontSize: isMobile ? 20 : 28, fontWeight: 'bold' }}>
        What's your budget?
      </Typography>
      <Box maxWidth={isMobile ? 300 : 480} mt={3} mb={5}>
        <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: isMobile ? 11 : 13 }}>
          Adjust the slider to define your budget range. This will help us tailor the trip to your financial preferences.
        </Typography>
      </Box>
      <Box sx={{ width: isMobile ? 250 : 300, mt: 2 }}>
        <Slider
          value={budget}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={1000}
        />
      </Box>
      <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between', width: isMobile ? 250 : 300 }}>
        <TextField
          value={budget[0]}
          onChange={handleInputChange(0)}
          inputProps={{ min: 0, max: 1000, type: 'number' }}
          variant="outlined"
          size="small"
        />
        <TextField
          value={budget[1]}
          onChange={handleInputChange(1)}
          inputProps={{ min: 0, max: 1000, type: 'number' }}
          variant="outlined"
          size="small"
        />
      </Box>
      <Box mt={2}>
        <Typography variant="body1" style={{ fontFamily: 'Roboto', fontSize: isMobile ? 14 : 16 }}>
          Budget Range: {budget[0]} BHD - {budget[1]} BHD
        </Typography>
      </Box>
    </Box>
  );
}