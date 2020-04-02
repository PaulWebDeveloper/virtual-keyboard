const mouseDown = (event) => {
  document.querySelectorAll('.row .key').forEach(el => {
    if (event.target == el) {
      el.classList.add('active');
      if(el.classList.contains('key__regular')) {
        document.querySelector('textarea').value += event.target.innerHTML;
      }
    }
  });
};

export default mouseDown;
