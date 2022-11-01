import React from 'react';
import { Styles } from './Styles';
import Buttons from './Buttons2';
import Box from '@mui/material/Box';

const VerticalMenu2 = props => {
  return (
    <Box sx={Styles.VerticalMenu2}>
      <Box sx={Styles.buttonWrapper}>
        <Box sx={Styles.redElement}></Box>
        <Buttons />
      </Box>
    </Box>
  );
};

export default VerticalMenu2;
