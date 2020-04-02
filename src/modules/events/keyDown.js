const keyDown = (event) => {
  document.querySelectorAll('.row .key__regular').forEach(el => {
    if (event.key == el.innerHTML) {
      el.classList.add('active');
    } 
  });
  document.querySelectorAll('.row .key__modifier').forEach(el => {
    if (event.code == 'Tab' && el.innerHTML == 'Tab' || 
      event.code == 'CapsLock' && el.innerHTML == 'Caps Lock' || 
      event.code == 'ShiftLeft' && el.innerHTML == 'Shift' ||
      event.code == 'ShiftRight' && el.innerHTML == 'Shift' ||
      event.code == 'Backspace' && el.innerHTML == 'Backspace' ||
      event.code == 'Enter' && el.innerHTML == 'Enter' ||
      event.code == 'Delete' && el.innerHTML == 'Del' ||
      event.code == 'ArrowUp' && el.innerHTML == 'Up' ||
      event.code == 'ArrowLeft' && el.innerHTML == 'Lt' ||
      event.code == 'ArrowDown' && el.innerHTML == 'Dn' ||
      event.code == 'ArrowRight' && el.innerHTML == 'Rt' ||
      event.code == 'ControlLeft' && el.innerHTML == 'Ctrl' ||
      event.code == 'ControlRight' && el.innerHTML == 'Ctrl' ||
      event.code == 'Win' && el.innerHTML == 'Win' ||
      event.code == 'Altleft' && el.innerHTML == 'Alt' ||
      event.code == 'AltRight' && el.innerHTML == 'Alt') {
        el.classList.add('active');
    }    
  });
};

export default keyDown;
