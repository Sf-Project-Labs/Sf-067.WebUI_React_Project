import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { Section } from '../UI/Section';
import { CardMainNews } from './CardMainNews';
import { breakdownNews } from './mockData';
import { CardFlex } from '../UI/CardFlex';

export const BreakdownSection = () => {
  return (
    <Section title='Breakdown'>
      <Grid container spacing={4} alignItems='stretch'>
        {breakdownNews.map(news => (
          <Fragment key={news.main.id}>
            <Grid item xs={6}>
              <CardMainNews {...news.main} />
            </Grid>
            <Grid container item xs={6}>
              {news.additional.map(news => (
                <CardFlex {...news} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Section>
  );
};
