var setClassName = (e, div) => {
  typeof e == 'number' ? (div.className = 'n' + e) : (div.className = e);
  switch (e) {
    case '-':
      div.className = 'Minus';
      break;
    case 'Caps Lock':
      div.className = 'CapsLock';
      break;
    case '=':
      div.className = 'Equal';
      break;
    case '/':
      //   case '.':
      div.className = 'Slash';
      break;
    case 'Ctrl':
      div.className = 'Control';
      break;
    case 'Del':
      div.className = 'NumpadDecimal';
      break;
    case `&#8593;`:
      div.className = 'ArrowUp';
      break;
    case `&#8592;`:
      div.className = 'ArrowLeft';
      break;
    case `&#8595;`:
      div.className = 'ArrowDown';
      break;
    case `&#8594;`:
      div.className = 'ArrowRight';
      break;
    case `[`:
      div.className = 'BracketLeft';
      break;
    case `]`:
      div.className = 'BracketRight';
      break;
    case `;`:
      div.className = 'Semicolon';
      break;
    case `'`:
      div.className = 'Quote';
      break;
    case `,`:
      div.className = 'Comma';
      break;
    case `.`:
      div.className = 'Period';
      break;
    case `\\`:
      div.className = 'Backslash';
      break;
    case `\``:
      div.className = 'Backquote';
      break;
    case `Win`:
      div.className = 'MetaLeft';
      break;
  }
};
