# 📚 PustakaMini Digital Gateway

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Version-1.0.2-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Build-Stable-green?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>

> **"Menghubungkan Literasi dengan Teknologi"** — PustakaMini adalah sistem katalog perpustakaan digital yang dirancang untuk efisiensi komunikasi antara mahasiswa dan pustakawan melalui integrasi API WhatsApp yang dioptimalkan.

---

## 🛠️ Spesifikasi Arsitektur

### 📡 WhatsApp Integration Logic

Proyek ini mengimplementasikan dua lapis metode pengiriman pesan untuk menjamin stabilitas 100%:

- **Primary (Direct wa.me)**: Menggunakan enkripsi URL standar untuk pengiriman cepat tanpa watermark dan tanpa ketergantungan pada status perangkat pengirim.
- **Secondary (Fonnte API Fallback)**: Sistem cadangan otomatis yang dipicu jika diperlukan pengiriman pesan di latar belakang (Background Process).

### 📱 Responsive UI System

Layout dibangun dengan prinsip _Fluid Design_ agar kompatibel di berbagai perangkat:

- **Navigation**: Hamburger menu berbasis Bootstrap 5.3 yang telah diperbaiki dari konflik CSS kustom.
- **Positioning**: Penggunaan class `ms-auto` untuk memastikan konsistensi posisi menu di sisi kanan layar pada semua halaman.
- **Breakpoints**: Optimasi khusus pada layar <768px untuk merubah layout kartu buku menjadi mode vertikal tunggal.

---

## 📂 Pemetaan Struktur File

| File Name     | Spesifikasi Teknis | Fungsi Utama                                        |
| :------------ | :------------------------ | :-------------------------------------------------- |
| `index.html`  | Hero & Card Layout        | Gerbang utama informasi koleksi unggulan.           |
| `detail.html` | Flexbox Container         | Halaman penampil sinopsis dan metadata buku.        |
| `kontak.html` | Form Validation           | Antarmuka penginputan data NIM dan Nama.            |
| `kontak.js`   | Event Listener API        | Logika pemrosesan string menjadi URL WhatsApp.      |
| `detail.css`  | Media Queries             | Pengatur responsivitas elemen gambar dan deskripsi. |
| `koleksi.html`| Hero & Card Layout        | Gerbang Informasi terkait Koleksi buku              |
| `koleksi.css` | Media Queries             | Pengatur responsivitas elemen gambar dan deskripsi. |
| `koleksi.js ` | Data Rendering Management | Bertanggung jawab untuk mengambil data katalog buku dari objek JavaScript dan menampilkannya secara dinamis ke dalam elemen HTML. |                      |                      

---

## ⚙️ Cara Instalasi & Penggunaan

1. **Persiapan Folder**: Pastikan struktur folder sesuai dengan pemetaan di atas agar pemanggilan file `.js` dan `.css` tidak terputus.
2. **Konfigurasi Nomor**: Ubah variabel `nomorWa` pada file `kontak.js` sesuai dengan nomor tujuan admin.
3. **Pemujaan Bootstrap**: Pastikan koneksi internet stabil atau gunakan file lokal Bootstrap untuk merender menu hamburger secara sempurna.
4. **Keamanan**: Tambahkan file `.gitignore` jika Anda ingin menyembunyikan token API pribadi sebelum diunggah ke publik.

---

## 📝 Troubleshooting & Optimization

- **Issue**: Tombol hamburger tidak bereaksi saat diklik.
- **Fix**: Pastikan file `bootstrap.bundle.min.js` diletakkan tepat sebelum tag penutup `</body>`.
- **Issue**: Pesan error "Disconnected Device".
- **Fix**: Pastikan HP pengirim terhubung di dashboard Fonnte atau beralih ke metode `wa.me` yang lebih stabil.

---

<p align="center">
  <b>PustakaMini Open Project</b><br>
  Dirancang untuk kemudahan akses informasi oleh mahasiswa.
</p>

## 👥 Tim Pengembang (Kelompok UAS IMK)
* **[Shahan Syah Naufal]** - Lead Developer & Logic JS
* **[Ramah Hidayah]** - UI Designer & CSS Specialist
* **[Kesyfi anand]** - Content Writer & Documentation

