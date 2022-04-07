let width = 0;
let intervalID = 0;
let isOpen = false;

function toggle() {
    if (isOpen === true) {
        slideOut();
        isOpen = false;
    } else {
        slideIn();
        isOpen = true;
    }
}

function slideIn() {
    intervalID = setInterval(show, 10);
}

function slideOut() {
    intervalID = setInterval(hide, 10);
}

function show() {
    const sidebar = document.getElementById("sidebar");
    width = sidebar.style.width;
    width = parseInt(width);
    if (width < 150) {
        width += 10;
        sidebar.style.width = `${width}px`;
    } else {
        clearInterval(intervalID);
    }
}

function hide() {
    const sidebar = document.getElementById("sidebar");
    width = sidebar.style.width;
    width = parseInt(width);
    if (width > 0) {
        width -= 10;
        sidebar.style.width = `${width}px`;
    } else {
        clearInterval(intervalID);
    }
}

function handleSubmit() {
    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");
    alert(`Username: ${uname.value}\nPassword: ${pass.value}`);
}
