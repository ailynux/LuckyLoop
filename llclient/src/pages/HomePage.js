import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: 4 }}>
      <Typography variant="h2" sx={{ fontFamily: 'Cinzel, serif', color: 'primary.main', textShadow: '0 0 24px #8a0037', mb: 2 }}>
        Welcome to LuckyLoop
      </Typography>
      <Typography variant="h5" sx={{ color: 'text.primary', fontFamily: 'EB Garamond, serif', mb: 2 }}>
        Enter the gothic casino. Try your luck. Win big.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          fontFamily: 'Cinzel, serif',
          fontSize: 22,
          px: 6,
          py: 2,
          background: 'linear-gradient(90deg, #8a0037 60%, #bfa14a 100%)',
          boxShadow: '0 0 24px 4px #4b006e',
          textTransform: 'none',
          letterSpacing: 2,
          '&:hover': { background: 'linear-gradient(90deg, #bfa14a 60%, #8a0037 100%)' },
        }}
        href="/game"
      >
        Play Now
      </Button>
    </Box>
  );
};

export default HomePage; 