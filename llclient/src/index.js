import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProviderCustom } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import '@fontsource/cinzel';
import '@fontsource/unifrakturcook';
import '@fontsource/eb-garamond';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProviderCustom>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProviderCustom>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
