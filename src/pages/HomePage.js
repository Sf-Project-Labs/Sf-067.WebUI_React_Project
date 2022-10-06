import { Box } from '@mui/material';
import { BreakdownSection } from '../components/BreakdownSection';
import Wrapper from '../components/UI/Wrapper';
import VerticalMenu from '../components/VerticalMenu/VerticalMenu';
import VerticalMenu2 from '../components/VerticalMenu2/VerticalMenu2';
import VerticalMenu3 from '../components/VerticalMenu3/VerticalMenu3';

function HomePage() {
  return (
    <>
      <Box width={850} sx={{ margin: '50px auto' }}>
        <BreakdownSection />
      </Box>
      <Wrapper>
        <VerticalMenu />
        <VerticalMenu2 />
        <VerticalMenu3 />
      </Wrapper>
    </>
  );
}

export default HomePage;
