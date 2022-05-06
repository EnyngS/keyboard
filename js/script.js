const ru = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', `&#8593;`, 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', `&#8592;`, `&#8595;`, `&#8594;`];
let wrapper = document.createElement('div');
let text = document.createElement('textarea');
wrapper.className = 'wrap';
text.className = 'text';
text.rows = 10;
let count = false;
const setClassName = (e, div) => {
  typeof e == 'number' ? (div.className = 'n' + e) : (div.className = e);
  switch (e) {
    case '-':
      div.className = 'Minus';
      break;
    case '=':
      div.className = 'Equal';
      break;
    //  case '/':
    case '.':
      div.className = 'Slash';
      break;
    case 'Ctrl':
      div.className = 'Control';
      break;
    case 'Del':
      div.className = 'NumpadDecimal';
      break;
  }
};
for (let i of ru) {
  let div = document.createElement('div');
  setClassName(i, div);

  i == 'Backspace' || i == 'Caps Lock' || i == 'Enter' || i == 'Del' ? div.classList.add('double') : '';
  if (i == 'Shift' && !count) {
    count = true;
    div.classList.add('tree');
  }
  i == 'space' ? (i = ' ') : '';
  div.innerHTML = i;
  wrapper.append(div);
}
document.body.append(text);
document.body.append(wrapper);
const setKeyName = (e) => {
  if (e.key.match(/[0-9]/)) return 'n' + e.key;
  if (e.code == 'ControlLeft' || e.code == 'ControlRight') return 'Control';
  //   if (e.key.match(/[-=/.]/)) return 's' + e.key;
  switch (e.code) {
    case 'Slash':
    case 'Minus':
    case 'Equal':
    case 'NumpadDecimal':
    case 'Space':
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
      return e.key.toLowerCase();
  }
};
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  console.log(event.code);
  let key = document.querySelectorAll(`.${setKeyName(event)}`);
  key.forEach((e) => {
    e.classList.add('active');
  });
  text.textContent += event.key;
  if (event.code == 'KeyZ') {
  }
});
document.addEventListener('mousedown', function (event) {
  event.target.classList.add('active');
});
document.addEventListener('mouseup', function (event) {
  event.target.classList.remove('active');
});

document.addEventListener('keyup', function (event) {
  let key = document.querySelectorAll(`.${setKeyName(event)}`);
  key.forEach((e) => {
    e.classList.remove('active');
  });
  if (event.code == 'KeyZ') {
  }
});
