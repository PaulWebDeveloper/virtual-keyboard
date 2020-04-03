const getCaret = (str) => {
  if (str.selectionStart) {
    return str.selectionStart;
  } else if (document.selection) {
    str.focus();

    let range = document.selection.createRange();
    if (range == null) return 0;

    let rangeStr = str.createTextRange(),
        rangeClone = rangeStr.duplicate();
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
    let range = textElement.createTextRange();  
    range.moveStart('character', currentPosition); 
    range.select(); 
  } 
};

const Backspace = (textarea) => {
  let currentPosition = getCaret(textarea);    
  let text = textarea.value;
  textarea.value = text.substr(0, currentPosition - 1) + text.substr(currentPosition, text.length);
  resetCursor(textarea, currentPosition - 1);
  return textarea;
};

const Delete = (textarea) => {
  let currentPosition = getCaret(textarea);    
  let text = textarea.value;
  textarea.value = text.substr(0, currentPosition) + text.substr(currentPosition + 1, text.length);
  resetCursor(textarea, currentPosition);
  return textarea;
};

export {
  Backspace,
  Delete
};
