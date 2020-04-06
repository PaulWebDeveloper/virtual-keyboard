import keyboardPattern from './keyboard/keyboardComponents/keyboardPattern';
import keyboardPatternShift from './keyboard/keyboardComponents/keyboardPatternShift';
import lettersRus from './keyboard/keyboardComponents/lettersRus';
import lettersRusShift from './keyboard/keyboardComponents/lettersRusShift';
import lettersEng from './keyboard/keyboardComponents/lettersEng';
import lettersEngShift from './keyboard/keyboardComponents/lettersEngShift';

import keyboardCreate from './keyboard/keyboardCreate';
import renderKeyboard from './keyboard/renderKeyboard';


const keysRus = keyboardCreate(keyboardPattern, lettersRus, false);
const keysRusShift = keyboardCreate(keyboardPattern, lettersRusShift, true, keyboardPatternShift);
const keysEng = keyboardCreate(keyboardPattern, lettersEng, false);
const keysEngShift = keyboardCreate(keyboardPattern, lettersEngShift, true, keyboardPatternShift);

const keyboardRus = renderKeyboard(keysRus);
const keyboardRusShift = renderKeyboard(keysRusShift);
const keyboardEng = renderKeyboard(keysEng);
const keyboardEngShift = renderKeyboard(keysEngShift);

const languages = [keyboardEng, keyboardEngShift, keyboardRus, keyboardRusShift];

export default languages;
