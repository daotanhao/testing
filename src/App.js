import React from 'react';
import useShortcut from './hooks/useShortcut';

const App = () => {
  const handleShortcut = () => {
    alert('Hello!');
  };

  useShortcut(handleShortcut, ['Control', 'Alt', 'Shift']);

  return <div>...</div>;
};

export default App;
