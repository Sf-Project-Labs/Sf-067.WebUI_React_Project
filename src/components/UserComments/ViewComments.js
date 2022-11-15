import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';
import { UserCommentIvan } from './UserCommentIvan';
import { UserCommentTom } from './UserCommentTom';

export const ViewComments = () => {
  const tom = {
    name: 'Tom Chanter',
    date: new Date().toDateString(),
    edited: true,
    post: `Interesting article. Personally I am trying to slowly move away from Whatsapp as
     I am doing with Facebook. Most of the Whatsapp group I belong to are permanently on mute;`,
    likes: 15,
    dislikes: 2,
  };

  const ivan = {
    name: 'Ivan Baloh',
    date: new Date().toDateString(),
    edited: true,
    post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printertook a galley of type and scrambled it to make a type specimen book.`,
    likes: 4,
    dislikes: 12,
  };

  return (
    <>
      <Box sx={styles.displayCommentsElement}>
        <UserCommentIvan comments={ivan} />
        <UserCommentTom comments={tom} />
      </Box>
    </>
  );
};
