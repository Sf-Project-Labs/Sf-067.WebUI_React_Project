import { Box } from '@mui/material';
import MainArticles from '../components/MainArticles/MainArticles';

function HomePage() {
  return (
    <Box width={813} sx={{ margin: '50px auto' }}>
      <MainArticles />
    </Box>
  );
}

export default HomePage;
