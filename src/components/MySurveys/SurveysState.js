import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SurveysState = () => {
  return (
    <Box
      sx={{
        background: '#FaFaFa',
        width: '100%',
        marginBottom: '10px',
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box sx={{ width: '50%' }}>
        <Typography
          variant='p'
          sx={{
            color: '#d72130',
            fontWeight: '700',
            textDecoration: 'underline',
            paddingRight: '10px',
            cursor: 'pointer',
          }}
        >
          OPENED
        </Typography>
        <Typography variant='p' sx={{ fontWeight: '700' }}>
          CLOSED
        </Typography>
      </Box>
      <Box sx={{ width: '50%' }}>
        <SearchIcon sx={{ float: 'right' }} />
      </Box>
    </Box>
  );
};

export default SurveysState;
