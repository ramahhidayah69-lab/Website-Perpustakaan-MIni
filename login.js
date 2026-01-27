document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // KEMBALI KE LOCALHOST
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Selamat Datang!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", email); // Simpan email untuk index.js
      window.location.href = "index.html"; 
    } else {
      alert(data.message || "Login gagal!");
    }
  } catch (error) {
    alert("Gagal terhubung ke server lokal. Pastikan sudah ketik 'node server.js' di terminal.");
  }
});
