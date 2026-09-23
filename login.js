const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const togglePassword = document.getElementById("togglePassword");
const rememberMe = document.getElementById("rememberMe");
const loginMessage = document.getElementById("loginMessage");
const forgotPassword = document.getElementById("forgotPassword");
const createAccountBtn = document.getElementById("createAccountBtn");

togglePassword.addEventListener("click", function () {
  const isPassword = loginPassword.type === "password";

  loginPassword.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "🙈" : "👁";
  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  loginMessage.className = "login-message";

  if (!email || !password) {
    loginMessage.textContent = "Please enter your email and password.";
    loginMessage.classList.add("error");
    return;
  }

  /*
    FRONT-END DEMO AUTHENTICATION

    This currently validates that the fields are filled and stores
    the login state locally. It is NOT secure authentication.

    A real MathHub account system will later connect this form
    to a backend/database and verify the password securely.
  */

  const user = {
    email: email,
    loggedInAt: new Date().toISOString()
  };

  const storageKey = rememberMe.checked
    ? "mathHubUser"
    : "mathHubSession";

  localStorage.setItem(storageKey, JSON.stringify(user));

  loginMessage.textContent = "Login successful! Redirecting...";
  loginMessage.classList.add("success");

  setTimeout(function () {
    window.location.href = "index.html";
  }, 700);
});

forgotPassword.addEventListener("click", function (event) {
  event.preventDefault();

  loginMessage.className = "login-message";
  loginMessage.textContent =
    "Password recovery will be connected when the account backend is added.";
  loginMessage.classList.add("info");
});

createAccountBtn.addEventListener("click", function () {
  loginMessage.className = "login-message";
  loginMessage.textContent =
    "The registration page is our next account feature.";
  loginMessage.classList.add("info");
});