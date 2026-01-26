const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Koneksi ke MongoDB Atlas
const mongoURI = 'mongodb://localhost:27017/pustakaMini'; // Ganti dengan URI MongoDB Atlas Anda
mongoose.connect(mongoURI)
    .then(() => console.log('Terhubung ke MongoDB Atlas!'))
    .catch(err => console.error('Gagal konek:', err));

// Skema Database User
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// API Registrasi
app.post("/api/register", async (req, res) => {
    try {
        const userBaru = new User(req.body);
        await userBaru.save();
        res.status(201).json({ message: "Registrasi Berhasil!" });
    } catch (error) {
        res.status(400).json({ error: "Email sudah terdaftar!" });
    }
});

// API Login
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

app.listen(5000, () => console.log("Server jalan di port 5000"));