const keyUp = (event) => {
  document.querySelectorAll('.row .key').forEach(el => {
      if (event.key == el.innerHTML) {
      setTimeout(function(){
      el.classList.remove('active');
      },300);
    }
  });
};

export default keyUp;
