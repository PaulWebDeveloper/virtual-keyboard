import loadingKeyboard from './../createKeyboard/loadingKeyboard';
import languages from './../createKeyboard/keyboardBuilder';

const loadLanguage = () => {
  if ('eng' == localStorage.getItem('lang') || localStorage.getItem('lang') == null) {
    loadingKeyboard(languages[0]);
  } else {
    loadingKeyboard(languages[2]);
  }
};

export default loadLanguage;
