const getCaret = (str) => {
  if (str.selectionStart) {
    return str.selectionStart;
  }

  if (document.selection) {
    str.focus();

    const range = document.selection.createRange();
    if (range == null) {
      return 0;
    }

    const rangeStr = str.createTextRange();
    const rangeClone = rangeStr.duplicate();

    rangeStr.moveToBookmark(range.getBookmark());
    rangeClone.setEndPoint('EndToStart', rangeStr);

    return rangeClone.text.length;
  }

  return 0;
};


const resetCursor = (textElement, currentPosition) => {
  if (textElement.setSelectionRange) {
    textElement.focus();
    textElement.setSelectionRange(currentPosition, currentPosition);
  } else if (textElement.createTextRange) {
    const range = textElement.createTextRange();
    range.moveStart('character', currentPosition);
    range.select();
  }
};


const removeLetter = (textarea, shiftLeft, shiftRight) => {
  const currentPosition = getCaret(textarea);
  const text = textarea.value;
  let txt = text.substr(0, currentPosition + shiftLeft);
  txt += text.substr(currentPosition + shiftRight, text.length);

  resetCursor(textarea, currentPosition + shiftLeft);
  return txt;
};

const arrowStep = (textarea, step) => {
  const currentPosition = getCaret(textarea);
  resetCursor(textarea, currentPosition + step);

  return textarea;
};

export {
  removeLetter,
  arrowStep,
};
