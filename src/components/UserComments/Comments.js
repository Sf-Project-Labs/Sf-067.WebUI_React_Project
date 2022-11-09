import React, { Fragment } from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';
import { SortComments } from './SortComments';
import { AddComment } from './AddComment';
import { ViewComments } from './ViewComments';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

export const Comments = () => {
  return (
    <Fragment>
      <Box sx={styles.mainComponent}>
        <SortComments />
        <AddComment />
        <ViewComments />
        <Box sx={styles.showMoreButton}>
          <Button
            variant='text'
            sx={{
              color: '#7F8899',
              margin: '0',
              '&:hover': { color: 'black', background: '#FFFFFF' },
            }}
            disableRipple
          >
            Show more
          </Button>
          <ExpandMoreIcon fontSize='small' sx={{ padding: '0', color: '#7F8899' }} />
        </Box>
      </Box>
    </Fragment>
  );
};
