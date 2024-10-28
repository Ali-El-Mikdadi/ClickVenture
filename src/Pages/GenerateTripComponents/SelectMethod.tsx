import * as React from 'react';
import { Card, CardContent, Typography, Box, Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText } from '@mui/material';
import BasicIcon from '@mui/icons-material/ColorLens';
import AdvancedIcon from '@mui/icons-material/AutoAwesome';
import { DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SelectMethodProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

export default function SelectMethod({ activeStep, setActiveStep }: SelectMethodProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBasic = () => {
    setActiveStep(activeStep + 1);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/GenerateResult");
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Card sx={{ width: '48%', height: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Basic
          </Typography>
          <Button variant="contained" startIcon={<BasicIcon />} onClick={handleBasic} sx={{ width: '100%', height: '50px', mt: 2 }}>Select</Button>
        </CardContent>
      </Card>
      <Card sx={{ width: '48%', height: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Advanced
          </Typography>
          <Button variant="contained" startIcon={<AdvancedIcon />} onClick={handleOpen} sx={{ width: '100%', height: '50px', mt: 2 }}>Select</Button>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>AI Trip Planner</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Welcome to the advanced AI trip planner. Here, you can customize your trip to your liking. Just enter your prompt, sit back relax and let our AI do the rest.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Text Here"
            type="text"
            fullWidth
            variant="standard"
            multiline
            rows={4}
            sx={{ overflow: 'auto' }}
            />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '100%', mt: 2 }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}