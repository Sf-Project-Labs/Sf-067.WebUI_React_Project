import { Box } from '@mui/material';
import { MoreArticlesSection } from '../components/MoreArticlesSection/MoreArticlesSection';

function ArticlesPage() {
  return (
    <Box width={850} sx={{ margin: '50px auto' }}>
      <MoreArticlesSection />
    </Box>
  );
}

export default ArticlesPage;
