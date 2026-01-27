document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const cards = document.querySelectorAll(".card");

  // Ambil elemen pesan "Tidak Ditemukan" yang akan kita buat di HTML
  const noResults = document.getElementById("noResults");

  function filterKoleksi() {
    const keyword = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value.toLowerCase();

    let foundCount = 0; // Tambahkan penghitung buku yang cocok

    cards.forEach((card) => {
      const title = card.querySelector(".book-title").innerText.toLowerCase();
      const author = card.querySelector(".author").innerText.toLowerCase();
      const category = card.getAttribute("data-category").toLowerCase();

      const matchesSearch = title.includes(keyword) || author.includes(keyword);
      const matchesCategory =
        selectedCategory === "semua" || category === selectedCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = "block";
        foundCount++; // Tambah satu setiap ada buku yang cocok
      } else {
        card.style.display = "none";
      }
    });

    // Cek jika tidak ada satupun buku yang ditemukan
    // ... kode bagian atas tetap sama ...

    // Cek jika tidak ada satupun buku yang ditemukan
    if (foundCount === 0) {
      noResults.style.display = "flex"; // UBAH ke 'flex' agar bisa ke tengah
      document.getElementById("bookGrid").style.display = "none"; // Sembunyikan grid agar tidak memakan ruang
    } else {
      noResults.style.display = "none";
      document.getElementById("bookGrid").style.display = "grid"; // Tampilkan kembali grid
    }
  }

  searchInput.addEventListener("input", filterKoleksi);
  categoryFilter.addEventListener("change", filterKoleksi);
});
