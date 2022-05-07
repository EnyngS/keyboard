var setKeyName = (e, lang) => {
  if (e.key.match(/[0-9]/)) return 'n' + e.key;
  if (e.code == 'ControlLeft' || e.code == 'ControlRight') return 'Control';
  //   if (e.key.match(/[-=/.]/)) return 's' + e.key;
  switch (e.code) {
    case 'Slash':
    case 'Minus':
    case 'Equal':
    case 'NumpadDecimal':
    case 'Space':
    case 'ArrowUp':
    case 'ArrowLeft':
    case 'ArrowDown':
    case 'ArrowRight':
    case 'CapsLock':
    case 'BracketLeft':
    case 'BracketRight':
    case 'Semicolon':
    case 'Quote':
    case 'Comma':
    case 'Period':
    case 'Backslash':
    case 'Backquote':
    case 'MetaLeft':
      return e.code;
  }
  switch (e.key) {
    case 'Win':
    case 'Tab':
    case 'Shift':
    case 'Enter':
    case 'Caps Lock':
    case 'Backspace':
    case 'Ctrl':
    case 'Alt':
      return e.key;

    default:
      return e.code[e.code.length - 1].toLowerCase();
      return e.key.toLowerCase();
  }
};
