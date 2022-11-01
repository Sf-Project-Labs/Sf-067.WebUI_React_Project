import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { styles } from './Styles.js';
import SiteSearch from './SiteSearch.js';
import SocialMediaShare from './SocialMediaShare.js';
import UserMenuList from './UserMenuList.js';
import SelectLanguage from './SelectLanguage.js';

/* There are still a few thigs for me to do with the header
1. to remove the search form bottom border effect, because disableUnderline does not work.
2. to change the language select, and user dropdown styles (the hover effect). 
*/

function Header() {
  return (
    <Box sx={styles.headerWrapper}>
      <Box sx={styles.logo}>
        <Typography variant='h5' sx={{ color: 'white' }}>
          Sports Hub
        </Typography>
      </Box>

      <Box sx={styles.searchWrapper}>
        <SiteSearch />
      </Box>

      <Box sx={styles.socialMediaWrapper}>
        <SocialMediaShare />
      </Box>

      <Box sx={styles.userInfoWrapper}>
        <UserMenuList />
        <SelectLanguage />
      </Box>
    </Box>
  );
}

export default Header;
