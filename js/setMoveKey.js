var setMoveKey = (e, event, text) => {
  switch (event.code) {
    case 'Space':
      text.textContent += ' ';
      return;
  }
  switch (event.key) {
    case 'Backspace':
      text.textContent = text.textContent.slice(0, text.textContent.length - 1);
      break;
    case 'Enter':
      text.textContent += `\n`;
      break;
    case 'CapsLock':
      CAPS = !CAPS;
      break;
    //  case 'Space':
    //    text.textContent += ' ';
    //    break;
    case 'Tab':
    case 'Del':
    case 'Shift':
    case 'Enter':
    case 'Alt':
    case 'Control':
    case 'Meta':
      break;
    default:
      CAPS ? (text.textContent += e.innerHTML.toUpperCase()) : (text.textContent += e.innerHTML);
  }

  //   text.textContent += e.innerHTML;
  //   if (e.code == 'ArrowLeft') text.setSelectionRange(text.textContent.length - 1, text.textContent.length - 1);
};
