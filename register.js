const registerForm = document.getElementById("registerForm");
const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");
const registerMessage = document.getElementById("registerMessage");
const backToLogin = document.getElementById("backToLogin");

function togglePasswordVisibility(input, button) {
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  button.textContent = isPassword ? "🙈" : "👁";
  button.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
}

document.getElementById("toggleRegisterPassword").addEventListener("click", function () {
  togglePasswordVisibility(registerPassword, this);
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
  togglePasswordVisibility(confirmPassword, this);
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

registerForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = registerName.value.trim();
  const email = registerEmail.value.trim().toLowerCase();
  const password = registerPassword.value;
  const confirmation = confirmPassword.value;

  registerMessage.className = "login-message";

  if (password !== confirmation) {
    registerMessage.textContent = "Passwords do not match.";
    registerMessage.classList.add("error");
    return;
  }

  if (password.length < 6) {
    registerMessage.textContent = "Password must be at least 6 characters.";
    registerMessage.classList.add("error");
    return;
  }

  registerMessage.textContent = "Creating your account...";

  // REAL SUPABASE AUTHENTICATION
  if (window.MATHHUB_SUPABASE_CONFIGURED && window.mathHubSupabase) {
    const { data, error } = await window.mathHubSupabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name
        },
        emailRedirectTo: window.location.origin + window.location.pathname.replace(/register\.html$/, "index.html")
      }
    });

    if (error) {
      registerMessage.textContent = error.message;
      registerMessage.classList.add("error");
      return;
    }

    if (data.session) {
      registerMessage.textContent = "Account created! Redirecting...";
      registerMessage.classList.add("success");

      setTimeout(function () {
        window.location.href = "index.html";
      }, 500);
    } else {
      registerMessage.textContent = "Account created. Check your email to confirm your account, then log in.";
      registerMessage.classList.add("success");
    }
    return;
  }

  // Temporary local demo fallback until Supabase is configured.
  const accounts = getAccounts();
  const existingAccount = accounts.find(function (account) {
    return account.email === email;
  });

  if (existingAccount) {
    registerMessage.textContent = "An account with this email already exists.";
    registerMessage.classList.add("error");
    return;
  }

  const passwordHash = await hashPassword(password);

  accounts.push({
    name: name,
    email: email,
    passwordHash: passwordHash,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem("mathHubAccounts", JSON.stringify(accounts));

  registerMessage.textContent = "Account created successfully! Redirecting to login...";
  registerMessage.classList.add("success");

  setTimeout(function () {
    window.location.href = "login.html";
  }, 900);
});

backToLogin.addEventListener("click", function () {
  window.location.href = "login.html";
});
