const ru = [['ё', `\``], 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace', 'Tab', ['й', 'q'], ['ц', 'w'], ['у', 'e'], ['к', 'r'], ['е', 't'], ['н', 'y'], ['г', 'u'], ['ш', 'i'], ['щ', 'o'], ['з', 'p'], ['х', `\[`], ['ъ', ']'], '\\', 'Caps Lock', ['ф', 'a'], ['ы', 's'], ['в', 'd'], ['а', 'f'], ['п', 'g'], ['р', 'h'], ['о', 'j'], ['л', 'k'], ['д', 'l'], ['ж', ';'], ['э', "'"], 'Enter', 'Shift', ['я', 'z'], ['ч', 'x'], ['с', 'c'], ['м', 'v'], ['и', 'b'], ['т', 'n'], ['ь', 'm'], ['б', ','], ['ю', '.'], ['.', '/'], `&#8593;`, 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', `&#8592;`, `&#8595;`, `&#8594;`];
var setMoveKey = (e, event, text) => {
  switch (event.code) {
    case 'Space':
      text.textContent += ' ';
      return;
    case 'Tab':
      text.textContent += '    ';
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
};
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
let text = document.createElement('textarea');
let wrapper = document.createElement('div');
wrapper.className = 'wrap';
text.className = 'text';
text.rows = 10;
text.autofocus = true;
text.onclick = () => false;
text.disabled = true;
text.onchange = (e) => console.log(false);
text.select();
let langInfo = document.createElement('div');
langInfo.style.cssText = `  
text-content: center;
margin: 50px auto;
display: flex;
align-items: center;
justify-content: center;
color: black;
font-size: 30px;
`;
langInfo.textContent = 'Ctrl+Alt: EN-RU';
let count = false;
var CAPS = false;
let langEN = localStorage.getItem('lang');
console.log(localStorage.lang);
// localStorage.setItem('lang', langEN);
let rus;
let en;
let div;
for (let i of ru) {
  if (Array.isArray(i)) {
    [rus, en] = i;
    console.log(localStorage.lang);
    let langE = localStorage.getItem('lang');
    console.log(langE);
    langE == 'true' ? (i = en) : (i = rus);
    div = document.createElement('div');
    setClassName(en, div);
  } else {
    div = document.createElement('div');
    setClassName(i, div);
  }
  div.style.cssText = `  border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    color: antiquewhite;
    font-size: 26px;
    background-color: #282c34;`;

  i == 'Backspace' || i == 'Caps Lock' || i == 'Enter' || i == '\\' ? (div.style.width = '150px') : '';
  if ((i == 'ShiftLeft' || i == 'Shift') && !count) {
    count = true;
    div.style.width = '210px';
    div.classList.add('tree');
  }
  if (i == 'Space') {
    i = ' ';
    div.style.width = '540px';
  }
  div.innerHTML = i;
  wrapper.append(div);
  i.toString().match(/[а-яa-z\]\[;',./]/i) && i.toString().length == 1 ? (div.style.backgroundColor = 'grey') : '';
}

const setKey = (wrapper) => {
  count = false;

  wrapper.innerHTML = '';

  for (let i of ru) {
    if (Array.isArray(i)) {
      [rus, en] = i;
      let langE = localStorage.getItem('lang');
      langE == 'true' ? (i = en) : (i = rus);
      div = document.createElement('div');
      setClassName(en, div);
    } else {
      div = document.createElement('div');
      setClassName(i, div);
    }
    div.style.cssText = `  border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    color: antiquewhite;
    font-size: 26px;
    background-color: #282c34;`;

    i == 'Backspace' || i == 'Caps Lock' || i == 'Enter' || i == '\\' ? (div.style.width = '150px') : '';
    if ((i == 'ShiftLeft' || i == 'Shift') && !count) {
      count = true;
      div.style.width = '210px';
      div.classList.add('tree');
    }
    if (i == 'Space') {
      i = ' ';
      div.style.width = '540px';
    }
    div.innerHTML = i;
    wrapper.append(div);
    i.toString().match(/[а-яa-z\]\[;',./]/i) && i.toString().length == 1 ? (div.style.backgroundColor = 'grey') : '';
  }
};
document.body.append(text);
document.body.append(wrapper);
document.body.append(langInfo);

document.addEventListener('keydown', function (event) {
  if (event.key != 'F12') {
    event.preventDefault();
  }
  if (event.ctrlKey && event.altKey) {
    //  localStorage;
    CAPS = false;
    langEN = !langEN;
    //  let k = !localStorage.getItem(lang);
    localStorage.setItem('lang', langEN);
    console.log(localStorage.lang);
    //  langEN = !langEN;
    //  localStorage.lang ? (localStorage.lang = false) : (localStorage.lang = true);
    setKey(wrapper);
  }
  if (event.key == 'Shift' || event.key == 'ShiftLeft') {
    CAPS = !CAPS;
  }

  let key = document.querySelectorAll(`.${setKeyName(event, localStorage.getItem('lang'))}`);
  key.forEach((e) => {
    if (e.textContent == 'Caps Lock' && CAPS) {
      e.style.backgroundColor = '#282c34';
    } else e.style.backgroundColor = 'aqua';

    setMoveKey(e, event, text);
  });

  text.setSelectionRange(text.textContent.length, text.textContent.length);
  if (event.code == 'KeyZ') {
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key == 'Shift') {
    CAPS = !CAPS;
  }

  let key = document.querySelectorAll(`.${setKeyName(event)}`);
  key.forEach((e) => {
    if (event.key != 'CapsLock') {
      e.textContent.toString().match(/[а-яa-z\]\[;',./]/i) && e.textContent.toString().length == 1 ? (e.style.backgroundColor = 'grey') : (e.style.backgroundColor = '#282c34');
    }
  });
  if (event.code == 'KeyZ') {
  }
});
document.addEventListener('mousedown', function (event) {
  if (!event.target.closest('.wrap') || event.target.className == 'wrap') return;
  event.target.style.backgroundColor = 'aqua';
  switch (event.target.textContent) {
    case 'Win':
    case 'Tab':
    case 'Shift':
      break;
    case 'Enter':
      text.textContent += `\n`;
      break;
    case 'Caps Lock':
      event.target.classList.toggle('active');
      CAPS ? (event.target.style.backgroundColor = '#282c34') : '';
      CAPS = !CAPS;
      break;
    case 'Backspace':
      text.textContent = text.textContent.slice(0, text.textContent.length - 1);
      break;
    case 'Ctrl':
    case 'Alt':
      return;
    default:
      event.target.style.backgroundColor = 'aqua';

      CAPS ? (text.textContent += event.target.innerHTML.toUpperCase()) : (text.textContent += event.target.innerHTML);
      text.setSelectionRange(0, text.textContent.length);
  }
});
document.addEventListener('mouseup', function (event) {
  if (!event.target.closest('.wrap') || event.target.className == 'wrap') return;
  if (event.target.textContent != 'Caps Lock') event.target.textContent.toString().match(/[а-яa-z\]\[;',./]/i) && event.target.textContent.toString().length == 1 ? (event.target.style.backgroundColor = 'grey') : (event.target.style.backgroundColor = '#282c34');
});

// ================================
text.style.cssText = ` display: block;
width: 1170px;
margin: 50px auto;
border: 3px solid #282c34;
border-radius: 20px;
margin-bottom: 30px;
background-color: #282c34;
padding: 20px;
font-size: 20px;
color: antiquewhite;`;

wrapper.style.cssText = ` width: 1170px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
grid-gap: 8px;
justify-content: space-between;`;
