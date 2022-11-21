import { Box } from '@mui/material';
import { PersonalPageLayout } from '../components/layout/PersonalPageLayout';

function UserPage() {
  return (
    <PersonalPageLayout>
      <Box width={850} sx={{ margin: '50px auto 50px 30px' }}>
        <h1> User page components should be placed here. </h1>
      </Box>
    </PersonalPageLayout>
  );
}

export default UserPage;
