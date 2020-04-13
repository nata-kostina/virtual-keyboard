// Row #1 on the keyboard
const rowOne = [{
  keyEng: '`', keyRus: 'ё', name: 'Backquote', type: 'letter',
},
{ key: '1', name: 'Digit1', type: 'digit' },
{ key: '2', name: 'Digit2', type: 'letter' },
{ key: '3', name: 'Digit3', type: 'letter' },
{ key: '4', name: 'Digit4', type: 'letter' },
{ key: '5', name: 'Digit5', type: 'letter' },
{ key: '6', name: 'Digit6', type: 'letter' },
{ key: '7', name: 'Digit7', type: 'letter' },
{ key: '8', name: 'Digit8', type: 'letter' },
{ key: '9', name: 'Digit9', type: 'letter' },
{ key: '0', name: 'Digit0', type: 'letter' },
{ key: '-', name: 'Minus', type: 'letter' },
{ key: '=', name: 'Equal', type: 'letter' },
{ key: 'Backspace', name: 'Backspace', type: 'control' },
];
// Row #2 on the keyboard
const rowTwo = [{ key: 'Tab', name: 'Tab', type: 'control' },
{
  keyEng: 'q', keyRus: 'й', name: 'KeyQ', type: 'letter',
},
{
  keyEng: 'w', keyRus: 'ц', name: 'KeyW', type: 'letter',
},
{
  keyEng: 'e', keyRus: 'у', name: 'KeyE', type: 'letter',
},
{
  keyEng: 'r', keyRus: 'к', name: 'KeyR', type: 'letter',
},
{
  keyEng: 't', keyRus: 'е', name: 'KeyT', type: 'letter',
},
{
  keyEng: 'y', keyRus: 'н', name: 'KeyY', type: 'letter',
},
{
  keyEng: 'u', keyRus: 'г', name: 'KeyU', type: 'letter',
},
{
  keyEng: 'i', keyRus: 'ш', name: 'KeyI', type: 'letter',
},
{
  keyEng: 'o', keyRus: 'щ', name: 'KeyO', type: 'letter',
},
{
  keyEng: 'p', keyRus: 'з', name: 'KeyP', type: 'letter',
},
{
  keyEng: '[', keyRus: 'х', name: 'BracketLeft', type: 'letter',
},
{
  keyEng: ']', keyRus: 'ъ', name: 'BracketRight', type: 'letter',
},
{ key: '\\', name: 'Backslash', type: 'symbol' },
];
// Row #3 on the keyboard
const rowThree = [{ key: 'CapsLock', name: 'CapsLock', type: 'control' },
{
  keyEng: 'a', keyRus: 'ф', name: 'KeyA', type: 'letter',
},
{
  keyEng: 's', keyRus: 'ы', name: 'KeyS', type: 'letter',
},
{
  keyEng: 'd', keyRus: 'в', name: 'KeyD', type: 'letter',
},
{
  keyEng: 'f', keyRus: 'а', name: 'KeyF', type: 'letter',
},
{
  keyEng: 'g', keyRus: 'п', name: 'KeyG', type: 'letter',
},
{
  keyEng: 'h', keyRus: 'р', name: 'KeyH', type: 'letter',
},
{
  keyEng: 'j', keyRus: 'о', name: 'KeyJ', type: 'letter',
},
{
  keyEng: 'k', keyRus: 'л', name: 'KeyK', type: 'letter',
},
{
  keyEng: 'l', keyRus: 'д', name: 'KeyL', type: 'letter',
},
{
  keyEng: ';', keyRus: 'ж', name: 'Semicolon', type: 'letter',
},
{
  keyEng: '\'', keyRus: 'э', name: 'Quote', type: 'letter',
},
{ key: 'Enter', name: 'Enter', type: 'control' },
];
// Row #4 on the keyboard
const rowFour = [{ key: 'Shift', name: 'ShiftLeft', type: 'control' },
{
  keyEng: 'z', keyRus: 'я', name: 'KeyZ', type: 'letter',
},
{
  keyEng: 'x', keyRus: 'ч', name: 'KeyX', type: 'letter',
},
{
  keyEng: 'c', keyRus: 'с', name: 'KeyC', type: 'letter',
},
{
  keyEng: 'v', keyRus: 'м', name: 'KeyV', type: 'letter',
},
{
  keyEng: 'b', keyRus: 'и', name: 'KeyB', type: 'letter',
},
{
  keyEng: 'n', keyRus: 'т', name: 'KeyN', type: 'letter',
},
{
  keyEng: 'm', keyRus: 'ь', name: 'KeyM', type: 'letter',
},
{
  keyEng: ',', keyRus: 'б', name: 'Comma', type: 'letter',
},
{
  keyEng: '.', keyRus: 'ю', name: 'Period', type: 'letter',
},
{
  keyEng: '/', keyRus: '.', name: 'Slash', type: 'letter',
},
{ key: '&#9650;', name: 'ArrowUp', type: 'control' },
{ key: 'Shift', name: 'ShiftRight', type: 'control' },
];
// Row #5 on the keyboard
const rowFive = [
  { key: 'Ctrl', name: 'w', type: 'control' },
  { key: 'Win', name: 'MetaLeft', type: 'control' },
  { key: 'Alt', name: 'AltLeft', type: 'control' },
  { key: '', name: 'Space', type: 'control' },
  { key: 'Alt', name: 'AltRight', type: 'control' },
  { key: 'Ctrl', name: 'ControlRight', type: 'control' },
  { key: '&#9668;', name: 'ArrowLeft', type: 'control' },
  { key: '&#9660;', name: 'ArrowDown', type: 'control' },
  { key: '&#9658;', name: 'ArrowRight', type: 'control' },
];
// Status for keys:  true - turned on/pressed, false - turned off/not pressed
const status = { capslock: false, shift: false };
// Language
//localStorage.clear();
let myLang = localStorage.getItem('lang') || 'eng';
// Array for all keys
const keys = [];
keys.push(rowOne);
keys.push(rowTwo);
keys.push(rowThree);
keys.push(rowFour);
keys.push(rowFive);

// Create Container
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

// Create Title
const title = document.createElement('div');
title.className = 'title';
title.innerHTML = 'RSS Виртуальная клавиатура';
container.append(title);

// Create Textarea
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('rows', '10');
textarea.setAttribute('cols', '80');
container.append(textarea);

// Create Keyboard
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.append(keyboard);

// Build Rows
function buildRow(row) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  document.body.append(rowDiv);
  for (let i = 0; i < row.length; i += 1) {
    const keyBtn = document.createElement('button');
    keyBtn.className = 'button';
    keyBtn.classList.add(`${row[i].name}`);
    keyBtn.classList.add(`${row[i].type}`);
    // if language is English
    if (myLang === 'eng') {
      if (row[i].hasOwnProperty('keyEng')) {
        keyBtn.innerHTML = row[i].keyEng;
      } else { keyBtn.innerHTML = row[i].key; }
    }
    // if language is Russian
    else
      if (myLang === 'ru') {
        if (row[i].hasOwnProperty('keyRus')) {
          keyBtn.innerHTML = row[i].keyRus;
        } else { keyBtn.innerHTML = row[i].key; }
      }
    keyBtn.setAttribute('type', 'button');
    rowDiv.append(keyBtn);
  }
  keyboard.append(rowDiv);
}

// Build Keyboard
function createKeyboard() {
  for (let i = 0; i < keys.length; i += 1) {
    buildRow(keys[i]);
  }
}
createKeyboard();

// Put information about OS and language change
const info = document.createElement('div');
info.className = 'info';
container.append(info);
info.innerHTML = '<p>OS: Windows 10</p><p>Switch language: ShiftLeft + AltLeft</p>';

// Change Language
function changeLanguage() {
  myLang = myLang === 'eng' ? 'ru' : 'eng';
  localStorage.setItem('lang', myLang); 
  for (let i = 0; i < keys.length; i += 1) {
    if (localStorage.getItem('lang') === 'ru') {
      for (const el of keys[i]) {
        if (el.hasOwnProperty('keyRus')) {
          document.querySelector(`.${el.name}`).innerHTML = el.keyRus;
        }
      }
    } else
      if (localStorage.getItem('lang') === 'eng') {
        for (const el of keys[i]) {
          if (el.hasOwnProperty('keyEng')) {
            document.querySelector(`.${el.name}`).innerHTML = el.keyEng;
          }
        }
      }
  }
}

// Highlight Capslock
function highlightCapslock() {
  document.querySelector('.CapsLock').classList.toggle('capslock_highlighted');
}

// Handle control keys
function handleControl(key) {
  // Handle CapsLock
  if (key.classList.contains('CapsLock')) {
    document.querySelectorAll('.letter').forEach((el) => {
      el.classList.toggle('capslock-on');
    });
    status.capslock = !(status.capslock);
    highlightCapslock();
  }

  // Handle Shift
  if (key.classList.contains('Shift')) {
    status.shift = !(status.shift);
  }

  // Handle Backspace
  if (key.classList.contains('Backspace')) {
    const textareaArray = Array.from(textarea.value);
    // if one symbol is removed
    if (textarea.selectionStart === textarea.selectionEnd) {
      if (textarea.selectionStart === textarea.value.length) {
        textareaArray.splice(textarea.selectionStart - 1, 1);
        textarea.value = textareaArray.join("");
      }
      else {
        textareaArray.splice(textarea.selectionStart - 1, 1);
        textarea.value = textareaArray.join("");
        textarea.selectionStart = textarea.selectionStart - 1;
        textarea.selectionEnd = textarea.selectionStart;
      }
    }
    // if many symbols are removed
    else {
      let cursorStart = textarea.selectionStart;
      textareaArray.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart);
      textarea.value = textareaArray.join("");
      textarea.selectionStart = cursorStart;
      textarea.selectionEnd = textarea.selectionStart;
    }
  }

  // Handle Space
  if (key.classList.contains('Space')) {
    textarea.value += ' ';
  }

  // Handle Tab
  if (key.classList.contains('Tab')) {
    textarea.value += '  ';
  }

  // Handle Enter
  if (key.classList.contains('Enter')) {
    textarea.value += '\n';
  }

  // Handle Arrow Left
  if (key.classList.contains('ArrowLeft')) {
    textarea.selectionStart = textarea.selectionStart - 1;
    textarea.selectionEnd = textarea.selectionStart;
  }

  // Handle Arrow Right
  if (key.classList.contains('ArrowRight')) {
    textarea.selectionStart += 1;
  }

  // Handle Arrow Down
  if (key.classList.contains('ArrowDown')) {
  }

  // Handle Arrow Up
  if (key.classList.contains('ArrowDown')) {
  }
}

// Click Handler
keyboard.addEventListener('click', (event) => {
  textarea.focus();
  const key = event.target.closest('button');
  if (!key) return;
  if (!key.classList.contains('control')) {
    if (key.classList.contains('capslock-on')) {
      textarea.value += event.target.innerHTML.toUpperCase();
    } else { textarea.value += event.target.innerHTML; }
  } else { handleControl(key); }
});

// Highlight Key
function highlight(code) {
  document.querySelector(`.${code}`).classList.toggle('highlighted');
}

// KeyDown Handler
const pressed = new Set(); // contains pressed keys
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  textarea.focus();
  if (document.querySelector(`.${event.code}`) != null) {
    const key = document.querySelector(`.${event.code}`);
    pressed.add(event.code);
    if (pressed.has('ShiftRight') || pressed.has('ShiftLeft')) {
      status.shift = true;
    }
    // handle letters, digits and symbols
    if (!key.classList.contains('control')) {
      if (status.capslock) {
        if (status.shift) { textarea.value += key.innerHTML; }
        if (!status.shift) { textarea.value += key.innerHTML.toUpperCase(); }
      } else if (!status.capslock) {
        if (status.shift) { textarea.value += key.innerHTML.toUpperCase(); }
        if (!status.shift) { textarea.value += key.innerHTML; }
      }
    }
    // handle control keys
    else {
      // change language
      if (pressed.has('ShiftLeft') && pressed.has('AltLeft')) {
        changeLanguage();
      } else { handleControl(key); }
    }
    highlight(event.code);
  }
});

// KeyUp Handler
document.addEventListener('keyup', (event) => {
  //textarea.focus();
  if (document.querySelector(`.${event.code}`) != null) {
    highlight(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      status.shift = false;
    }
    pressed.delete(event.code);
  }
});