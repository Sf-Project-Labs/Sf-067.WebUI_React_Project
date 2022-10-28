import { Box } from '@mui/material';
import { BreakdownSection } from '../components/BreakdownSection';
import { MostPopularMostCommented } from '../components/MostPopularMostCommentedSection';

import { MainArticles } from '../components/MainArticles';
import { PhotoOfTheDay } from '../components/PhotoOfTheDay';
function HomePage() {
  return (
    <Box width={850} sx={{ margin: '50px auto' }}>
      <MainArticles />
      <BreakdownSection />
      <PhotoOfTheDay />
      <MostPopularMostCommented />
    </Box>
  );
}

export default HomePage;
