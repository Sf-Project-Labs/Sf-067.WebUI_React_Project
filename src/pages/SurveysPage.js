import { Box } from '@mui/material';
import { PersonalPageLayout } from '../components/layout/PersonalPageLayout';
import { MySurveys } from '../components/MySurveys/MySurveys';

function SurveysPage() {
  return (
    <PersonalPageLayout>
      <Box width={850} sx={{ margin: '50px auto 50px 30px' }}>
        <MySurveys />
      </Box>
    </PersonalPageLayout>
  );
}

export default SurveysPage;
