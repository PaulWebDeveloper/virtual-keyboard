import loadingKeyboard from './../createKeyboard/loadingKeyboard';
import languages from './../createKeyboard/keyboardBuilder';

const loadLanguage = () => {
  if ('eng' == localStorage.getItem('language') || localStorage.getItem('language') == null) {
    loadingKeyboard(languages[0]);
  } else {
    loadingKeyboard(languages[2]);
  }
};

export default loadLanguage;
