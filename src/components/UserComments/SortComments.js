import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';
import { SortList } from './SortList';

const SortComments = () => {
  const comments = 2;
  return (
    <Box sx={styles.sortCommentsElement}>
      <Typography variant='h5'> {`COMMENTS (${comments})`} </Typography>
      <SortList />
    </Box>
  );
};

export default SortComments;
