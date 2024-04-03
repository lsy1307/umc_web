function nameCheck() {
    var name = document.getElementsByName("name_value")[0].value;
    var msg = document.getElementById("name_error")
    if (!isNaN(name)) {
        msg.textContent = '문자만 입력해주세요.';
        msg.style.color = 'red';
    }
    else if (name === '') {
        msg.textContent = '이름을 입력해주세요.';
        msg.style.color = 'red';
    }
    else {
        msg.textContent = '멋진 이름이네요!';
        msg.style.color = 'green';
    }
}
function emailCheck() {
    var email = document.getElementsByName("email_value")[0].value;
    var msg = document.getElementById("email_error")
    if (typeof (email) != "string") {
        msg.textContent = '문자만 입력해주세요.';
        msg.style.color = 'red';
    }
    else if (email.indexOf('@') === -1) {
        msg.textContent = '올바른 형식이 아닙니다.';
        msg.style.color = 'red';
    }
    else {
        msg.textContent = '올바른 이메일 형식입니다!';
        msg.style.color = 'green';
    }
}
function ageCheck() {
    var age = document.getElementsByName("age_value")[0].value;
    var int_age = parseInt(age, 10);
    var msg = document.getElementById("age_error")
    if (isNaN(int_age)) {
        msg.textContent = '숫자만 입력해주세요.';
        msg.style.color = 'red';
    }
    else if (age.indexOf('.') !== -1) {
        msg.textContent = '소수가 아닌 값을 입력해 주세요.';
        msg.style.color = 'red';
    }
    else if (int_age < 0) {
        msg.textContent = '음수가 아닌 값을 입력해 주세요.';
        msg.style.color = 'red';
    }
    else if (int_age < 19) {
        msg.textContent = '19세 이상만 가입 가능합니다.';
        msg.style.color = 'red';
    }
    else {
        msg.textContent = '올바른 나이 형식입니다!';
        msg.style.color = 'green';
    }
}
function pwCheck() {
    var pw = document.getElementsByName("pw_value")[0].value;
    var msg = document.getElementById("pw_error")
    var pattern_num = /[0-9]/;
    var pattern_eng = /[a-zA-Z]/;
    var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;
    var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (pw.length < 4) {
        msg.textContent = '비밀번호는 최소 4자리 입니다.';
        msg.style.color = 'red';
    }
    else if (pw.length > 12) {
        msg.textContent = '비밀번호는 최대 12자리 입니다.';
        msg.style.color = 'red';
    }
    else if (!pattern_num.test(pw) || !pattern_eng.test(pw) || !pattern_spc.test(pw) || pattern_kor.test(pw)) {
        msg.textContent = '영문, 숫자, 특수문자를 조합해 주세요.';
        msg.style.color = 'red';
    }
    else {
        msg.textContent = '안전한 비밀번호 입니다!';
        msg.style.color = 'green';
    }
}
function pwcCheck() {
    var pw = document.getElementsByName("pw_value")[0].value;
    var pwc = document.getElementsByName("pwc_value")[0].value;
    var msg = document.getElementById("pwc_error")
    if (pw !== pwc) {
        msg.textContent = '비밀번호가 다릅니다.';
        msg.style.color = 'red';
    }
    else {
        msg.textContent = '비밀번호가 일치합니다.';
        msg.style.color = 'green';
    }
}
const register = document.getElementById("register");
const inputs = document.querySelectorAll('.text_input:not([name="name"])');
inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        let check = true;
        inputs.forEach(input => {
            if (input.value === '') {
                check = false;
            }
        });
        register.disabled=!check;
    });
});
register.onclick = (event) => {
    event.preventDefault();
    nameCheck();
    emailCheck();
    ageCheck();
    pwCheck();
    pwcCheck();
}
