import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { styles } from './styles';

export const MainNewsCard = ({ category, image, title, sx = {} }) => {
  return (
    <Card sx={sx}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
