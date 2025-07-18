import React from 'react';
import { Box, Typography } from '@mui/material';

const BalanceDisplay = ({ balance }) => (
  <Box sx={{
    mb: 2,
    p: 2,
    borderRadius: 2,
    bgcolor: 'rgba(20, 10, 30, 0.7)',
    boxShadow: '0 0 8px 0 #bfa14a',
    minWidth: 220,
    textAlign: 'center',
  }}>
    <Typography variant="subtitle2" sx={{ color: 'accent.main', letterSpacing: 1, fontFamily: 'EB Garamond, serif' }}>
      Balance
    </Typography>
    <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'EB Garamond, serif' }}>
      ${balance}
    </Typography>
  </Box>
);

export default BalanceDisplay; 