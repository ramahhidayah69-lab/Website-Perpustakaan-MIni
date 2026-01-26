document.addEventListener("DOMContentLoaded", function () {
  // 1. Ambil data dari memori browser
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userName = localStorage.getItem("userName"); // Ambil nama asli dari Google
  if (userName) {
    document.getElementById("userNameDisplay").innerText =
      userName.toUpperCase();
  }

  // 2. Hubungkan ke elemen HTML
  const profileArea = document.getElementById("userProfile");
  const nameDisplay = document.getElementById("userNameDisplay");
  const logoutBtn = document.getElementById("logoutItem");

  // 3. Logika Penampilan
  if (isLoggedIn === "true" && userName) {
    // Tampilkan profil dan tombol logout
    profileArea.style.setProperty("display", "flex", "important");
    logoutBtn.style.display = "block";

    // Ambil nama depan (misal: "muhammad@mail.com" jadi "MUHAMMAD")
    const namePart = userEmail.split("@")[0].toUpperCase();
    nameDisplay.innerText = namePart;
  } else {
    // Jika belum login, paksa kembali ke halaman login
    window.location.href = "server/login.html";
  }
});

// Di file index.js (Bagian fungsi Logout)
function logout() {
  if (confirm("Yakin ingin keluar?")) {
    // Jangan pakai localStorage.clear() karena akan menghapus nama selamanya
    // Cukup hapus status loginnya saja
    localStorage.removeItem("isLoggedIn");

    alert("Anda telah keluar. Sampai jumpa kembali!");
    window.location.href = "server/login.html";
  }
}

// Tambahkan logika di Beranda untuk mematikan akses jika tidak login
document.addEventListener("DOMContentLoaded", () => {
  const status = localStorage.getItem("isLoggedIn");
  if (status !== "true") {
    window.location.href = "server/login.html";
  } else {
    const name = localStorage.getItem("userName");
    document.getElementById("userNameDisplay").innerText = name.toUpperCase();
    document
      .getElementById("userProfile")
      .style.setProperty("display", "flex", "important");
  }
});
