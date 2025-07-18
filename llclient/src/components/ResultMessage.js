import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

const ResultMessage = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timeout = setTimeout(() => setShow(false), 1800);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  const isWin = message && message.toLowerCase().includes('win');

  return (
    <Box sx={{ minHeight: 36, mt: 1 }}>
      <Typography
        variant="h5"
        sx={{
          color: isWin ? 'accent.main' : 'secondary.main',
          opacity: show ? 1 : 0,
          transition: 'opacity 0.5s',
          fontFamily: 'EB Garamond, serif',
          textShadow: isWin ? '0 0 8px #bfa14a' : '0 0 8px #4b006e',
          letterSpacing: 1,
          textAlign: 'center',
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default ResultMessage; 