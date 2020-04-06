import languages from '../createKeyboard/keyboardBuilder';
import loadingKeyboard from '../createKeyboard/loadingKeyboard';

const curLangStor = ['eng', 'rus'];

let ctrl = false;
let currentLanguage = 0;

if (localStorage.getItem('lang') === 'rus') {
  currentLanguage += 2;
}

const changeLanguage = () => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
      loadingKeyboard(languages[currentLanguage + 1]);
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
      loadingKeyboard(languages[currentLanguage]);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Control') {
      ctrl = true;
    }
    if (e.key === 'Shift' && ctrl) {
      currentLanguage += 2;
      if (currentLanguage === languages.length) {
        currentLanguage = 0;
      }
      loadingKeyboard(languages[currentLanguage]);
      localStorage.setItem('lang', curLangStor[currentLanguage / 2]);
      ctrl = false;
    }
  });
};

export default changeLanguage;
