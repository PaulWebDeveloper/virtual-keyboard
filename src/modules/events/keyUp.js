const keyUp = (event) => {
  document.querySelectorAll('.row .key').forEach(el => {
      if (event.key == el.innerHTML) {
      setTimeout(function(){
      el.classList.remove('active');
      },500);
    }
  });
};

export default keyUp;
