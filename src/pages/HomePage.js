import { Box } from '@mui/material';
import { BreakdownSection } from '../components/BreakdownSection';
import { MainArticles } from '../components/MainArticles';
function HomePage() {
  return (
    <Box width={850} sx={{ margin: '50px auto' }}>
      <MainArticles />
      <BreakdownSection />
    </Box>
  );
}

export default HomePage;
