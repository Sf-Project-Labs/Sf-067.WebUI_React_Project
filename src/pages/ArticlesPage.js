import { Box } from '@mui/material';
import { Layout } from '../components/layout';
import { MoreArticlesSection } from '../components/MoreArticlesSection/MoreArticlesSection';

function ArticlesPage() {
  return (
    <Layout>
      <Box width={850} sx={{ margin: '50px auto' }}>
        <MoreArticlesSection />
      </Box>
    </Layout>
  );
}

export default ArticlesPage;
