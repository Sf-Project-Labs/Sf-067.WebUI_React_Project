import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import { styles } from './styles';

export const SortSurveys = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const sortOptions = ['most popular', 'oldest first', 'newest first'];
  const mapedSortOptions = sortOptions.map((listitem, index) => {
    return (
      <ListItemButton sx={styles.sortCommentsList} key={index} disableRipple>
        {listitem}
      </ListItemButton>
    );
  });

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
          <List sx={styles.sortCommentsList}>
            <ListItemButton
              onClick={handleClick}
              sx={{
                '&:hover': { color: 'black', background: '#f1f1f1' },
                top: '-15px',
                right: '-10px',
              }}
              disableRipple
            >
              <ListItemText primary='sort by: Most popular' sx={{ fontWeight: '700' }} />
              {open ? <ExpandLessIcon fontSize='small' /> : <ExpandMoreIcon fontSize='small' />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {mapedSortOptions}
              </List>
            </Collapse>
          </List>
        </Box>
      </Box>
    </>
  );
};
