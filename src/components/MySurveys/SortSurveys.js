import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styles } from './styles';
import { SortList } from '../UserComments/SortList';

export const SortSurveys = () => {
  return (
    <>
      <Box sx={styles.sortCommentsElement}>
        <Box sx={{ display: 'flex', width: '75%' }}>
          <Box sx={{ width: '50%' }}>
            <Typography variant='h6' sx={{ paddingBottom: '2px' }}>
              QUESTIONS
            </Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant='h6' sx={{ paddingBottom: '2px', float: 'right' }}>
              DUE DATE
            </Typography>
          </Box>
        </Box>
        <Box>
          <SortList />
        </Box>
      </Box>
    </>
  );
};
