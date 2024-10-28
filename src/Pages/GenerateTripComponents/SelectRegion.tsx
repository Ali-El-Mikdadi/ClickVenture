import * as React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/system';
import region1 from '../../images/GenerateTrip/region1.png';
import region2 from '../../images/GenerateTrip/region2.png';
import region3 from '../../images/GenerateTrip/region3.png';
import region4 from '../../images/GenerateTrip/region4.png';
import RegionContext from '../../RegionContext';

const ImageLabel = styled('span')({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#fff',
  fontWeight: 'bold',
  padding: 8,
  textAlign: 'center',
  width: '100%',
  boxSizing: 'border-box',
  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
});

const regions = [
  { label: 'Capital', img: region1 },
  { label: 'Northern', img: region2 },
  { label: 'Southern', img: region3 },
  { label: 'Muharraq', img: region4 },
];

export default function SelectRegion() {
  const { selectedRegion, setSelectedRegion } = React.useContext(RegionContext);

  const handleSelect = (region: string) => {
    if (selectedRegion.includes(region)) {
      setSelectedRegion(selectedRegion.filter(r => r !== region));
    } else {
      setSelectedRegion([...selectedRegion, region]);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" style={{ fontFamily: 'Roboto', fontSize: 28, fontWeight: 'bold' }}>
        Which region are you interested in?
      </Typography>
      <Box maxWidth={480} mt={3} mb={5}>
        <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: 13 }}>
            Choose your starting region for your trip carefully, as this decision will determine the scope of the AI's knowledge. By selecting a specific region, you limit the AI's responses to that area. Alternatively, if you opt not to specify a region, the AI will have the freedom to draw from a diverse range of locations across various zones.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
        {regions.map((region) => (
            <ButtonBase
            focusRipple
            key={region.label}
            onClick={() => handleSelect(region.label)}
            sx={{
                position: 'relative',
                width: 172,
                height: 194,
                m: 1,
                borderRadius: 1,
                transition: '0.3s',
                border: selectedRegion.includes(region.label) ? '2px solid #FFD166' : 'none',
                '&:hover': {
                transform: 'scale(1.1)',
                },
                '&:focus-visible': {
                outline: 'solid',
                },
                '& img': {
                width: '100%',
                height: '100%',
                },
            }}
            >
            <img src={region.img} alt={region.label} />
            <ImageLabel>{region.label}</ImageLabel>
            </ButtonBase>
        ))}
      </Box>
    </Box>
  );
}