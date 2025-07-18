import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Divider, LinearProgress, Fade, Button, Tooltip } from '@mui/material';
import BalanceDisplay from '../components/BalanceDisplay';
import DiceDisplay from '../components/DiceDisplay';
import ResultMessage from '../components/ResultMessage';
import { useAppContext } from '../context/AppContext';

const mockHistory = [6, 2, 4, 1, 5, 3];

const GAME_RULES = [
  'Roll the dice. If you hit a 6, you win 100 coins!',
  'Any other number loses 10 coins.',
  'Keep your streak alive for bonus multipliers!',
  'Reach a streak of 3+ for a 2x win, 5+ for a 3x win!',
  'Balance reaches 0? Add more coins in your Wallet.',
];

const getMultiplier = (streak) => {
  if (streak >= 5) return 3;
  if (streak >= 3) return 2;
  return 1;
};

const GamePage = () => {
  const { state, setState } = useAppContext();
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState('');
  const [dice, setDice] = useState(1);
  const [history, setHistory] = useState(mockHistory);
  const [showConfetti, setShowConfetti] = useState(false);
  const [lastWin, setLastWin] = useState(null);

  const multiplier = getMultiplier(state.streak);
  const progress = Math.min((state.streak % 5) / 5, 1) * 100;

  const handleRoll = () => {
    setRolling(true);
    setResult('');
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setDice(roll);
      setHistory([roll, ...history.slice(0, 9)]);
      if (roll === 6) {
        const win = 100 * multiplier;
        setState(s => ({ ...s, balance: s.balance + win, streak: s.streak + 1 }));
        setResult(`Jackpot! You win ${win} coins${multiplier > 1 ? ` (x${multiplier} streak!)` : ''}`);
        setShowConfetti(true);
        setLastWin(win);
        setTimeout(() => setShowConfetti(false), 1200);
      } else {
        setState(s => ({ ...s, balance: Math.max(0, s.balance - 10), streak: 0 }));
        setResult('Try again! -10');
      }
      setRolling(false);
    }, 900);
  };

  return (
    <Box sx={{
      minHeight: '90vh',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 40%, #181818 60%, #000 100%)',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 60%, rgba(191,161,74,0.08) 0%, rgba(10,10,10,0.95) 80%)',
        zIndex: 0,
      },
    }}>
      <Grid container spacing={6} justifyContent="center" alignItems="center" sx={{ zIndex: 1, width: '100%' }}>
        {/* Main Game Area */}
        <Grid item xs={12} md={7} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Paper sx={{
            p: { xs: 2, sm: 5, md: 7 },
            bgcolor: 'rgba(20,20,30,0.7)',
            boxShadow: '0 0 64px 8px #8a0037, 0 0 128px 16px #000',
            borderRadius: 8,
            width: '100%',
            maxWidth: 520,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            position: 'relative',
            backdropFilter: 'blur(8px)',
            border: '1.5px solid #2d002b',
            overflow: 'visible',
          }}>
            <Typography variant="h3" sx={{ color: 'accent.main', fontFamily: 'Cinzel, serif', mb: 1, letterSpacing: 3, textShadow: '0 0 32px #bfa14a, 0 0 8px #8a0037' }}>
              Lucky Dice
            </Typography>
            <Typography variant="h4" sx={{
              color: '#FFD700',
              fontFamily: 'Cinzel, serif',
              mb: 2,
              textAlign: 'center',
              letterSpacing: 2,
              textShadow: '0 0 16px #FFD700, 0 0 4px #bfa14a, 0 0 1px #000',
              fontWeight: 800,
              fontSize: { xs: 22, sm: 26, md: 30 },
              lineHeight: 1.1,
            }}>
              Balance
            </Typography>
            <BalanceDisplay balance={state.balance} />
            <Box sx={{ width: '100%', mt: 1, mb: 1 }}>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontFamily: 'Cinzel, serif', mb: 1, letterSpacing: 1, textAlign: 'center', fontSize: 20 }}>
                Streak: <span style={{ color: '#00ff99', fontWeight: 700 }}>{state.streak}</span> {multiplier > 1 && <span style={{ color: '#bfa14a', marginLeft: 8 }}>(x{multiplier}!)</span>}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 12,
                  borderRadius: 6,
                  background: '#181818',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #8a0037 60%, #bfa14a 100%)',
                    boxShadow: '0 0 16px 4px #bfa14a',
                  },
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, mb: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'transparent',
                    background: 'linear-gradient(90deg, #FFD700 30%, #bfa14a 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 900,
                    fontSize: { xs: 26, sm: 30, md: 36 },
                    letterSpacing: 2,
                    textShadow: '0 0 24px #FFD700, 0 0 8px #bfa14a, 0 0 2px #000',
                    lineHeight: 1.1,
                    mb: 0,
                    mr: 1,
                  }}
                >
                  Lucky Meter
                </Typography>
                <span style={{ fontSize: 32, filter: 'drop-shadow(0 0 8px #FFD700)' }} role="img" aria-label="sparkle">✨</span>
              </Box>
            </Box>
            {lastWin && (
              <Fade in={!!lastWin} timeout={600}>
                <Box sx={{
                  bgcolor: 'rgba(191,161,74,0.12)',
                  color: '#bfa14a',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 700,
                  fontSize: 22,
                  mb: 1,
                  boxShadow: '0 0 24px 4px #bfa14a',
                  textAlign: 'center',
                  letterSpacing: 1,
                }}>
                  Last Win: +{lastWin} coins
                </Box>
              </Fade>
            )}
            <Box sx={{ mt: 3, mb: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              <Fade in={showConfetti} timeout={500}>
                <Box sx={{
                  position: 'absolute',
                  top: -60,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                  fontSize: 64,
                  color: '#bfa14a',
                  textShadow: '0 0 32px #bfa14a, 0 0 64px #fff',
                  fontFamily: 'Cinzel, serif',
                }}>
                  🎉
                </Box>
              </Fade>
              <Box sx={{
                borderRadius: '50%',
                boxShadow: '0 0 48px 12px #8a0037, 0 0 96px 16px #bfa14a',
                background: 'linear-gradient(135deg, #181818 80%, #2d002b 100%)',
                p: 4,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 160,
                minHeight: 160,
                border: '2.5px solid #bfa14a',
                position: 'relative',
                animation: rolling ? 'pulse-glow 0.7s infinite alternate' : 'none',
                '@keyframes pulse-glow': {
                  '0%': { boxShadow: '0 0 48px 12px #8a0037, 0 0 96px 16px #bfa14a' },
                  '100%': { boxShadow: '0 0 64px 24px #bfa14a, 0 0 128px 32px #8a0037' },
                },
              }}>
                <DiceDisplay value={dice} rolling={rolling} />
              </Box>
              <ResultMessage message={result} />
              <Box sx={{ mt: 3, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button
                  onClick={handleRoll}
                  disabled={rolling || state.balance <= 0}
                  sx={{
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 900,
                    fontSize: 28,
                    px: 6,
                    py: 2.5,
                    borderRadius: 8,
                    background: 'linear-gradient(90deg, #8a0037 60%, #bfa14a 100%)',
                    color: '#fff',
                    boxShadow: '0 0 32px 8px #bfa14a, 0 0 64px 8px #8a0037',
                    textTransform: 'uppercase',
                    letterSpacing: 3,
                    transition: 'all 0.2s',
                    animation: rolling ? 'pulse-btn 0.7s infinite alternate' : 'pulse-btn 1.5s infinite alternate',
                    '@keyframes pulse-btn': {
                      '0%': { boxShadow: '0 0 32px 8px #bfa14a, 0 0 64px 8px #8a0037' },
                      '100%': { boxShadow: '0 0 64px 16px #8a0037, 0 0 128px 16px #bfa14a' },
                    },
                    '&:hover': {
                      background: 'linear-gradient(90deg, #bfa14a 60%, #8a0037 100%)',
                      color: '#181818',
                    },
                  }}
                >
                  Roll Dice
                </Button>
              </Box>
              {state.balance <= 0 && (
                <Tooltip title="Add 100 coins to keep playing!" arrow>
                  <Button variant="contained" color="primary" sx={{ mt: 2, fontFamily: 'Cinzel, serif', fontWeight: 700, letterSpacing: 1 }} onClick={() => setState(s => ({ ...s, balance: s.balance + 100 }))}>
                    Quick Add Coins
                  </Button>
                </Tooltip>
              )}
            </Box>
            <Divider sx={{ width: '100%', my: 3, borderColor: '#222' }} />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={0} sx={{
                bgcolor: 'rgba(10,10,10,0.98)',
                borderRadius: 4,
                p: 4,
                boxShadow: '0 0 32px 8px #bfa14a',
                width: '100%',
                maxWidth: 400,
                border: '2.5px solid #bfa14a',
                backdropFilter: 'blur(2px)',
                mt: 2,
              }}>
                <Typography variant="h3" sx={{
                  color: '#FFD700',
                  fontFamily: 'Cinzel, serif',
                  mb: 3,
                  textAlign: 'center',
                  letterSpacing: 3,
                  textShadow: '0 0 24px #FFD700, 0 0 8px #bfa14a, 0 0 2px #000',
                  fontWeight: 900,
                  fontSize: { xs: 32, sm: 38, md: 44 },
                  lineHeight: 1.1,
                }}>
                  Game Rules
                </Typography>
                <ul style={{ color: '#ffe082', fontFamily: 'Cinzel, serif', fontSize: 20, margin: 0, paddingLeft: 28, fontWeight: 700, letterSpacing: 1 }}>
                  {GAME_RULES.map((rule, i) => <li key={i} style={{ marginBottom: 14, lineHeight: 1.5 }}>{rule}</li>)}
                </ul>
              </Paper>
            </Box>
          </Paper>
        </Grid>
        {/* Game History */}
        <Grid item xs={12} md={5} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Paper sx={{
            p: 4,
            bgcolor: 'rgba(20,20,30,0.7)',
            boxShadow: '0 0 32px 8px #bfa14a',
            borderRadius: 6,
            width: '100%',
            maxWidth: 340,
            border: '1.5px solid #bfa14a',
            backdropFilter: 'blur(6px)',
          }}>
            <Typography variant="h3" sx={{
              color: '#FFD700',
              fontFamily: 'Cinzel, serif',
              mb: 3,
              textAlign: 'center',
              letterSpacing: 3,
              textShadow: '0 0 24px #FFD700, 0 0 8px #bfa14a, 0 0 2px #000',
              fontWeight: 900,
              fontSize: { xs: 32, sm: 38, md: 44 },
              lineHeight: 1.1,
            }}>
              Game History
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', minHeight: 48, justifyContent: 'center' }}>
              {history.map((roll, i) => (
                <Box key={i} sx={{ width: 48, height: 48, bgcolor: 'secondary.main', color: 'text.primary', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 28, boxShadow: '0 0 16px 2px #4b006e', fontFamily: 'Cinzel, serif', border: '1.5px solid #4b006e' }}>{roll}</Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GamePage; 