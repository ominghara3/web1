// =======================
// Register Form Handling
// =======================
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    // Simpan data user ke localStorage
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // Redirect ke halaman login
  });

// =======================
// Login Form Handling
// =======================
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Ambil data user dari localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    alert("Login successful!");
    window.location.href = "storage.html"; // Redirect ke halaman Home
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Ambil nilai dari input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Cek username dan password (Contoh validasi sederhana)
  if (username === "admin" && password === "12345") {
    // Simpan status login ke Local Storage
    localStorage.setItem("isLoggedIn", "true");

    // Redirect ke blogs.html
    window.location.href = "blogs.html";
  } else {
    alert("Username atau password salah!");
  }
});
