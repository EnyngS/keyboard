const ru = [['ё', `\``], 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace', 'Tab', ['й', 'q'], ['ц', 'w'], ['у', 'e'], ['к', 'r'], ['е', 't'], ['н', 'y'], ['г', 'u'], ['ш', 'i'], ['щ', 'o'], ['з', 'p'], ['х', `\[`], ['ъ', ']'], '\\', 'Caps Lock', ['ф', 'a'], ['ы', 's'], ['в', 'd'], ['а', 'f'], ['п', 'g'], ['р', 'h'], ['о', 'j'], ['л', 'k'], ['д', 'l'], ['ж', ';'], ['э', "'"], 'Enter', 'Shift', ['я', 'z'], ['ч', 'x'], ['с', 'c'], ['м', 'v'], ['и', 'b'], ['т', 'n'], ['ь', 'm'], ['б', ','], ['ю', '.'], ['.', '/'], `&#8593;`, 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', `&#8592;`, `&#8595;`, `&#8594;`];

let text = document.createElement('textarea');
let wrapper = document.createElement('div');
wrapper.className = 'wrap';
text.className = 'text';
text.rows = 10;
text.autofocus = true;
text.onclick = () => false;
text.disabled = true;
text.onchange = (e) => console.log(false);
let count = false;
var CAPS = false;
let langEN = false;
let rus;
let en;
let div;
for (let i of ru) {
  if (Array.isArray(i)) {
    [rus, en] = i;
    !langEN ? (i = rus) : (i = en);
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
  i.toString().match(/[а-я]/i) ? (div.style.backgroundColor = 'grey') : '';
}

const setKey = (wrapper) => {
  count = false;

  wrapper.innerHTML = '';

  for (let i of ru) {
    if (Array.isArray(i)) {
      [rus, en] = i;
      !langEN ? (i = rus) : (i = en);
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

document.addEventListener('keydown', function (event) {
  if (event.key != 'F12') {
    event.preventDefault();
  }
  if (event.ctrlKey && event.altKey) {
    CAPS = false;
    langEN = !langEN;
    setKey(wrapper);
  }
  if (event.key == 'Shift' || event.key == 'ShiftLeft') {
    CAPS = !CAPS;
  }

  let key = document.querySelectorAll(`.${setKeyName(event, langEN)}`);
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
      text.setSelectionRange(text.textContent.length, text.textContent.length);
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
