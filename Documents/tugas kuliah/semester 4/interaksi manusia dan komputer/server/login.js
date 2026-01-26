document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Selamat Datang!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", email.split("@")[0]); // Simpan nama depan sebagai userName
      window.location.href = "http://localhost:5500/";
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Cek terminal! Apakah node server.js sudah jalan?");
  }
});
