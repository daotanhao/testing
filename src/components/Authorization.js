import React, { useState } from 'react';
import { HotKeys } from 'react-hotkeys';

const HotkeyInput = () => {
  const [hotkey, setHotkey] = useState('');

  const handleKeyDown = (event) => {
    const { key, ctrlKey, altKey, shiftKey } = event;

    // Xử lý sự kiện khi có phím tắt được nhấn
    if (key !== 'Control' && key !== 'Alt' && key !== 'Shift') {
      const modifiers = [];

      if (ctrlKey) {
        modifiers.push('Ctrl');
      }

      if (altKey) {
        modifiers.push('Alt');
      }

      if (shiftKey) {
        modifiers.push('Shift');
      }

      const combination = [...modifiers, key].join(' + ');
      setHotkey(combination);
    }
  };

  const handlers = {
    handleKeyDown,
  };

  return (
    <HotKeys handlers={handlers}>
      <input type="text" onKeyDown={handleKeyDown} />
      <p>Hotkey: {hotkey}</p>
    </HotKeys>
  );
};

export default HotkeyInput;
