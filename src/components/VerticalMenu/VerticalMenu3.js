import React from 'react';
import { Styles } from '../VerticalMenu/Styles';
import Buttons from './Buttons3';
import Box from '@mui/material/Box';

/*--------------------------------------------------------------------
this element is built, but not in use at this stage of development
 -------------------------------------------------------------------*/

const VerticalMenu3 = () => {
  return (
    <Box sx={Styles.verticalMenu3} style={{ display: 'none' }}>
      <Box sx={Styles.buttonWrapper}>
        <Buttons />
      </Box>
    </Box>
  );
};

export default VerticalMenu3;
