import { Container, Typography } from '@mui/material';

import useStyles from '../BreakdownSection/styles';

function SectionTitle(props) {
  const classes = useStyles;

  return (
    <Container sx={classes.title_container} disableGutters={true}>
      <hr />
      <Typography variant='h4' sx={classes.title}>
        {props.title}
      </Typography>
    </Container>
  );
}

export default SectionTitle;
