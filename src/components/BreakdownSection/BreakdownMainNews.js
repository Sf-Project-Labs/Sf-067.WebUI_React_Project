import { Card, CardMedia, CardHeader, CardContent, Typography } from '@mui/material';

import useStyles from './styles';

function BreakdownMainNews(props) {
  const classes = useStyles;
  return (
    <Card>
      <CardHeader
        title={props.data.category}
        sx={classes.category_tag}
        titleTypographyProps={{ variant: 'subtitle1' }}
      />
      <CardMedia component='img' height='197' image={props.data.image} alt={props.data.title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.data.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default BreakdownMainNews;
