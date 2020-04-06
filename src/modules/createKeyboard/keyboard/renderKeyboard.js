const renderKeyboard = (keyboard) => {
  let virtualKeyboard = '';

  Object.keys(keyboard).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(keyboard, key)) {
      let row = '<div class="row">';
      for (let i = 0; i < keyboard[key].length; i += 1) {
        if (keyboard[key][i].length > 1) {
          row += `<div class="key key__modifier">${keyboard[key][i]}</div>`;
        } else {
          row += `<div class="key key__regular">${keyboard[key][i]}</div>`;
        }
      }
      row += '</div>';

      virtualKeyboard += row;
    }
  });
  virtualKeyboard += '<div class="changeLanguage">Change language: <span>Ctrl + Shift</span></div>';

  return virtualKeyboard;
};

export default renderKeyboard;
