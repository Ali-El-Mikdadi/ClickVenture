import * as React from 'react';
import { Box, Typography, ButtonBase, CardContent } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GroupSizeContext from '../../GroupSizeContext';

export default function GroupSize() {
  const groupSizes = [
    { title: 'Solo traveler', icon: <PersonIcon fontSize="large" /> },
    { title: 'Duo travelers', icon: <PeopleIcon fontSize="large" /> },
    { title: 'Friends', icon: <GroupsIcon fontSize="large" /> },
    { title: 'Family', icon: <FamilyRestroomIcon fontSize="large" /> },
  ];

  const { groupSize, setGroupSize } = React.useContext(GroupSizeContext);

  const handleSelect = (group: string) => {
    setGroupSize(group);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" style={{ fontFamily: 'Roboto', fontSize: 28, fontWeight: 'bold' }}>
        Who are you traveling with?
      </Typography>
      <Box maxWidth={480} mt={3}>
        <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: 13 }}>
          Please select the size of your group. This will help us provide the best recommendations for your trip.
        </Typography>
      </Box>
      <Box mt={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
      {groupSizes.map((group) => (
        <ButtonBase
          focusRipple
          key={group.title}
          onClick={() => handleSelect(group.title)}
          sx={{
            width: 345,
            height: 194,
            borderRadius: 1,
            border: group.title === groupSize ? '2px solid #205E60' : 'none',
          }}
        >
          {group.icon}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {group.title}
            </Typography>
          </CardContent>
        </ButtonBase>
      ))}
      </Box>
    </Box>
  );
}