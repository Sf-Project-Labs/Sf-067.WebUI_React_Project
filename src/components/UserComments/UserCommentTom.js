import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { styles } from './styles';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export const UserCommentTom = props => {
  const tom = props.comments;
  return (
    <>
      <Box sx={styles.avatarAndNameWrapper}>
        <Box sx={styles.commenterAvatar}>
          <Avatar
            alt={`${tom.name}`}
            src='https://cdn.pixabay.com/photo/2022/07/24/23/46/artificial-intelligence-7342613__340.jpg'
            sx={{ width: '35', height: '35' }}
          />
        </Box>
        <Box>
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', paddingTop: '5px' }}>
              {tom.name}
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
              {tom.date}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.userCommentBox}>
        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}> {tom.post}</Typography>
      </Box>

      <Box sx={styles.userLikesDislikesBox}>
        <Box sx={styles.likeAndDislike}>
          <ThumbUpOffAltIcon sx={styles.icon} />
          <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#7F8899' }}>
            {tom.likes}
          </Typography>
          <ThumbDownOffAltIcon sx={styles.icon} />
          <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#7F8899' }}>
            {tom.dislikes}
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
            Comment
          </Button>
        </Box>
      </Box>
    </>
  );
};
