import { Box } from '@mui/material';
import { BreakdownSectionExample } from './components/BreakdownSectionExample';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HomePage />
      <Box width={850} sx={{ margin: '50px auto' }}>
        <BreakdownSectionExample />
      </Box>
    </>
  );
}

export default App;
