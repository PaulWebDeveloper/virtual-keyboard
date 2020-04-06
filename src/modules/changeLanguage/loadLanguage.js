import loadingKeyboard from '../createKeyboard/loadingKeyboard';
import languages from '../createKeyboard/keyboardBuilder';

const loadLanguage = () => {
  if (localStorage.getItem('lang') === 'eng' || localStorage.getItem('lang') === null) {
    loadingKeyboard(languages[0]);
  } else {
    loadingKeyboard(languages[2]);
  }
};

export default loadLanguage;
