import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { styles } from '../../BreakdownSection/styles';

export const CardFlex = ({ image, title, subTitle, sx = {} }) => {
  const [style, setStyle] = useState({ display: 'none' });
  return (
    <Card
      sx={sx}
      onMouseEnter={e => {
        setStyle({ display: 'block' });
      }}
      onMouseLeave={e => {
        setStyle({ display: 'none' });
      }}
    >
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia
          height={100}
          width={150}
          component='img'
          image={image}
          alt={title}
          sx={{ width: 150 }}
        />
        <CardContent sx={{ py: 0 }}>
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='body2' color='text.secondary'>
            {subTitle}
          </Typography>
          <Button size='small' sx={{ ...style, ...styles.arrowButton }}>
            <AiOutlineArrowRight />
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
