const loginForm = document.querySelector(".login-form");
const loginUsername = document.querySelector(".login-form #username");
const logoutForm = document.querySelector("#logout");
const greeting = document.querySelector("#logout #greeting");

function loginSuccess(username) {
    loginForm.classList.add("hidden");
    greeting.innerHTML = `Welcome, ${username}!`;
    logoutForm.classList.remove("hidden");
}

function doLogin(e, onLoad) {
    const username = localStorage.getItem("username") || loginUsername.value;
    try {
        e.preventDefault();
    } catch (err) {
        console.log(`username: ${username}`);
    }
    if (username == "" && !onLoad) {
        alert("Please Write Your Name!");
        return;
    }
    localStorage.setItem("username", username);
    if (username) loginSuccess(username);
}

document.querySelector(".login-form button").onclick = doLogin;

document.querySelector("#logout #button-logout").onclick = function (e) {
    e.preventDefault();
    localStorage.removeItem("username");
    loginForm.classList.remove("hidden");
    logoutForm.classList.add("hidden");
};

doLogin(null, true);
