import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const DiceDisplay = ({ value, rolling }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (rolling) {
      setAnimate(false);
    } else {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [value, rolling]);

  return (
    <Box
      sx={{
        width: 90,
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        bgcolor: 'rgba(30, 10, 40, 0.85)',
        boxShadow: '0 0 16px 2px #4b006e',
        mb: 2,
        transition: 'box-shadow 0.3s',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'accent.main',
          fontFamily: 'EB Garamond, serif',
          fontWeight: 700,
          letterSpacing: 2,
          transition: 'transform 0.3s, opacity 0.3s',
          transform: animate ? 'scale(1.3)' : 'scale(1)',
          opacity: animate ? 1 : 0.85,
          textShadow: '0 0 12px #8a0037',
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default DiceDisplay; 