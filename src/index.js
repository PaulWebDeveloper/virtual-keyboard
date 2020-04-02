import createDevice from './modules/createDevice/createDevice';
import loadingKeyboard from './modules/createKeyboard/loadingKeyboard';
import {keyboardRus, keyboardRusShift, keyboardEng, keyboardEngShift} from './modules/createKeyboard/keyboardBuilder';
import './index.css';

createDevice();
loadingKeyboard(keyboardRus);

window.addEventListener('keydown', (e) => {
  if(e.key == 'Shift') loadingKeyboard(keyboardRusShift);
});

window.addEventListener('keyup', (e) => {
  if(e.key == 'Shift') loadingKeyboard(keyboardRus);
});
