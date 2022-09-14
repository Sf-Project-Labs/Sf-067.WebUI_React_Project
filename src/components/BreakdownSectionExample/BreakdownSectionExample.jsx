import { Grid } from '@mui/material';
import { Section } from '../Section';
import { NewsCard } from '../NewsCard';
import { MainNewsCard } from './MainNewsCard';
import { breakdownNews } from './mockData';
import { Fragment } from 'react';

export const BreakdownSectionExample = () => {
  return (
    <Section title='breakdown'>
      <Grid container spacing={4} alignItems='center'>
        {breakdownNews.map(news => (
          <Fragment key={news.main.id}>
            <Grid item xs={6}>
              <MainNewsCard {...news.main} />
            </Grid>
            <Grid item xs={6}>
              {news.additional.map(news => (
                <NewsCard {...news} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Section>
  );
};
