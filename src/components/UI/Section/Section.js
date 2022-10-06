import { Box, Divider, Chip } from '@mui/material';
import { styles } from './styles';

export const Section = ({ title, children, sx }) => {
  return (
    <Box sx={sx}>
      <Divider sx={styles.divider}>
        <Chip label={title} variant='outlined' sx={styles.chip} />
      </Divider>
      {children}
    </Box>
  );
};
