import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// Styles for the container
const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'inline-flex', // Use inline-flex to shrink the container to content size
  position: 'relative',
  padding: theme.spacing(1, 2),
  border: `1px solid transparent`, // No visible border
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  userSelect: 'none',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'white', // White text color
  '&:hover .menu': {
    display: 'block',
  },
}));

// Styles for the dropdown menu
const StyledMenu = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 10,
  display: 'none',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: 'white', // White background for the menu
  '& .menu-item': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    cursor: 'pointer',
    color: theme.palette.text.primary, // Black color for menu items text
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main, // Highlight color on hover
    },
  },
}));

export default function HoverDropdownMenu() {
  const [selectedCountry, setSelectedCountry] = React.useState('India'); // Default country

  const handleSelection = (country: string) => {
    setSelectedCountry(country); // Update displayed country
  };

  return (
    <StyledContainer>
      <span>{selectedCountry}</span> {/* Display the selected country */}
      <KeyboardArrowDownIcon />
      <StyledMenu className="menu">
        <Box className="menu-item" onClick={() => handleSelection('India')}>
          <Radio
            checked={selectedCountry === 'India'}
            sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} // Radio button color black
          />
          India
        </Box>
        <Box className="menu-item" onClick={() => handleSelection('Pakistan')}>
          <Radio
            checked={selectedCountry === 'Pakistan'}
            sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} // Radio button color black
          />
          Pakistan
        </Box>
      </StyledMenu>
    </StyledContainer>
  );
}
