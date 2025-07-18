import React from 'react';
import { Box, Typography, Paper, Button, List, ListItem, ListItemText } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const mockHistory = [
  { type: 'Add', amount: 500, date: '2025-07-17' },
  { type: 'Remove', amount: 200, date: '2025-07-16' },
  { type: 'Win', amount: 100, date: '2025-07-15' },
];

const WalletPage = () => {
  const { state, setState } = useAppContext();
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 6 }}>
      <Typography variant="h3" sx={{ fontFamily: 'Cinzel, serif', color: 'primary.main', mb: 4, textAlign: 'center', textShadow: '0 0 24px #bfa14a' }}>
        Wallet
      </Typography>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'background.paper', boxShadow: '0 0 16px 2px #bfa14a' }}>
        <Typography variant="h5" sx={{ color: 'accent.main', fontFamily: 'Cinzel, serif', mb: 2 }}>Balance</Typography>
        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>{state.balance} coins</Typography>
        <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={() => setState(s => ({ ...s, balance: s.balance + 100 }))}>Add 100</Button>
        <Button variant="outlined" color="secondary" onClick={() => setState(s => ({ ...s, balance: Math.max(0, s.balance - 100) }))}>Remove 100</Button>
      </Paper>
      <Paper sx={{ p: 3, bgcolor: 'background.paper', boxShadow: '0 0 8px 2px #4b006e' }}>
        <Typography variant="h6" sx={{ color: 'accent.main', fontFamily: 'Cinzel, serif', mb: 2 }}>Transaction History</Typography>
        <List>
          {mockHistory.map((tx, i) => (
            <ListItem key={i}>
              <ListItemText primary={`${tx.type} ${tx.amount} coins`} secondary={tx.date} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default WalletPage; 