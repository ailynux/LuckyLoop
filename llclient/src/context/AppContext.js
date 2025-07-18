import React, { createContext, useContext, useEffect, useState } from 'react';

const defaultState = {
  user: { name: 'Player', avatar: '', vip: false, level: 1, xp: 0 },
  balance: 1000,
  streak: 0,
  achievements: [],
  soundOn: true,
  notifications: [],
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('appState');
    return saved ? JSON.parse(saved) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext); 