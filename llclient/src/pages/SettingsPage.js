import React from 'react';
import { Box, Typography, Paper, Switch, FormControlLabel } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const SettingsPage = () => {
  const { state, setState } = useAppContext();
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 6 }}>
      <Typography variant="h3" sx={{ fontFamily: 'Cinzel, serif', color: 'primary.main', mb: 4, textAlign: 'center', textShadow: '0 0 24px #bfa14a' }}>
        Settings
      </Typography>
      <Paper sx={{ p: 4, bgcolor: 'background.paper', boxShadow: '0 0 16px 2px #8a0037', mb: 4 }}>
        <FormControlLabel
          control={<Switch checked={state.soundOn} onChange={() => setState(s => ({ ...s, soundOn: !s.soundOn }))} />}
          label="Sound"
        />
      </Paper>
    </Box>
  );
};

export default SettingsPage; 