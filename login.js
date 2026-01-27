document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Pastikan input tidak kosong sebelum fetch
  if (!email || !password) {
    alert("Email dan Password harus diisi!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Selamat Datang!");

      // 1. Simpan status ke localStorage agar index.js bisa mendeteksi login
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      // Mengambil nama depan (misal: "haikal@mail.com" jadi "haikal")
      localStorage.setItem("userName", email.split("@")[0]);

      // 2. Redirect ke index.html
      // Karena semua file sudah sejajar di folder SERVER, cukup panggil namanya
      window.location.href = "index.html";
    } else {
      // Menampilkan pesan error dari backend jika ada (misal: Password Salah)
      alert(data.message || "Login gagal, periksa email/password.");
    }
  } catch (error) {
    console.error("Error saat login:", error);
    alert(
      "Gagal terhubung ke server. Pastikan 'node server.js' jalan di terminal!",
    );
  }
});
