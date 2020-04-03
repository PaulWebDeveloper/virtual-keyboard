const keyUp = () => {
  document.querySelectorAll('.row .key').forEach(el => {
    if (el.innerHTML !== 'Shift') {
      setTimeout(function() {
        el.classList.remove('active');
      },300);
    }
  });
};

export default keyUp;
