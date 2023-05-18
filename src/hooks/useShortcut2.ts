import { useEffect, useState } from 'react';

type Shortcut = {
  command: string;
  shortcuts: string[];
};

const useShortcut2 = (
  shortcutsJson: Shortcut[],
  command: string,
  callback: () => void
) => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(shortcutsJson);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const matchingShortcut = shortcuts.find(
        (shortcut) => shortcut.command === command
      );
     

      if (matchingShortcut) {

        const { shortcuts: keys } = matchingShortcut;
      
        if (keys.every((key) => event[`${key.toLowerCase()}Key`])) {
            console.log('change')
          event.preventDefault();
          callback();
         
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
 
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [command, callback, shortcuts]);

  return shortcuts;
};

export default useShortcut2;
