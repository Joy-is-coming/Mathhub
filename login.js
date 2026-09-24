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

function getAccounts() {
  return JSON.parse(localStorage.getItem("mathHubAccounts") || "[]");
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map(function (byte) {
      return byte.toString(16).padStart(2, "0");
    })
    .join("");
}

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value;

  loginMessage.className = "login-message";

  if (!email || !password) {
    loginMessage.textContent = "Please enter your email and password.";
    loginMessage.classList.add("error");
    return;
  }

  const accounts = getAccounts();
  const account = accounts.find(function (item) {
    return item.email === email;
  });

  if (!account) {
    loginMessage.textContent = "No account was found with this email.";
    loginMessage.classList.add("error");
    return;
  }

  const passwordHash = await hashPassword(password);

  if (passwordHash !== account.passwordHash) {
    loginMessage.textContent = "Incorrect email or password.";
    loginMessage.classList.add("error");
    return;
  }

  const user = {
    name: account.name,
    email: account.email,
    loggedInAt: new Date().toISOString()
  };

  localStorage.removeItem("mathHubSession");
  localStorage.removeItem("mathHubUser");
  sessionStorage.removeItem("mathHubSession");

  if (rememberMe.checked) {
    localStorage.setItem("mathHubUser", JSON.stringify(user));
  } else {
    sessionStorage.setItem("mathHubSession", JSON.stringify(user));
  }

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
  window.location.href = "register.html";
});
