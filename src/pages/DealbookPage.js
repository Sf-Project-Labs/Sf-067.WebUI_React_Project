import { Box } from '@mui/material';
import { Layout } from '../components/layout';
import { MostPopularMostCommented } from '../components/MostPopularMostCommentedSection/MostPopularMostCommented';

function DealbookPage() {
  return (
    <Layout>
      <Box width={850} sx={{ margin: '50px auto' }}>
        <MostPopularMostCommented />
      </Box>
    </Layout>
  );
}

export default DealbookPage;
