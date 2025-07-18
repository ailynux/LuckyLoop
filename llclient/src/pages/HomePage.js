import React from 'react';
import { Box, Typography, Button, Paper, Grid, Divider } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const leaderboardPreview = [
  { name: 'VampireQueen', coins: 9000 },
  { name: 'NoirKing', coins: 7000 },
  { name: 'CyberWitch', coins: 6000 },
];

const HomePage = () => {
  const { state } = useAppContext();
  const navigate = useNavigate();

  return (
    <Box sx={{
      minHeight: '90vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 40%, #181818 60%, #000 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Grid container spacing={6} justifyContent="center" alignItems="center" sx={{ zIndex: 1, width: '100%' }}>
        <Grid item xs={12} md={7} lg={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          {/* Animated Casino Logo */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Cinzel, serif',
              color: 'transparent',
              background: 'linear-gradient(90deg, #FFD700 30%, #8a0037 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              fontWeight: 900,
              fontSize: { xs: 44, sm: 60, md: 80 },
              letterSpacing: 6,
              textShadow: '0 0 32px #FFD700, 0 0 16px #8a0037',
              mb: 2,
              textAlign: 'center',
              animation: 'casino-flicker 2.5s infinite alternate',
              '@keyframes casino-flicker': {
                '0%': { textShadow: '0 0 32px #FFD700, 0 0 16px #8a0037' },
                '100%': { textShadow: '0 0 64px #FFD700, 0 0 32px #8a0037' },
              },
            }}
          >
            LuckyLoop
          </Typography>
          {/* Play Now Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 900,
              fontSize: 32,
              px: 8,
              py: 2.5,
              borderRadius: 8,
              background: 'linear-gradient(90deg, #8a0037 60%, #FFD700 100%)',
              color: '#fff',
              boxShadow: '0 0 32px 8px #FFD700, 0 0 64px 8px #8a0037',
              textTransform: 'uppercase',
              letterSpacing: 4,
              transition: 'all 0.2s',
              animation: 'pulse-btn 1.5s infinite alternate',
              '@keyframes pulse-btn': {
                '0%': { boxShadow: '0 0 32px 8px #FFD700, 0 0 64px 8px #8a0037' },
                '100%': { boxShadow: '0 0 64px 16px #8a0037, 0 0 128px 16px #FFD700' },
              },
              '&:hover': {
                background: 'linear-gradient(90deg, #FFD700 60%, #8a0037 100%)',
                color: '#181818',
              },
              mb: 3,
            }}
            onClick={() => navigate('/game')}
          >
            Play Now
          </Button>
          {/* Daily Bonus Card */}
          <Paper sx={{
            bgcolor: 'rgba(20,20,30,0.85)',
            borderRadius: 4,
            p: 3,
            boxShadow: '0 0 24px 4px #00ff99',
            border: '2px solid #00ff99',
            mb: 2,
            maxWidth: 400,
            width: '100%',
            textAlign: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            <Typography variant="h4" sx={{ color: '#00ff99', fontFamily: 'Cinzel, serif', fontWeight: 800, mb: 1, letterSpacing: 2, textShadow: '0 0 12px #00ff99' }}>
              Daily Bonus
            </Typography>
            <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'EB Garamond, serif', mb: 2 }}>
              Come back every day for a free reward!
            </Typography>
            <Button variant="contained" color="success" sx={{ fontWeight: 700, fontSize: 20, px: 4, py: 1.5, borderRadius: 3, background: 'linear-gradient(90deg, #00ff99 60%, #FFD700 100%)', color: '#181818', boxShadow: '0 0 16px 2px #00ff99', letterSpacing: 2, textTransform: 'uppercase' }}>
              Claim Bonus
            </Button>
          </Paper>
        </Grid>
        {/* Sidebar: Leaderboard Preview & Wallet */}
        <Grid item xs={12} md={5} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          {/* Wallet Preview */}
          <Paper sx={{
            bgcolor: 'rgba(10,10,10,0.98)',
            borderRadius: 4,
            p: 3,
            boxShadow: '0 0 24px 4px #FFD700',
            border: '2px solid #FFD700',
            width: '100%',
            maxWidth: 340,
            mb: 3,
            textAlign: 'center',
            backdropFilter: 'blur(2px)',
          }}>
            <Typography variant="h5" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 1, letterSpacing: 2, textShadow: '0 0 12px #FFD700' }}>
              Your Balance
            </Typography>
            <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Cinzel, serif', fontWeight: 700, mb: 1 }}>{state.balance} coins</Typography>
            <Button variant="outlined" color="primary" sx={{ fontWeight: 700, fontSize: 18, px: 3, py: 1, borderRadius: 2, borderColor: '#FFD700', color: '#FFD700', letterSpacing: 1, textTransform: 'uppercase', '&:hover': { background: '#FFD700', color: '#181818' } }} onClick={() => navigate('/wallet')}>
              Go to Wallet
            </Button>
          </Paper>
          {/* Leaderboard Preview */}
          <Paper sx={{
            bgcolor: 'rgba(24,24,32,0.92)',
            borderRadius: 4,
            p: 3,
            boxShadow: '0 0 24px 4px #8a0037',
            border: '2px solid #8a0037',
            width: '100%',
            maxWidth: 340,
            textAlign: 'center',
            backdropFilter: 'blur(2px)',
          }}>
            <Typography variant="h5" sx={{ color: '#8a0037', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 2, letterSpacing: 2, textShadow: '0 0 12px #8a0037' }}>
              Top Players
            </Typography>
            {leaderboardPreview.map((player, i) => (
              <Box key={player.name} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, px: 1 }}>
                <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Cinzel, serif', fontWeight: 700 }}>{i + 1}. {player.name}</Typography>
                <Typography variant="h6" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 900 }}>{player.coins} coins</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2, borderColor: '#8a0037' }} />
            <Button variant="outlined" color="secondary" sx={{ fontWeight: 700, fontSize: 18, px: 3, py: 1, borderRadius: 2, borderColor: '#8a0037', color: '#8a0037', letterSpacing: 1, textTransform: 'uppercase', '&:hover': { background: '#8a0037', color: '#fff' } }} onClick={() => navigate('/leaderboard')}>
              View Leaderboard
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage; 