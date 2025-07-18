import React from 'react';
import { Box, Typography, Paper, Switch, FormControlLabel, Divider, Avatar } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { useAppContext } from '../context/AppContext';

const SettingsPage = () => {
  const { state, setState } = useAppContext();
  return (
    <Box sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at 50% 40%, #181818 60%, #000 100%)' }}>
      <Paper sx={{
        bgcolor: 'rgba(10,10,10,0.98)',
        borderRadius: 6,
        p: 5,
        boxShadow: '0 0 48px 12px #FFD700',
        border: '3px solid #FFD700',
        width: '100%',
        maxWidth: 480,
        textAlign: 'center',
        backdropFilter: 'blur(6px)',
        position: 'relative',
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar sx={{ bgcolor: '#FFD700', width: 72, height: 72, mb: 2, boxShadow: '0 0 32px 8px #FFD700' }}>
            <SettingsIcon sx={{ color: '#181818', fontSize: 48 }} />
          </Avatar>
          <Typography variant="h2" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 1, letterSpacing: 3, textShadow: '0 0 24px #FFD700, 0 0 8px #bfa14a' }}>
            Settings
          </Typography>
        </Box>
        <Divider sx={{ my: 3, borderColor: '#FFD700' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <VolumeUpIcon sx={{ color: '#00ff99', fontSize: 32 }} />
            <Typography variant="h5" sx={{ color: '#00ff99', fontFamily: 'Cinzel, serif', fontWeight: 800, letterSpacing: 2, textShadow: '0 0 8px #00ff99' }}>Sound</Typography>
          </Box>
          <FormControlLabel
            control={<Switch checked={state.soundOn} onChange={() => setState(s => ({ ...s, soundOn: !s.soundOn }))} sx={{ '& .MuiSwitch-thumb': { bgcolor: '#00ff99' }, '& .Mui-checked': { color: '#00ff99' } }} />}
            label=""
            sx={{ m: 0 }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Brightness4Icon sx={{ color: '#FFD700', fontSize: 32 }} />
            <Typography variant="h5" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 800, letterSpacing: 2, textShadow: '0 0 8px #FFD700' }}>Dark Mode</Typography>
          </Box>
          <FormControlLabel
            control={<Switch checked disabled sx={{ '& .MuiSwitch-thumb': { bgcolor: '#FFD700' }, '& .Mui-checked': { color: '#FFD700' } }} />}
            label=""
            sx={{ m: 0 }}
          />
        </Box>
        <Divider sx={{ my: 3, borderColor: '#FFD700' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: 'center' }}>
          <Avatar sx={{ bgcolor: '#8a0037', width: 48, height: 48 }}>
            <PersonIcon sx={{ color: '#fff', fontSize: 32 }} />
          </Avatar>
          <Typography variant="h5" sx={{ color: '#8a0037', fontFamily: 'Cinzel, serif', fontWeight: 800, letterSpacing: 2, textShadow: '0 0 8px #8a0037' }}>Personalization</Typography>
        </Box>
        <Typography variant="body1" sx={{ color: '#fff', fontFamily: 'EB Garamond, serif', mb: 2 }}>
          (Coming soon: avatar, accent color, and more!)
        </Typography>
      </Paper>
    </Box>
  );
};

export default SettingsPage; 