function sendToWhatsApp() {
  // 1. Ambil nilai berdasarkan ID baru yang kamu buat
  const nim = document.getElementById("wa_nim").value;
  const nama = document.getElementById("wa_nama").value;
  const pesan = document.getElementById("wa_message").value;

  // 2. Validasi input
  if (nim === "" || nama === "" || pesan === "") {
    alert("Harap isi NIM, Nama, dan Pesan terlebih dahulu!");
    return;
  }

  // 3. Susun pesan tanpa watermark fonnte 
  const messageText =
    `*Pesan Dari Website PustakaMini*\n\n` +
    `NIM: ${nim}\n` +
    `Nama: ${nama}\n` +
    `Pesan: ${pesan}\n` +
    `_Mohon Segera Ditindak Lanjuti Untuk pesannya._`;

  // 4. Kirim via API Fonnte
  fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: {
      Authorization: "YdNFYsQUMjGpgCEpZ6bG", // Token kamu
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      target: "6282338609452", // Nomor tujuan
      message: messageText,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.status) {
        alert("✅ Pesan terkirim otomatis!");
        document.getElementById("contactForm").reset();
      } else {
        // Jika Fonnte disconnected, gunakan link manual wa.me (Tanpa Watermark)
        console.warn("Fonnte disconnected, switching to wa.me");
        const manualUrl = `https://wa.me/6282338609452?text=${encodeURIComponent(
          messageText
        )}`;
        window.open(manualUrl, "_blank");
      }
    })
    .catch((err) => {
      // Jika terjadi error koneksi, buka wa.me
      const manualUrl = `https://wa.me/6282338609452?text=${encodeURIComponent(
        messageText
      )}`;
      window.open(manualUrl, "_blank");
    });
}


// yang menggunakan api offline

// function sendToWhatsApp() {
//   // 1. Ambil nilai berdasarkan ID Nim, Nama, dan Pesan
//   const nim = document.getElementById("wa_nim").value;
//   const nama = document.getElementById("wa_nama").value;
//   const pesan = document.getElementById("wa_message").value;

//   // 2. Validasi agar tidak ada kolom yang kosong
//   if (nim === "" || nama === "" || pesan === "") {
//     alert("Harap isi NIM, Nama, dan Pesan terlebih dahulu!");
//     return;
//   }

//   // 3. Susun format pesan
//   // Gunakan asteris (*) untuk Tebal dan underscore (_) untuk Miring
//   const messageText =
//     `*Pesan Mahasiswa PustakaMini*%0A%0A` +
//     `_NIM:_ ${encodeURIComponent(nim)}%0A` +
//     `_Nama:_ ${encodeURIComponent(nama)}%0A` +
//     `_Pesan:_ ${encodeURIComponent(pesan)}%0A` +
//     `*_Pesan Mahasiswa PustakaMini_*`;
//   // 4. Gunakan URL wa.me agar bersih tanpa watermark sama sekali
//   // Metode ini sama persis dengan yang kamu gunakan di Toastopia
//   const url = `https://wa.me/6282338609452?text=${messageText}`;

//   // 5. Buka WhatsApp di tab baru
//   window.open(url, "_blank");

//   // Reset form setelah tombol diklik agar bersih kembali
//   document.getElementById("contactForm").reset();
