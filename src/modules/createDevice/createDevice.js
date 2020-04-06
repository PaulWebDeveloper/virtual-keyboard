const createDevice = () => {
  let out = '<div class="device"><div class="text"><textarea></textarea></div>';
  out += '<div class="keyboard"></div></div>';

  document.querySelector('body').innerHTML = out;
};

export default createDevice;
