import React from 'react';
import { Button } from '@mui/material';

const RollButton = ({ onRoll, disabled }) => (
  <Button
    variant="contained"
    color="primary"
    size="large"
    onClick={onRoll}
    disabled={disabled}
    sx={{
      mt: 2,
      px: 6,
      py: 1.5,
      fontSize: 22,
      fontFamily: 'EB Garamond, serif',
      letterSpacing: 2,
      boxShadow: '0 0 12px 2px #8a0037',
      textTransform: 'none',
      '&:hover': {
        background: 'linear-gradient(90deg, #8a0037 60%, #4b006e 100%)',
        boxShadow: '0 0 24px 4px #4b006e',
      },
    }}
  >
    Roll Dice
  </Button>
);

export default RollButton; 