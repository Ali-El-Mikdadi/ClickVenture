import * as React from 'react';
import { Box, Stepper, Step, StepLabel, Button, StepConnector, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";

interface StepperComponentProps {
  activeStep: number;
  steps: string[];
  handleBack: () => void;
  handleNext: () => void;
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  '&.MuiStepConnector-root': {
    lineHeight: 1.5,
  },
  '& .MuiStepConnector-line': {
    borderColor: '#FFD166',
  },
}));

const StepperComponent: React.FC<StepperComponentProps> = ({ activeStep, steps, handleBack, handleNext }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} connector={<ColorlibConnector />} sx={{ padding: isMobile ? '0' : '24px' }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconProps={{ completed: activeStep > index, active: activeStep === index }}>
              {!isMobile && label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1, justifyContent: 'space-between', marginLeft: '1rem', marginRight: '1rem' }}>
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ backgroundColor: '#FFD166', '&:hover': { backgroundColor: '#CCAA52' }, borderRadius: '15px', color: '#fff' }}>
          Back
        </Button>
        <Button 
          onClick={() => {
            if (activeStep === steps.length - 1) {
              navigate("/GenerateResult");
            } else {
              handleNext();
            }
          }} 
          sx={{ backgroundColor: '#205E60', '&:hover': { backgroundColor: '#16473C' }, borderRadius: '15px', color: '#fff' }}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default StepperComponent;