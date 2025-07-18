import React, { useState } from 'react';
import { Box, Typography, Paper, Avatar, Grid, Button, Divider, TextField, ToggleButton, ToggleButtonGroup, Chip } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SearchIcon from '@mui/icons-material/Search';

const allLeaders = [
  { name: 'VampireQueen', coins: 9000, avatar: '', color: '#FFD700', jackpot: true },
  { name: 'NoirKing', coins: 7000, avatar: '', color: '#C0C0C0', jackpot: false },
  { name: 'CyberWitch', coins: 6000, avatar: '', color: '#bfa14a', jackpot: true },
  { name: 'Player4', coins: 4000, avatar: '', color: '#8a0037', jackpot: false },
  { name: 'Player5', coins: 3000, avatar: '', color: '#00ff99', jackpot: false },
  { name: 'LuckyStar', coins: 2500, avatar: '', color: '#FFD700', jackpot: true },
];

const recentJackpots = [
  { name: 'CyberWitch', amount: 1200, time: '2m ago' },
  { name: 'LuckyStar', amount: 900, time: '10m ago' },
  { name: 'VampireQueen', amount: 1500, time: '1h ago' },
];

const LeaderboardPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const filteredLeaders = allLeaders.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at 50% 40%, #181818 60%, #000 100%)' }}>
      <Paper sx={{
        bgcolor: 'rgba(10,10,10,0.98)',
        borderRadius: 6,
        p: 5,
        boxShadow: '0 0 48px 12px #FFD700',
        border: '3px solid #FFD700',
        width: '100%',
        maxWidth: 700,
        textAlign: 'center',
        backdropFilter: 'blur(6px)',
        position: 'relative',
      }}>
        <Typography variant="h2" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 2, letterSpacing: 3, textShadow: '0 0 24px #FFD700, 0 0 8px #bfa14a' }}>
          Leaderboard
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 3 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search players..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: '#FFD700', mr: 1 }} />,
              sx: { bgcolor: '#181818', color: '#FFD700', borderRadius: 2, input: { color: '#FFD700', fontFamily: 'Cinzel, serif' } },
            }}
            sx={{ width: 220 }}
          />
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_, v) => setFilter(v || 'all')}
            sx={{ ml: 2 }}
          >
            <ToggleButton value="all" sx={{ color: '#FFD700', fontWeight: 700, fontFamily: 'Cinzel, serif', borderColor: '#FFD700', '&.Mui-selected': { bgcolor: '#FFD700', color: '#181818' } }}>All Time</ToggleButton>
            <ToggleButton value="week" sx={{ color: '#FFD700', fontWeight: 700, fontFamily: 'Cinzel, serif', borderColor: '#FFD700', '&.Mui-selected': { bgcolor: '#FFD700', color: '#181818' } }}>This Week</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {/* Top 3 Podium */}
        <Grid container spacing={2} justifyContent="center" alignItems="end" sx={{ mb: 4 }}>
          {filteredLeaders.slice(0, 3).map((leader, i) => (
            <Grid item xs={4} key={leader.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{
                bgcolor: leader.color,
                borderRadius: '50%',
                width: 80 + (2 - i) * 10,
                height: 80 + (2 - i) * 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 32px 8px ${leader.color}`,
                mb: 1,
                border: '3px solid #fff',
                position: 'relative',
                zIndex: 2,
              }}>
                <EmojiEventsIcon sx={{ color: '#fff', fontSize: 44 + (2 - i) * 8 }} />
              </Box>
              <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Cinzel, serif', fontWeight: 900, textShadow: '0 0 8px #000', mb: 0.5 }}>{leader.name}</Typography>
              <Chip icon={<MonetizationOnIcon sx={{ color: '#FFD700' }} />} label={`${leader.coins} coins`} sx={{ bgcolor: '#181818', color: '#FFD700', fontWeight: 700, fontFamily: 'Cinzel, serif', fontSize: 18, px: 2, boxShadow: '0 0 8px 2px #FFD700', mb: 1 }} />
              {leader.jackpot && <Chip icon={<EmojiEmotionsIcon sx={{ color: '#00ff99' }} />} label="JACKPOT" sx={{ bgcolor: '#00ff99', color: '#181818', fontWeight: 900, fontFamily: 'Cinzel, serif', fontSize: 16, px: 1.5, boxShadow: '0 0 8px 2px #00ff99' }} />}
            </Grid>
          ))}
        </Grid>
        {/* Full Leaderboard */}
        <Box sx={{ mb: 4 }}>
          {filteredLeaders.slice(3).map((leader, i) => (
            <Box key={leader.name} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, px: 2, py: 1, bgcolor: 'rgba(24,24,32,0.85)', borderRadius: 3, boxShadow: `0 0 8px 2px ${leader.color}`, border: `2px solid ${leader.color}` }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: leader.color, color: '#181818', fontWeight: 900, fontFamily: 'Cinzel, serif', width: 44, height: 44 }}>{leader.name[0]}</Avatar>
                <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Cinzel, serif', fontWeight: 700 }}>{leader.name}</Typography>
              </Box>
              <Chip icon={<MonetizationOnIcon sx={{ color: '#FFD700' }} />} label={`${leader.coins} coins`} sx={{ bgcolor: '#181818', color: '#FFD700', fontWeight: 700, fontFamily: 'Cinzel, serif', fontSize: 18, px: 2, boxShadow: '0 0 8px 2px #FFD700' }} />
              {leader.jackpot && <Chip icon={<EmojiEmotionsIcon sx={{ color: '#00ff99' }} />} label="JACKPOT" sx={{ bgcolor: '#00ff99', color: '#181818', fontWeight: 900, fontFamily: 'Cinzel, serif', fontSize: 16, px: 1.5, boxShadow: '0 0 8px 2px #00ff99', ml: 2 }} />}
              <Button variant="outlined" color="primary" sx={{ ml: 2, fontWeight: 700, fontFamily: 'Cinzel, serif', borderColor: '#FFD700', color: '#FFD700', letterSpacing: 1, textTransform: 'uppercase', '&:hover': { background: '#FFD700', color: '#181818' } }}>Share Win</Button>
            </Box>
          ))}
        </Box>
        <Divider sx={{ my: 4, borderColor: '#FFD700' }} />
        {/* Recent Jackpots */}
        <Typography variant="h4" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 2, letterSpacing: 2, textShadow: '0 0 12px #FFD700' }}>
          Recent Jackpots
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {recentJackpots.map(jp => (
            <Grid item xs={12} md={4} key={jp.name}>
              <Paper sx={{ bgcolor: 'rgba(24,24,32,0.92)', borderRadius: 3, p: 2, boxShadow: '0 0 16px 2px #FFD700', border: '2px solid #FFD700', textAlign: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 1, letterSpacing: 1, textShadow: '0 0 8px #FFD700' }}>{jp.name}</Typography>
                <Typography variant="h5" sx={{ color: '#00ff99', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 1, letterSpacing: 1, textShadow: '0 0 8px #00ff99' }}>+{jp.amount} coins</Typography>
                <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'EB Garamond, serif', fontWeight: 700 }}>{jp.time} ago</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default LeaderboardPage; 