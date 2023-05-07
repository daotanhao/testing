import { useState, useEffect } from 'react';

const useShortcut = (callback, shortcutKeys) => {
  const [keysPressed, setKeysPressed] = useState([]);

  const downHandler = ({ key }) => {
    if (shortcutKeys.includes(key)) {
      setKeysPressed((currentKeys) => [...currentKeys, key]);
    }
  };

  const upHandler = () => {
    const isMatch = shortcutKeys.every((key) => keysPressed.includes(key));
    if (isMatch) {
      callback();
    }
    setKeysPressed([]);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    console.log(keysPressed);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [shortcutKeys]);

  return keysPressed;
};

export default useShortcut;
