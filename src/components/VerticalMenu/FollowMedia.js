import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Styles } from './Styles';

const FollowMedia = props => {
  return (
    <div style={Styles.followMedia}>
      <div style={Styles.follow}>Follow</div>
      <div style={Styles.socialIcons}>
        <FacebookIcon style={Styles.icons} />
        <TwitterIcon style={Styles.icons} />
      </div>
      <div style={Styles.socialIcons}>
        <GoogleIcon style={Styles.icons} />
        <YouTubeIcon style={Styles.icons} />
      </div>
    </div>
  );
};
export default FollowMedia;
