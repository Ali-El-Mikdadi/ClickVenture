import * as React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TimePeriodContext from '../../TimePeriodContext';  // import the context

export default function PickTimePeriod() {
  const { days, setDays } = React.useContext(TimePeriodContext);  // use the context
  const buttonSize = 50;

  const handleIncrement = () => {
    if (days < 7) {
      setDays(days + 1);
    }
  };

  const handleDecrement = () => {
    if (days > 1) {
      setDays(days - 1);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" style={{ fontFamily: 'Roboto', fontSize: 28, fontWeight: 'bold' }}>
        When do you want to go?
      </Typography>
      <Box maxWidth={480} mt={3} mb={buttonSize/10}>
        <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: 13 }}>
          Kindly specify the duration of your trip, ranging from a minimum of 1 day to a maximum of 7 days. Your selection will enable me to offer personalized suggestions and recommendations tailored to your preferred timeframe.
        </Typography>
      </Box>
      <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 300 }}>
        <IconButton onClick={handleDecrement} sx={{ color: '#007B80' }}>
          <RemoveIcon />
        </IconButton>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="body1" style={{ fontFamily: 'Roboto', fontSize: 16, color: '#007B80', fontWeight: 'bold' }}>
            Total Days
          </Typography>
          <TextField
            value={days}
            inputProps={{ min: 1, max: 7, type: 'number', readOnly: true, style: { textAlign: 'center' } }}
            variant="outlined"
            size="small"
          />
        </Box>
        <IconButton onClick={handleIncrement} sx={{ color: '#007B80' }}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
}