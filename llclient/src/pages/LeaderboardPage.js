import React from 'react';
import { Box, Typography, Paper, Avatar, Grid, Button } from '@mui/material';

const mockLeaders = [
  { name: 'VampireQueen', coins: 9000, avatar: '', color: '#bfa14a' },
  { name: 'NoirKing', coins: 7000, avatar: '', color: '#8a0037' },
  { name: 'CyberWitch', coins: 6000, avatar: '', color: '#00ff99' },
  { name: 'Player4', coins: 4000, avatar: '' },
  { name: 'Player5', coins: 3000, avatar: '' },
];

const LeaderboardPage = () => (
  <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6 }}>
    <Typography variant="h3" sx={{ fontFamily: 'Cinzel, serif', color: 'primary.main', mb: 4, textAlign: 'center', textShadow: '0 0 24px #bfa14a' }}>
      Leaderboard
    </Typography>
    <Grid container spacing={2}>
      {mockLeaders.map((leader, i) => (
        <Grid item xs={12} key={leader.name}>
          <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 1, boxShadow: i < 3 ? `0 0 16px 4px ${leader.color}` : '0 0 8px 2px #4b006e', bgcolor: 'background.paper' }}>
            <Avatar sx={{ bgcolor: leader.color || 'secondary.main', width: 48, height: 48, mr: 2 }}>{leader.name[0]}</Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ color: i < 3 ? leader.color : 'text.primary', fontWeight: 700 }}>{leader.name}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{leader.coins} coins</Typography>
            </Box>
            {i < 3 && <Button variant="outlined" color="primary" size="small" sx={{ ml: 2 }}>Share</Button>}
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default LeaderboardPage; 