import { Box, Chip, Divider } from '@mui/material';
import { styles } from './styles';

export const Section = ({ title, children, sx }) => {
  return (
    <Box sx={sx}>
      <Divider sx={styles.divider}>
        <Chip label={title} sx={styles.chip} />
      </Divider>
      {children}
    </Box>
  );
};
