import { Box } from '@mui/material';
import { Layout } from '../components/layout';
import { MoreArticlesSection } from '../components/MoreArticlesSection/MoreArticlesSection';
import { Comments } from '../components/UserComments/Comments';
import { ArticleText } from '../components/ArticleText/ArticleText';

function ArticlesPage() {
  return (
    <Layout>
      <Box width={850} sx={{ margin: '50px auto' }}>
        <ArticleText />
        <Comments />
        <MoreArticlesSection />
      </Box>
    </Layout>
  );
}

export default ArticlesPage;
