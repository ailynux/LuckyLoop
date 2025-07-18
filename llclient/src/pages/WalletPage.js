import React from 'react';
import { Box, Typography, Paper, Button, List, ListItem, ListItemText, Divider, Avatar } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const mockHistory = [
  { type: 'Add', amount: 500, date: '2025-07-17' },
  { type: 'Remove', amount: 200, date: '2025-07-16' },
  { type: 'Win', amount: 100, date: '2025-07-15' },
];

const getIcon = (type) => {
  if (type === 'Add') return <AddCircleIcon sx={{ color: '#00ff99', fontSize: 32 }} />;
  if (type === 'Remove') return <RemoveCircleIcon sx={{ color: '#ff1744', fontSize: 32 }} />;
  return <MonetizationOnIcon sx={{ color: '#FFD700', fontSize: 32 }} />;
};

const getColor = (type) => {
  if (type === 'Add') return '#00ff99';
  if (type === 'Remove') return '#ff1744';
  return '#FFD700';
};

const WalletPage = () => {
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
            <AccountBalanceWalletIcon sx={{ color: '#181818', fontSize: 48 }} />
          </Avatar>
          <Typography variant="h2" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 900, mb: 1, letterSpacing: 3, textShadow: '0 0 24px #FFD700, 0 0 8px #bfa14a' }}>
            Wallet
          </Typography>
          <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Cinzel, serif', fontWeight: 700, mb: 1, textShadow: '0 0 8px #FFD700' }}>
            {state.balance} coins
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'Cinzel, serif',
                fontWeight: 900,
                fontSize: 24,
                px: 4,
                py: 1.5,
                borderRadius: 4,
                background: 'linear-gradient(90deg, #FFD700 60%, #00ff99 100%)',
                color: '#181818',
                boxShadow: '0 0 32px 8px #FFD700, 0 0 32px 8px #00ff99',
                textTransform: 'uppercase',
                letterSpacing: 2,
                animation: 'pulse-btn 1.5s infinite alternate',
                '@keyframes pulse-btn': {
                  '0%': { boxShadow: '0 0 32px 8px #FFD700, 0 0 32px 8px #00ff99' },
                  '100%': { boxShadow: '0 0 64px 16px #00ff99, 0 0 128px 16px #FFD700' },
                },
                '&:hover': {
                  background: 'linear-gradient(90deg, #00ff99 60%, #FFD700 100%)',
                  color: '#181818',
                },
              }}
              onClick={() => setState(s => ({ ...s, balance: s.balance + 100 }))}
            >
              <AddCircleIcon sx={{ mr: 1, fontSize: 28 }} /> Add Funds
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'Cinzel, serif',
                fontWeight: 900,
                fontSize: 24,
                px: 4,
                py: 1.5,
                borderRadius: 4,
                background: 'linear-gradient(90deg, #ff1744 60%, #FFD700 100%)',
                color: '#fff',
                boxShadow: '0 0 32px 8px #ff1744, 0 0 32px 8px #FFD700',
                textTransform: 'uppercase',
                letterSpacing: 2,
                animation: 'pulse-btn-red 1.5s infinite alternate',
                '@keyframes pulse-btn-red': {
                  '0%': { boxShadow: '0 0 32px 8px #ff1744, 0 0 32px 8px #FFD700' },
                  '100%': { boxShadow: '0 0 64px 16px #FFD700, 0 0 128px 16px #ff1744' },
                },
                '&:hover': {
                  background: 'linear-gradient(90deg, #FFD700 60%, #ff1744 100%)',
                  color: '#181818',
                },
              }}
              onClick={() => setState(s => ({ ...s, balance: Math.max(0, s.balance - 100) }))}
            >
              <RemoveCircleIcon sx={{ mr: 1, fontSize: 28 }} /> Remove Funds
            </Button>
          </Box>
        </Box>
        <Divider sx={{ my: 4, borderColor: '#FFD700' }} />
        <Typography variant="h4" sx={{ color: '#FFD700', fontFamily: 'Cinzel, serif', fontWeight: 800, mb: 3, letterSpacing: 2, textShadow: '0 0 12px #FFD700' }}>
          Transaction History
        </Typography>
        <List>
          {mockHistory.map((tx, i) => (
            <ListItem key={i} sx={{ mb: 2, bgcolor: 'rgba(24,24,32,0.85)', borderRadius: 3, boxShadow: `0 0 12px 2px ${getColor(tx.type)}`, border: `2px solid ${getColor(tx.type)}` }}>
              <Avatar sx={{ bgcolor: getColor(tx.type), width: 44, height: 44, mr: 2 }}>
                {getIcon(tx.type)}
              </Avatar>
              <ListItemText
                primary={<Typography sx={{ color: getColor(tx.type), fontWeight: 700, fontFamily: 'Cinzel, serif', fontSize: 20 }}>{tx.type} {tx.amount} coins</Typography>}
                secondary={<Typography sx={{ color: '#fff', fontFamily: 'EB Garamond, serif', fontSize: 16 }}>{tx.date}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default WalletPage; 