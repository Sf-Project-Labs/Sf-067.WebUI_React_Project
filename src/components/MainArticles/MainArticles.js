import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import NewsCard from '../Card/NewsCard';
import MainImage from '../MainImage/MainImage';
import { articles } from '../Data/MainArticlesData.js';

const MainArticles = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <MainImage />

      <Grid container marginY={1.8} spacing={1}>
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </Grid>
    </Container>
  );
};

export default MainArticles;
