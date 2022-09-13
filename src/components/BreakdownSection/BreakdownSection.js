import BreakdownMainNews from './BreakdownMainNews';
import BreakdownSideNews from './BreakdownSideNews';
import { Container, Grid } from '@mui/material';

import SectionTitle from '../UI/SectionTitle';

function BreakdownSection(props) {
  return (
    <Container maxWidth='md'>
      <SectionTitle title='Breakdown' />
      <Grid container spacing={4} justifyContent='center' alignItems='center' wrap='nowrap'>
        <Grid container item spacing={4}>
          {props.main.map(news => (
            <Grid item key={news.id}>
              <BreakdownMainNews data={news} key={news.id} />
            </Grid>
          ))}
        </Grid>
        <Grid container item spacing={4}>
          <Grid container item justifyContent='center' alignItems='center'>
            {props.side.map(news => (
              <Grid item key={news.id}>
                <BreakdownSideNews data={news} key={news.id} />
              </Grid>
            ))}
          </Grid>
          <Grid container item justifyContent='center' alignItems='center'>
            {props.side.map(news => (
              <Grid item key={news.id}>
                <BreakdownSideNews data={news} key={news.id} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BreakdownSection;
