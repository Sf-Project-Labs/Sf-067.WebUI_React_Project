import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import { Styles } from './Styles';

const FollowMedia = props => {
  return (
    <Box sx={Styles.followMedia}>
      <Box sx={Styles.follow}>Follow</Box>
      <Box sx={Styles.socialIcons}>
        <FacebookIcon sx={Styles.icons} />
        <TwitterIcon sx={Styles.icons} />
      </Box>
      <Box sx={Styles.socialIcons}>
        <GoogleIcon sx={Styles.icons} />
        <YouTubeIcon sx={Styles.icons} />
      </Box>
    </Box>
  );
};
export default FollowMedia;
