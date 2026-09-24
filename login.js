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
  togglePassword.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
});

function getAccounts() {
  return JSON.parse(localStorage.getItem("mathHubAccounts") || "[]");
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(function (byte) { return byte.toString(16).padStart(2, "0"); })
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

  loginMessage.textContent = "Signing in...";

  // REAL SUPABASE AUTHENTICATION
  if (window.MATHHUB_SUPABASE_CONFIGURED && window.mathHubSupabase) {
    const { data, error } = await window.mathHubSupabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      loginMessage.textContent = error.message;
      loginMessage.classList.add("error");
      return;
    }

    const user = data.user;
    localStorage.setItem("mathHubUser", JSON.stringify({
      id: user.id,
      name: user.user_metadata?.full_name || email.split("@")[0],
      email: user.email
    }));

    loginMessage.textContent = "Login successful! Redirecting...";
    loginMessage.classList.add("success");

    setTimeout(function () {
      window.location.href = "index.html";
    }, 500);
    return;
  }

  // Temporary local demo fallback until Supabase is configured.
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

forgotPassword.addEventListener("click", async function (event) {
  event.preventDefault();
  loginMessage.className = "login-message";

  if (window.MATHHUB_SUPABASE_CONFIGURED && window.mathHubSupabase) {
    const email = loginEmail.value.trim().toLowerCase();

    if (!email) {
      loginMessage.textContent = "Enter your email address first.";
      loginMessage.classList.add("error");
      return;
    }

    const { error } = await window.mathHubSupabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname.replace(/login\.html$/, "login.html")
    });

    loginMessage.textContent = error
      ? error.message
      : "If an account exists for that email, password recovery instructions have been sent.";
    loginMessage.classList.add(error ? "error" : "info");
    return;
  }

  loginMessage.textContent = "Password recovery will be available when Supabase is configured.";
  loginMessage.classList.add("info");
});

createAccountBtn.addEventListener("click", function () {
  window.location.href = "register.html";
});
