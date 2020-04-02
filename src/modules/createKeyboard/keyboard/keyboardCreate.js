const keyboardCreate = (keyboardPattern, letters, shiftActive, keyboardPatternShift) => {
  let keyboard = {};

  for (let key in keyboardPattern) {
    if (shiftActive && key == 'row_1') keyboard[key] = keyboardPatternShift[key].map(el => el);
    else keyboard[key] = keyboardPattern[key].map(el => el);
    
    for (let i = 0, j = 0; i < keyboard[key].length; i++) {
      if (keyboard[key][i] == '' && letters[key][j]) {
        keyboard[key][i] = letters[key][j];
        j++;
      }
    }
  }
  return keyboard;
};

export default keyboardCreate;
