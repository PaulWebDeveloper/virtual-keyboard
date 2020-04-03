import createDevice from './modules/createDevice/createDevice';
import loadingKeyboard from './modules/createKeyboard/loadingKeyboard';
import {keyboardRus, keyboardRusShift, keyboardEng, keyboardEngShift} from './modules/createKeyboard/keyboardBuilder';
import './index.css';
import keyDown from './modules/events/keyDown';
import keyUp from './modules/events/keyUp';
import mouseDown from './modules/events/mouseDown.js';
import mouseUp from './modules/events/mouseUp.js';


createDevice();
loadingKeyboard(keyboardEng);

window.addEventListener('keydown', (e) => {
  if(e.key == 'Shift') loadingKeyboard(keyboardEngShift);
});

window.addEventListener('keyup', (e) => {
  if(e.key == 'Shift') loadingKeyboard(keyboardEng);
});


const KEYBOARD = document.querySelector('.keyboard');

window.addEventListener('keydown', (e) => keyDown(e));
window.addEventListener('keyup', (e) => keyUp(e));

KEYBOARD.addEventListener('mousedown', (e) => mouseDown(e));
KEYBOARD.addEventListener('mouseup', (e) => mouseUp(e));
