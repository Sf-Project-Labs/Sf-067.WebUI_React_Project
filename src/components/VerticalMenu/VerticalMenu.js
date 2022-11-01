import React from 'react';
import FollowMedia from './FollowMedia';
import MenuButtons from './MenuButtons';
import Box from '@mui/material/Box';
import { Styles } from './Styles.js';

const VerticalMenu = props => {
  return (
    <>
      <Box sx={Styles.verticalMenu}>
        <Box sx={Styles.greyAttribute}></Box>
        <MenuButtons />
        <FollowMedia />
      </Box>
    </>
  );
};
export default VerticalMenu;
