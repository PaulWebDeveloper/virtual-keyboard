const keyboardCreate = (keyboardPattern, letters, shiftActive, keyboardPatternShift) => {
  const keyboard = {};

  Object.keys(keyboardPattern).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(keyboardPattern, key)) {
      if (shiftActive && key === 'row_1') {
        keyboard[key] = keyboardPatternShift[key].map((el) => el);
      } else {
        keyboard[key] = keyboardPattern[key].map((el) => el);
      }

      for (let i = 0, j = 0; i < keyboard[key].length; i += 1) {
        if (keyboard[key][i] === '' && letters[key][j]) {
          keyboard[key][i] = letters[key][j];
          j += 1;
        }
      }
    }
  });

  return keyboard;
};

export default keyboardCreate;
