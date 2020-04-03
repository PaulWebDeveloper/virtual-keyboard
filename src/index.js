import createDevice from './modules/createDevice/createDevice';
import changeLanguage from './modules/changeLanguage/changeLanguage';
import loadLanguage from './modules/changeLanguage/loadLanguage';
import './index.css';
import keyDown from './modules/events/keyDown';
import keyUp from './modules/events/keyUp';
import mouseDown from './modules/events/mouseDown.js';
import mouseUp from './modules/events/mouseUp.js';

createDevice();
loadLanguage();
changeLanguage();

const KEYBOARD = document.querySelector('.keyboard');

KEYBOARD.addEventListener('mousedown', (e) => mouseDown(e));
KEYBOARD.addEventListener('mouseup', (e) => mouseUp(e));

window.addEventListener('keydown', (e) => keyDown(e));
window.addEventListener('keyup', (e) => keyUp(e));
