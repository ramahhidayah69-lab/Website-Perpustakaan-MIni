const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Melayani File Statis agar CSS & Gambar muncul di laptop
app.use(express.static(path.join(__dirname)));

// Koneksi ke MongoDB Atlas (Tetap pakai Cloud agar data tidak hilang)
const mongoURI = "mongodb+srv://shahansyah:Integrated24@pustakaid.qlebj9i.mongodb.net/PustakaMini?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI)
  .then(() => console.log(">>> Terhubung ke MongoDB Atlas Cloud!"))
  .catch((err) => console.error(">>> Gagal konek ke Atlas:", err));

// Skema User
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Route API Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: "Login Berhasil!", status: "success" });
    } else {
      res.status(401).json({ message: "Email atau Password salah!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route Utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Jalankan Server di Port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`Server jalan di: http://localhost:${PORT}`);
  console.log(`=========================================`);
});
