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

const removeLetter = (textarea, shiftLeft, shiftRight) => {
  let currentPosition = getCaret(textarea);    
  let text = textarea.value;
  textarea.value = text.substr(0, currentPosition + shiftLeft);
  textarea.value += text.substr(currentPosition + shiftRight, text.length);
  resetCursor(textarea, currentPosition + shiftLeft);
  return textarea;
};

export default removeLetter;
 