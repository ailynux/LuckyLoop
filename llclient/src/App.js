import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import LeaderboardPage from './pages/LeaderboardPage';
import WalletPage from './pages/WalletPage';
import SettingsPage from './pages/SettingsPage';
// import Toasts, ParticleBackground, AmbientSound from './components/...' (to be created)

const AnimatedBackground = ({ children }) => (
  <Box
    sx={{
      minHeight: '100vh',
      width: '100vw',
      bgcolor: '#000',
      position: 'relative',
      overflow: 'hidden',
      // Example animated gradient background
      background: 'radial-gradient(ellipse at 60% 40%, #181818 60%, #000 100%)',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'linear-gradient(120deg, rgba(138,0,55,0.10) 0%, rgba(191,161,74,0.10) 100%)',
        zIndex: 0,
        animation: 'bg-flicker 8s infinite alternate',
      },
      cursor: 'pointer',
    }}
  >
    {children}
  </Box>
);

function App() {
  return (
    <Router>
      <CssBaseline />
      <AnimatedBackground>
        {/* <ParticleBackground /> */}
        {/* <AmbientSound /> */}
        <NavBar />
        {/* <Toasts /> */}
        <Box sx={{ pt: 2, zIndex: 1, position: 'relative' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Box>
      </AnimatedBackground>
    </Router>
  );
}

export default App;
