import { useState, useEffect } from 'react';

const useShortcut = (callback, shortcutKeys) => {
  const [keysPressed, setKeysPressed] = useState([]);
  const [isPressAll, setIsPressAll] = useState(false);
  const downHandler = ({ event }) => {
    const { key } = event;
    // if (shortcutKeys.includes(key) && !keysPressed.includes(key))
    event.preventDefault();
    if (!shortcutKeys.includes(key)) return;
    setKeysPressed((pressed) => [...pressed, key]);
  };

  const upHandler = ({ key }) => {
    if (!shortcutKeys.includes(key)) return;

    const isMatch = shortcutKeys.every((key) => keysPressed.includes(key));
    if (isMatch) {
      callback();
    }
    setKeysPressed([]);
    setIsPressAll(false);
  };
  useEffect(() => {
    if (shortcutKeys.every((key) => keysPressed.includes(key))) {
      setIsPressAll(true);
    }
  });
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    console.log(shortcutKeys.every((key) => keysPressed.includes(key)));
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [isPressAll]);

  return keysPressed;
};

export default useShortcut;
