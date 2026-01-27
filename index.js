document.addEventListener("DOMContentLoaded", function () {
  // 1. Ambil data dari localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userName = localStorage.getItem("userName");

  // 2. Hubungkan ke elemen HTML
  const profileArea = document.getElementById("userProfile");
  const nameDisplay = document.getElementById("userNameDisplay");
  const logoutBtn = document.getElementById("logoutItem");

  // 3. Logika Proteksi & Penampilan
  if (isLoggedIn === "true" && userName) {
    // Tampilkan Area Profil dan Tombol Logout
    if (profileArea) {
      profileArea.style.setProperty("display", "flex", "important");
    }
    if (logoutBtn) {
      logoutBtn.style.display = "block";
    }

    // Tampilkan Nama User (Ambil nama depan saja jika formatnya email)
    const namePart = userName.split("@")[0].toUpperCase();
    if (nameDisplay) {
      nameDisplay.innerText = namePart;
    }
  } else {
    // REVISI: Karena file sudah satu folder, hapus "server/"
    window.location.href = "login.html";
  }
});

// Fungsi Logout
function logout() {
  if (confirm("Yakin ingin keluar?")) {
    // Hapus status login agar proteksi DOMContentLoaded di atas bekerja
    localStorage.removeItem("isLoggedIn");

    alert("Anda telah keluar. Sampai jumpa kembali!");

    // REVISI: Langsung ke login.html tanpa folder server/
    window.location.href = "login.html";
  }
}
