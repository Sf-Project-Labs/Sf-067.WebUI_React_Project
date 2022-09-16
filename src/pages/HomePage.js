import { Box } from '@mui/material';
import { BreakdownSection } from '../components/BreakdownSection';

function HomePage() {
  return (
    <Box width={850} sx={{ margin: '50px auto' }}>
      <BreakdownSection />
    </Box>
  );
}

export default HomePage;
