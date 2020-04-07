const row_one_additional = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''];
// Row #1 on the keyboard
const row_one = [{ keyEng: '`', keyRus: 'ё', name: 'Backquote', type: 'q' },
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
{ key: 'Backspace', name: 'Backspace', type: 'control' }
];
// Row #2 on the keyboard
const row_two = [{ key: 'Tab', name: 'Tab', type: 'control' },
{ keyEng: 'q', keyRus: 'й', name: 'KeyQ', type: 'letter' },
{ keyEng: 'w', keyRus: 'ц', name: 'KeyW', type: 'letter' },
{ keyEng: 'e', keyRus: 'у', name: 'KeyE', type: 'letter' },
{ keyEng: 'r', keyRus: 'к', name: 'KeyR', type: 'letter' },
{ keyEng: 't', keyRus: 'е', name: 'KeyT', type: 'letter' },
{ keyEng: 'y', keyRus: 'н', name: 'KeyY', type: 'letter' },
{ keyEng: 'u', keyRus: 'г', name: 'KeyU', type: 'letter' },
{ keyEng: 'i', keyRus: 'ш', name: 'KeyI', type: 'letter' },
{ keyEng: 'o', keyRus: 'щ', name: 'KeyO', type: 'letter' },
{ keyEng: 'p', keyRus: 'з', name: 'KeyP', type: 'letter' },
{ keyEng: '[', keyRus: 'х', name: 'BracketLeft', type: 'letter' },
{ keyEng: ']', keyRus: 'ъ', name: 'BracketRight', type: 'letter' },
{ key: '\\', name: 'Backslash', type: 'symbol' }
];
// Row #3 on the keyboard
const row_three =
  [{ key: 'CapsLock', name: 'CapsLock', type: 'control' },
  { keyEng: 'a', keyRus: 'ф', name: 'KeyA', type: 'letter' },
  { keyEng: 's', keyRus: 'ы', name: 'KeyS', type: 'letter' },
  { keyEng: 'd', keyRus: 'в', name: 'KeyD', type: 'letter' },
  { keyEng: 'f', keyRus: 'а', name: 'KeyF', type: 'letter' },
  { keyEng: 'g', keyRus: 'п', name: 'KeyG', type: 'letter' },
  { keyEng: 'h', keyRus: 'р', name: 'KeyH', type: 'letter' },
  { keyEng: 'j', keyRus: 'о', name: 'KeyJ', type: 'letter' },
  { keyEng: 'k', keyRus: 'л', name: 'KeyK', type: 'letter' },
  { keyEng: 'l', keyRus: 'д', name: 'KeyL', type: 'letter' },
  { keyEng: ';', keyRus: 'ж', name: 'Semicolon', type: 'letter' },
  { keyEng: '\'', keyRus: 'э', name: 'Quote', type: 'letter' },
  { key: 'Enter', name: 'Enter', type: 'control' }
  ];
// Row #4 on the keyboard
const row_four =
  [{ key: 'Shift', name: 'ShiftLeft', type: 'control' },
  { keyEng: 'z', keyRus: 'я', name: 'KeyZ', type: 'letter' },
  { keyEng: 'x', keyRus: 'ч', name: 'KeyX', type: 'letter' },
  { keyEng: 'c', keyRus: 'с', name: 'KeyC', type: 'letter' },
  { keyEng: 'v', keyRus: 'м', name: 'KeyV', type: 'letter' },
  { keyEng: 'b', keyRus: 'и', name: 'KeyB', type: 'letter' },
  { keyEng: 'n', keyRus: 'т', name: 'KeyN', type: 'letter' },
  { keyEng: 'm', keyRus: 'ь', name: 'KeyM', type: 'letter' },
  { keyEng: ',', keyRus: 'б', name: 'Comma', type: 'letter' },
  { keyEng: '.', keyRus: 'ю', name: 'Period', type: 'letter' },
  { keyEng: '/', keyRus: '.', name: 'Slash', type: 'letter' },
  { key: '&#9650;', name: 'ArrowUp', type: 'control' },
  { key: 'Shift', name: 'ShiftRight', type: 'control' }
  ];
// Row #5 on the keyboard
const row_five = [
  //{ key: 'Ctrl', name: 'ControlLeft', type: 'control' },
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
// Status for keys:  true - turned on/pressed  false - turned off/not pressed
const status = { capslock: false, shift: false };
// Language
const lang = { eng: true, rus: false };
// Array for all keys
const keys = [];
keys.push(row_one);
keys.push(row_two);
keys.push(row_three);
keys.push(row_four);
keys.push(row_five);

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
textarea.focus();
textarea.onkeydown = () => false;
//document.addEventListener('keydown', (evt) => {
// evt.preventDefault();
//});
textarea.onblur = function () {
textarea.focus();
}

// Create Keyboard
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.append(keyboard);
createKeyboard();

// Build Rows 
function buildRow(row) {
  let rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  document.body.append(rowDiv);
  for (i = 0; i < row.length; i++) {
    let keyBtn = document.createElement('button');
    keyBtn.className = 'button';
    keyBtn.classList.add(`${row[i].name}`);
    keyBtn.classList.add(`${row[i].type}`);
    if (row[i].hasOwnProperty('keyEng')) {
      keyBtn.innerHTML = row[i].keyEng;
    }
    else
      keyBtn.innerHTML = row[i].key;
    keyBtn.setAttribute('type', 'button');
    rowDiv.append(keyBtn);
  }
  keyboard.append(rowDiv);
  console.log('hi');
}

// Build Keyboard
function createKeyboard() {
  for (let i = 0; i < keys.length; i++) {
    buildRow(keys[i]);
  }
}

// Put information about OS and language change
const info = document.createElement('div');
info.className = 'info';
container.append(info);
info.innerHTML = '<p>OS: Windows 10</p><p>Change language: ShiftLeft + AltLeft</p>';

// Change Language
function changeLanguage() {
  lang.eng = !lang.eng;
  lang.rus = !lang.rus;
  for (let i = 0; i < keys.length; i++) {
    if (lang.rus) {
      for (el of keys[i]) {
        if (el.hasOwnProperty('keyRus')) {
          document.querySelector(`.${el.name}`).innerHTML = el.keyRus;
        }
      }
    }
    else
      if (lang.eng) {
        for (el of keys[i]) {
          if (el.hasOwnProperty('keyEng')) {
            document.querySelector(`.${el.name}`).innerHTML = el.keyEng;
          }
        }
      }
  }
}
// Cursor Handler

/*function handleCursor(event) {
  switch (event) {
    case 'click': if (textarea.value.length == textarea.selectionStart) { console.log('hi') } else {
      let cursorPosition = textarea.selectionStart;
      textarea.selectionStart = cursorPosition - 1;
      textarea.selectionEnd = textarea.selectionStart;
    } break;
    case 'key':
      textarea.selectionStart = textarea.value.length;
      textarea.selectionEnd = textarea.selectionStart;
      break;
  }

}
*/

// Click Handler
keyboard.addEventListener('click', (event) => {
  let key = event.target.closest('button');
  if (!key) return;
  if (!key.classList.contains('control')) {

    if (key.classList.contains('capslock-on')) {
      textarea.value += event.target.innerHTML.toUpperCase();
    } else
      textarea.value += event.target.innerHTML;
  }
  else { handleControl(key) }
});

// Handle control keys
function handleControl(key) {
  // Handle CapsLock
  if (key.classList.contains('CapsLock')) {
    document.querySelectorAll('.letter').forEach((el) => {
      el.classList.toggle('capslock-on');
    })
    status.capslock = !(status.capslock);
    highlightCapslock();
  }

  // Handle Shift
  if (key.classList.contains('Shift')) {
    status.shift = !(status.shift);
  }

  // Handle Backspace
  if (key.classList.contains('Backspace')) {
    if (textarea.selectionStart == textarea.selectionEnd) {
      textarea.value = textarea.value.substring(0, textarea.selectionStart - 1) + textarea.value.substring(textarea.selectionStart, textarea.value.length);
    }
    else {
      textarea.value = textarea.value.substring(0, textarea.selectionStart) + textarea.value.substring(textarea.selectionEnd, textarea.value.length);
    }
    //  handleCursor('click');
  }

  // Handle Space
  if (key.classList.contains('Space')) {
    textarea.value += ' ';
  }

  // Handle Tab
  if (key.classList.contains('Tab')) {
    textarea.value += '  ';
  }

  // Handle Arrow Left
  if (key.classList.contains('ArrowLeft')) {
    textarea.selectionStart--;
    textarea.selectionEnd--;
  }

  // Handle Arrow Right
  if (key.classList.contains('ArrowRight')) {
    textarea.selectionStart++;
  }
}

// KeyDown Handler
let pressed = new Set();  // contains pressed keys
document.addEventListener('keydown', (event) => {
  if (document.querySelector(`.${event.code}`) != null) {
    let key = document.querySelector(`.${event.code}`);
    pressed.add(event.code);
    if (pressed.has('ShiftRight') || pressed.has('ShiftLeft')) {
      status.shift = true;
    }
    // handle letters, digits and symbols
    if (!key.classList.contains('control')) {
      if (status.capslock) {
        if (status.shift) { textarea.value += key.innerHTML; }
        if (!status.shift) { textarea.value += key.innerHTML.toUpperCase(); }
      } else {
        if (!status.capslock) {
          if (status.shift) { textarea.value += key.innerHTML.toUpperCase(); }
          if (!status.shift) { textarea.value += key.innerHTML; }
        }
      }
    }
    // handle control keys
    else {
      // change language
      if (pressed.has('ShiftLeft') && pressed.has('AltLeft')) {
        changeLanguage();
      }
      else
        handleControl(key);
    }
    press(event.code);
  }
});

// KeyUp Handler
document.addEventListener('keyup', (event) => {
  if (document.querySelector(`.${event.code}`) != null) {
    press(event.code);
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      status.shift = false;
    }
    pressed.delete(event.code);

  }
});

function press(code) {
  document.querySelector(`.${code}`).classList.toggle('pressed');
};

function highlightCapslock() {
  document.querySelector('.CapsLock').classList.toggle('capslock_highlighted');
}