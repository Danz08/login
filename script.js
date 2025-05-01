function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (username === "" || password === "") {
    alert("Username dan password harus diisi!");
  } else {
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);
    alert("Registrasi berhasil! Selamat Datang " +username);
  }
}

function login() {
  const inputUsername = document.getElementById("loginUsername").value.trim();
  const inputPassword = document.getElementById("loginPassword").value.trim();

  const storedUsername = localStorage.getItem("registeredUsername");
  const storedPassword = localStorage.getItem("registeredPassword");

  if (inputUsername === "" || inputPassword === "") {
    alert("Username dan password harus diisi!");
  } else if (inputUsername === storedUsername && inputPassword === storedPassword) {
    alert("Login berhasil! Selamat datang, " + inputUsername);
  } else {
    alert("Login gagal! Username atau password salah.");
  }
}