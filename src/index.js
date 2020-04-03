import createDevice from './modules/createDevice/createDevice';
import loadingKeyboard from './modules/createKeyboard/loadingKeyboard';
import languages from './modules/createKeyboard/keyboardBuilder';
import changeLanguage from './modules/changeLanguage/changeLanguage';
import './index.css';
import keyDown from './modules/events/keyDown';
import keyUp from './modules/events/keyUp';
import mouseDown from './modules/events/mouseDown.js';
import mouseUp from './modules/events/mouseUp.js';

createDevice();
loadingKeyboard(languages[0]);
changeLanguage();

const KEYBOARD = document.querySelector('.keyboard');

window.addEventListener('keydown', (e) => keyDown(e));
window.addEventListener('keyup', (e) => keyUp(e));

KEYBOARD.addEventListener('mousedown', (e) => mouseDown(e));
KEYBOARD.addEventListener('mouseup', (e) => mouseUp(e));
