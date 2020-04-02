const mouseUp = (event) => {
  document.querySelectorAll('.row .key').forEach(el => {
      if (event.target == el) {
      setTimeout(function(){
      el.classList.remove('active');
      },500);
    }
  });
};

export default mouseUp;
