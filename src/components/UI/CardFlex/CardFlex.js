import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import { styles } from './styles';
import { useState } from 'react';

export const CardFlex = ({ image, title, subTitle, shouldHover, showArrow, sx = {} }) => {
  let hoverStyle = {};
  if (shouldHover) {
    hoverStyle = {
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#fff',
        boxShadow: '0px 7px 15px 2px #D2D2D2',
      },
    };
  }

  const [arrowIsDisplayed, setArrowIsDisplayed] = useState({ display: 'none' });

  return (
    <Card
      sx={{ ...sx, ...hoverStyle }}
      onMouseEnter={e => {
        setArrowIsDisplayed({ display: 'block' });
      }}
      onMouseLeave={e => {
        setArrowIsDisplayed({ display: 'none' });
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
          {showArrow && (
            <EastIcon
              fontSize='large'
              color='primary'
              sx={{ ...styles.arrowButton, ...arrowIsDisplayed }}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
