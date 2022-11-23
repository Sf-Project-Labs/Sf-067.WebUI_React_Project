import { Box } from '@mui/material';
import { PersonalPageLayout } from '../components/layout/PersonalPageLayout';
import { AccountMenu } from '../components/UI/AccountMenu/AccountMenu';

function UserPage() {
  return (
    <PersonalPageLayout>
      <Box width={850} sx={{ margin: '50px auto 50px 30px' }}>
        <AccountMenu />
      </Box>
    </PersonalPageLayout>
  );
}

export default UserPage;
