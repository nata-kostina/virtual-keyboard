const row_one_additional = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''];

const row_one = [{ key: '`', name: 'Backquote', type: 'control' },
{ key: '1', name: 'Digit1', type: 'letter' },
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

const row_two = [{ key: 'Tab', name: 'Tab', type: 'control' },
{ key: 'q', name: 'KeyQ', type: 'letter' },
{ key: 'w', name: 'KeyW', type: 'letter' },
{ key: 'e', name: 'KeyE', type: 'letter' },
{ key: 'r', name: 'KeyR', type: 'letter' },
{ key: 't', name: 'KeyT', type: 'letter' },
{ key: 'y', name: 'KeyY', type: 'letter' },
{ key: 'u', name: 'KeyU', type: 'letter' },
{ key: 'i', name: 'KeyI', type: 'letter' },
{ key: 'o', name: 'KeyO', type: 'letter' },
{ key: 'p', name: 'KeyP', type: 'letter' },
{ key: '[', name: 'BracketLeft', type: 'letter' },
{ key: ']', name: 'BracketRight', type: 'letter' },
{ key: '\\', name: 'Backslash', type: 'letter' }
];

const row_three =
  [{ key: 'CapsLock', name: 'CapsLock', type: 'control' },
  { key: 'a', name: 'KeyA', type: 'letter' },
  { key: 's', name: 'KeyS', type: 'letter' },
  { key: 'd', name: 'KeyD', type: 'letter' },
  { key: 'f', name: 'KeyF', type: 'letter' },
  { key: 'g', name: 'KeyG', type: 'letter' },
  { key: 'h', name: 'KeyH', type: 'letter' },
  { key: 'j', name: 'KeyJ', type: 'letter' },
  { key: 'k', name: 'KeyK', type: 'letter' },
  { key: 'l', name: 'KeyL', type: 'letter' },
  { key: ';', name: 'Semicolon', type: 'letter' },
  { key: '\'', name: 'Quote', type: 'letter' },
  { key: 'Enter', name: 'Enter', type: 'control' }
  ];

const row_four =
  [{ key: 'Shift', name: 'ShiftLeft', type: 'control' },
  { key: 'z', name: 'KeyZ', type: 'letter' },
  { key: 'x', name: 'KeyX', type: 'letter' },
  { key: 'c', name: 'KeyC', type: 'letter' },
  { key: 'v', name: 'KeyV', type: 'letter' },
  { key: 'b', name: 'KeyB', type: 'letter' },
  { key: 'n', name: 'KeyN', type: 'letter' },
  { key: 'm', name: 'KeyM', type: 'letter' },
  { key: ',', name: 'Comma', type: 'letter' },
  { key: '.', name: 'Period', type: 'letter' },
  { key: '/', name: 'Slash', type: 'letter' },
  { key: 'Arr', name: 'ArrowUp', type: 'control' },
  { key: 'Shift', name: 'ShiftRight', type: 'control' }
  ];

const row_five = [{ key: 'Ctrl', name: 'ControlLeft', type: 'control' },
{ key: 'Win', name: 'MetaLeft', type: 'control' },
{ key: 'Alt', name: 'AltLeft', type: 'control' },
{ key: 'Space', name: 'Space', type: 'control' },
{ key: 'Alt', name: 'AltRight', type: 'control' },
{ key: 'Ctrl', name: 'ControlRight', type: 'control' },
{ key: 'Arr', name: 'ArrowLeft', type: 'control' },
{ key: 'Arr', name: 'ArrowDown', type: 'control' },
{ key: 'Arr', name: 'ArrowRight', type: 'control' },
];

const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const title = document.createElement('div');
title.className = 'title';
title.innerHTML = 'RSS Виртуальная клавиатура';
container.append(title);

// Create Textarea
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('rows', '10');
textarea.setAttribute('cols', '80');

//textarea.setAttribute('readonly', 'readonly');
container.append(textarea);

// Create Keyboard
const keyboard = document.createElement('keyboard');
keyboard.className = 'keyboard';
container.append(keyboard);

// Build Rows 
function buildRow(row, n) {
  let rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  document.body.append(rowDiv);
  for (i = 0; i < row.length; i++) {
    let key = document.createElement('button');
    key.className = 'button';
    key.classList.add(`${row[i].name}`);
    key.classList.add(`${row[i].type}`);
    key.innerHTML = row[i].key;
    rowDiv.append(key);
  }
  keyboard.append(rowDiv);
}

buildRow(row_one, 1);
buildRow(row_two, 2);
buildRow(row_three, 3);
buildRow(row_four, 4);
buildRow(row_five, 5);

textarea.focus();

textarea.onblur = function () {
  textarea.focus();
}

// Cursor Handler

function handleCursor() {
  let cursorPosition = textarea.selectionStart;
  textarea.selectionStart = cursorPosition - 1;
  textarea.selectionEnd =textarea.selectionStart;
}

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

//

function handleControl(key) {

  // Handle CapsLock
  if (key.classList.contains('CapsLock')) {
    document.querySelectorAll('.letter').forEach((el) => {
      el.classList.toggle('capslock-on');
    })
  }

  // Handle Backspace
  if (key.classList.contains('Backspace')) {
    //textarea.focus();
    if (textarea.selectionStart == textarea.selectionEnd) {
      textarea.value = textarea.value.substring(0, textarea.selectionStart - 1) + textarea.value.substring(textarea.selectionStart, textarea.value.length);
    }
    else

    handleCursor();
  }

  // Handle Space
  if (key.classList.contains('Space')) {
    textarea.value += ' ';
  }

  // Handle Tab
  if (key.classList.contains('Tab')) {
    textarea.value += '  ';
  }
}


// KeyDown Handler

document.addEventListener('keydown', (event) => {
  //if (event.shiftKey )
  textarea.innerHTML += event.key;
  // console.log(event.code);
  highlight(event.code);
});

// KeyUp Handler

document.addEventListener('keyup', (event) => {
  //if (event.shiftKey )
  highlight(event.code);
});

function highlight(code) {
  document.querySelector(`.${code}`).classList.toggle('highlighted');
}