import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';
import { UserCommentIvan } from './UserCommentIvan';
import { UserCommentTom } from './UserCommentTom';

export const ViewComments = () => {
  return (
    <>
      <Box sx={styles.displayCommentsElement}>
        <UserCommentIvan />
        <UserCommentTom />
      </Box>
    </>
  );
};
