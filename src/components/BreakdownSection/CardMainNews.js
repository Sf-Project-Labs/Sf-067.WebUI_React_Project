import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { styles } from './styles';

import { AiOutlineArrowRight } from 'react-icons/ai';

export const CardMainNews = ({ category, image, title, sx = {} }) => {
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
      <CardActionArea>
        <CardHeader
          title={category}
          sx={styles.cardHeader}
          titleTypographyProps={{ variant: 'subtitle1' }}
        />
        <CardMedia component='img' height={200} image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Button size='small' sx={{ ...style, ...styles.arrowButton }}>
            <AiOutlineArrowRight />
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
