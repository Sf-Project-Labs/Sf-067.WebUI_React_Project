import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { styles } from './styles';

export const AccountMenu = () => {
  return (
    <Box sx={{ margin: '50px auto' }}>
      <ButtonGroup disableRipple>
        <Button sx={{ ...styles.menuButton }}>Personal</Button>
        <Button sx={{ ...styles.menuButton }}>Change password</Button>
        <Button sx={{ ...styles.menuButton }}>My surveys</Button>
        <Button sx={{ ...styles.menuButton }}>Team hub</Button>
      </ButtonGroup>
    </Box>
  );
};
