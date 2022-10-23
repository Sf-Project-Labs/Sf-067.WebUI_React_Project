import { Box } from '@mui/material';
import { BreakdownSection } from '../components/BreakdownSection';
import { MostPopularMostCommented } from '../components/MostPopularMostCommentedSection';

function HomePage() {
  return (
    <Box width={850} sx={{ margin: '50px auto' }}>
      <BreakdownSection />
      <MostPopularMostCommented />
    </Box>
  );
}

export default HomePage;
