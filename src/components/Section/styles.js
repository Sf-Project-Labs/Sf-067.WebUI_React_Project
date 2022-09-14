import { dividerClasses } from '@mui/material';

export const styles = {
  divider: {
    marginBottom: '40px',
    [`.${dividerClasses.wrapper}`]: {
      padding: 0,
    },
    // [`&.${dividerClasses.textAlignLeft}::before`]: {
    //   width: 0,
    // },
    // [`&.${dividerClasses.textAlignLeft}::after`]: {
    //   transform: 'translateY(100%)',
    // },
  },
  chip: {
    background: 'none',
    border: '1px solid #B2B2B2',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
};
