import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { styles } from './styles';
import { Link } from 'react-router-dom';

export const AccountMenu = () => {
  return (
    <Box sx={{ width: '90%', margin: '50px auto' }}>
      <ButtonGroup disableRipple>
        <Link to='/user'>
          <Button sx={{ ...styles.menuButton }}> Personal </Button>
        </Link>
        <Button sx={{ ...styles.menuButton }}>Change password</Button>
        <Link to='/surveys'>
          <Button sx={{ ...styles.menuButton }}>My surveys</Button>
        </Link>
        <Button sx={{ ...styles.menuButton }}>Team hub</Button>
      </ButtonGroup>
    </Box>
  );
};
