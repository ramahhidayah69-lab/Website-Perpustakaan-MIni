/**
 * 1. SISTEM GOOGLE LOGIN ASLI
 * Fungsi ini menangkap data setelah user memilih akun Google.
 */
function handleGoogleLogin(response) {
  try {
    // Membaca data profil asli dari Google (JWT Token)
    const payload = decodeJwtResponse(response.credential);
    console.log("Data Profil Google:", response);

    // Simpan data ke memori browser agar terbaca di index.html (Beranda)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", payload.email);
    localStorage.setItem("userName", payload.name); // Contoh: MUHAMMAD SHAHAN SYAH...

    alert("Selamat Datang di PustakaMini, " + payload.name + "!");

    // Pindah ke Beranda setelah login berhasil
    window.location.href =
      "https://shahansyah.github.io/Website-Perpustakaan-MIni";
  } catch (error) {
    console.error("Gagal memproses login Google:", error);
    alert("Terjadi kesalahan saat login dengan Google.");
  }
}

/**
 * 2. FUNGSI PEMBANTU (DECODE JWT)
 * Digunakan untuk membongkar token rahasia dari Google menjadi data nama & email.
 */
function decodeJwtResponse(token) {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );
  return JSON.parse(jsonPayload);
}

/**
 * 3. SISTEM MANUAL (FORM REGISTRASI)
 * Menangani pendaftaran menggunakan email dan password manual.
 */
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Registrasi Berhasil! Silakan masuk.");
        window.location.href = "login.html";
      } else {
        alert("Email sudah digunakan atau server bermasalah.");
      }
    } catch (err) {
      console.error("Error Backend:", err);
      alert("Server Backend (Node.js) belum dijalankan atau tidak terjangkau!");
    }
  });
}
