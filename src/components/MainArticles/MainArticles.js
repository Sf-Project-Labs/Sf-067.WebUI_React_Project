import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { articles } from './MainArticlesData.js';
import { NewsCard } from '../NewsCard';
import { MainImage } from '../MainImage';

export const MainArticles = () => {
  return (
    <Container
      disableGutters={true}
      sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      <MainImage />

      <Grid container marginY={1.8}>
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </Grid>
    </Container>
  );
};
