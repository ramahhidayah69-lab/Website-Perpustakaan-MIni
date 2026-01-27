document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // KEMBALI KE LOCALHOST
        const response = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Registrasi Berhasil! Silakan Login.");
            window.location.href = "login.html";
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Gagal daftar. Server tidak merespon.");
    }
});
