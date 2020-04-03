import keyboardPattern from './keyboard/keyboardComponents/keyboardPattern';
import keyboardPatternShift from './keyboard/keyboardComponents/keyboardPatternShift';
import lettersRus from './keyboard/keyboardComponents/lettersRus';
import lettersRusShift from './keyboard/keyboardComponents/lettersRusShift';
import lettersEng from './keyboard/keyboardComponents/lettersEng';
import lettersEngShift from './keyboard/keyboardComponents/lettersEngShift';

import keyboardCreate from './keyboard/keyboardCreate';
import renderKeyboard from './keyboard/renderKeyboard';


let keysRus = keyboardCreate(keyboardPattern, lettersRus, false);
let keysRusShift = keyboardCreate(keyboardPattern, lettersRusShift, true, keyboardPatternShift);
let keysEng = keyboardCreate(keyboardPattern, lettersEng, false);
let keysEngShift = keyboardCreate(keyboardPattern, lettersEngShift, true, keyboardPatternShift);

let keyboardRus = renderKeyboard(keysRus);
let keyboardRusShift = renderKeyboard(keysRusShift);
let keyboardEng = renderKeyboard(keysEng);
let keyboardEngShift = renderKeyboard(keysEngShift);

let languages = [keyboardEng, keyboardEngShift, keyboardRus, keyboardRusShift];

export default languages;
