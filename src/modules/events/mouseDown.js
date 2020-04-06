import { removeLetter, arrowStep } from './keysEvents/removeLetter';

const mouseDown = (event) => {
  const textarea = document.querySelector('textarea');

  document.querySelectorAll('.row .key').forEach((el) => {
    if (event.target === el) {
      el.classList.add('active');
      if (el.classList.contains('key__regular')) {
        textarea.value += event.target.innerHTML;
      }
    }
  });

  switch (event.target.innerHTML) {
    case 'Backspace':
      textarea.value = removeLetter(textarea, -1, 0);
      break;

    case 'Tab':
      textarea.value += '    ';
      break;

    case 'Del':
      textarea.value = removeLetter(textarea, 0, 1);
      break;

    case 'Enter':
      textarea.value += '\n';
      break;

    case 'Caps Lock':
      break;

    case 'Up':
      break;

    case 'Lt':
      arrowStep(textarea, -1);
      break;

    case 'Dn':
      break;

    case 'Rt':
      arrowStep(textarea, 1);
      break;

    default: break;
  }
};

export default mouseDown;
