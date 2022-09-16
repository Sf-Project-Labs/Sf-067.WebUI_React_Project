import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { Section } from '../UI/Section';
import { CardMainNews } from './CardMainNews';
import { breakdownNews } from './mockData';
import { CardFlex } from '../UI/CardFlex';

function BreakdownSection() {
  return (
    <Section title='Breakdown'>
      <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
        {breakdownNews.map(news => (
          <Fragment key={news.main.id}>
            <Grid item xs={6}>
              <CardMainNews {...news.main} />
            </Grid>
            <Grid item xs={6}>
              {news.additional.map(news => (
                <CardFlex {...news} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Section>
  );
}

export default BreakdownSection;
