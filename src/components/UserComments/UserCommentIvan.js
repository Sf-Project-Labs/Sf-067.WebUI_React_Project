import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { styles } from './styles';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export const UserCommentIvan = props => {
  const ivan = props.comments;
  return (
    <>
      <Box sx={styles.avatarAndNameWrapper}>
        <Box sx={styles.commenterAvatar}>
          <Avatar
            alt={`${ivan.name}`}
            src='https://media.istockphoto.com/photos/hologram-human-head-deep-learning-and-artificial-intelligence-picture-id1364105164?b=1&k=20&m=1364105164&s=170667a&w=0&h=0Ehy6gPN70RTirKZ3TP3I0zoQz3bEFpzfSWfi0MhYd8='
            sx={{ width: '35', height: '35' }}
          />
        </Box>
        <Box>
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', paddingTop: '5px' }}>
              {ivan.name}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#979797',
                display: 'inline',
              }}
            >
              {ivan.date}
              <Typography
                sx={{ fontSize: '12px', fontWeight: '600', color: '#D4D9E2', display: 'inline' }}
              >
                Edited
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.userCommentBox}>
        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}> {ivan.post} </Typography>
      </Box>

      <Box sx={styles.userLikesDislikesBox}>
        <Box sx={styles.likeAndDislike}>
          <ThumbUpOffAltIcon sx={styles.icon} />
          <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#7F8899' }}>
            {ivan.likes}
          </Typography>
          <ThumbDownOffAltIcon sx={styles.icon} />
          <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#7F8899' }}>
            {ivan.dislikes}
          </Typography>
        </Box>
        <Box sx={styles.modifyComment}>
          <Button
            variant='text'
            sx={{
              color: '#7F8899',
              marginRight: '10px',
              '&:hover': { color: 'black', background: '#FFFFFF' },
            }}
            disableRipple
          >
            Edit
          </Button>
          <Button
            variant='text'
            sx={{
              color: '#7F8899',
              marginRight: '10px',
              '&:hover': { color: 'black', background: '#FFFFFF' },
            }}
            disableRipple
          >
            Comment
          </Button>
          <Button
            variant='text'
            sx={{
              color: '#7F8899',
              marginRight: '10px',
              '&:hover': { color: 'black', background: '#FFFFFF' },
            }}
            disableRipple
          >
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
};
