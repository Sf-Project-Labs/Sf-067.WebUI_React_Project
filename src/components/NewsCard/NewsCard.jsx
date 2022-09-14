import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export const NewsCard = ({ image, title, subTitle }) => {
  return (
    <Card>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
