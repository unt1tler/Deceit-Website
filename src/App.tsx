import React from 'react';
import { HomePage } from './pages/HomePage';
import { CommandsPage } from './pages/CommandsPage';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;

  return (
    <>
      {path === '/commands' ? <CommandsPage /> : <HomePage />}
    </>
  );
}

export default App;