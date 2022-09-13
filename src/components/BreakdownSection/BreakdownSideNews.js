import { Card, Typography, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

import useStyles from './styles';

const CardContentNoPadding = styled(CardContent)(`
  padding: 10px 0;
  &:last-child {
    padding-bottom: 14px;
  }
`);

function BreakdownSideNews(props) {
  const classes = useStyles;
  return (
    <Card sx={classes.card}>
      <CardMedia
        component='img'
        height='105'
        image={props.data.image}
        alt={props.data.title}
        sx={{ width: '151px' }}
      />
      <CardContentNoPadding>
        <Typography variant='h6'>{props.data.title}</Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.data.subTitle}
        </Typography>
      </CardContentNoPadding>
    </Card>
  );
}

export default BreakdownSideNews;
