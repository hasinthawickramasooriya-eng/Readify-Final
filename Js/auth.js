function setupGlobalLogin() {
  if (!document.getElementById("auth-modal")) {
    const modalHTML = `
      <div id="auth-modal" class="auth-modal">
        <div class="auth-content" style="background: var(--card-bg); color: var(--text-color);">
          <span class="close-auth" onclick="closeAuthModal()">&times;</span>

          <div id="login-form-container">
            <h2 style="color: var(--primary-color);">Welcome Back</h2>
            <p style="opacity: 0.7; margin-bottom: 20px;">Sign in to your library.</p>
            <input type="text" id="login-username" placeholder="Username" style="background: white; color: #333; border: 1px solid #ddd;">
            <button class="cta-btn" style="width: 100%; margin-top:10px;" onclick="performAuth('login')">Sign In</button>
            <p class="auth-toggle-link" 
               onclick="toggleAuthMode('register')"
               style="color: var(--primary-color); cursor: pointer; text-decoration: underline; font-size: 0.9rem; margin-top: 15px; display: inline-block;">
                New here? Create an account
            </p>
          </div>

          <div id="register-form-container" style="display: none;">
            <h2 style="color: var(--accent-color);">Join Readify</h2>
            <p style="opacity: 0.7; margin-bottom: 20px;">Start your reading journey today.</p>
            <input type="text" id="reg-username" placeholder="Choose Username" style="background: white; color: #333; border: 1px solid #ddd;">
            <input type="email" id="reg-email" placeholder="Email Address" style="background: white; color: #333; border: 1px solid #ddd;">
            <button class="cta-btn" style="width: 100%; margin-top:10px; background: var(--accent-color);" onclick="performAuth('register')">Register</button>
            <p class="auth-toggle-link" 
               onclick="toggleAuthMode('login')"
               style="color: var(--primary-color); cursor: pointer; text-decoration: underline; font-size: 0.9rem; margin-top: 15px; display: inline-block;">
                Already have an account? Login
            </p>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }
  checkLoginStatus();
}

function toggleAuthMode(mode) {
  const loginBox = document.getElementById("login-form-container");
  const registerBox = document.getElementById("register-form-container");
  if (!loginBox || !registerBox) return;

  if (mode === "register") {
    loginBox.style.display = "none";
    registerBox.style.display = "block";
  } else {
    loginBox.style.display = "block";
    registerBox.style.display = "none";
  }
}

function performAuth(type) {
  const usernameId = type === "login" ? "login-username" : "reg-username";
  const usernameEl = document.getElementById(usernameId);
  if (!usernameEl) return;

  const username = (usernameEl.value || "").trim();
  if (username) {
    localStorage.setItem("readifyUser", username);
    closeAuthModal();
    checkLoginStatus();
    alert(type === "login" ? `Welcome back, ${username}!` : `Account created! Welcome, ${username}!`);
  } else {
    alert("Please enter a username.");
  }
}

function checkLoginStatus() {
  const user = localStorage.getItem("readifyUser");
  const loginContainer = document.getElementById("login-container");
  if (!loginContainer) return;

  if (user) {
    const initial = user.charAt(0).toUpperCase();
    loginContainer.innerHTML = `
      <div class="user-avatar" 
        title="Signed in as ${user}" 
        onclick="toggleAccountMenu()" 
        style="cursor:pointer; width:38px; height:38px; background: var(--primary-color); color:white; border-radius:50%;
               display:flex; align-items:center; justify-content:center; font-weight:bold; border: 2px solid white; box-shadow: var(--shadow);">
        ${initial}
      </div>
    `;
  } else {
    loginContainer.innerHTML = `
      <a href="#" class="login-link" onclick="openAuthModal()" 
         style="color: var(--primary-color); font-weight: bold; text-decoration:none;">
        <i class="fas fa-user-circle"></i> Login
      </a>
    `;
  }
}

function toggleAccountMenu() {
    const accountView = document.getElementById('account-view');
    
    if (accountView) {
        if (accountView.style.display === 'none' || accountView.style.display === '') {
            if (typeof showAccount === "function") showAccount();
        } else {
            if (typeof hideAccount === "function") hideAccount();
        }
    } else {
        if (confirm("Go to your Saved Library? (Canceling will log you out)")) {
            window.location.href = "index.html";
            localStorage.setItem("openLibrary", "true");
        } else {
            logout();
        }
    }
}

function openAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "flex";
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "none";
}

function logout() {
    localStorage.removeItem("readifyUser");
    checkLoginStatus();
    window.location.href = "index.html"; 
}

document.addEventListener("DOMContentLoaded", () => {
    setupGlobalLogin();
    
    if (localStorage.getItem("openLibrary") === "true" && document.getElementById('account-view')) {
        localStorage.removeItem("openLibrary");
        showAccount();
    }
});