import removeLetter from './keysEvents/removeLetter';

const mouseDown = (event) => {
  let textarea = document.querySelector('textarea');

  document.querySelectorAll('.row .key').forEach(el => {
    if (event.target == el) {
      el.classList.add('active');
      if(el.classList.contains('key__regular')) {
        textarea.value += event.target.innerHTML;
      }
    }
  });

  switch (event.target.innerHTML) {
    case 'Backspace': 
      textarea = removeLetter(textarea, -1, 0);
      break;

    case 'Tab': 
      textarea.value += '    ';
      break;

    case 'Del': 
      textarea = removeLetter(textarea, 0, 1);
      break;

    case 'Enter': 
      textarea.value += '\n';
      break;

    case 'Caps Lock': 
      break;

    case 'Shift': 
      break;

    case 'Ctrl': 
      break;

    case 'Win': 
      break;

    case 'Alt': 
      break;

    case 'Up': 
      break;

    case 'Lt': 
      break;

    case 'Dn': 
      break;

    case 'Rt': 
      break;

    default: break;
  }
};

export default mouseDown;
