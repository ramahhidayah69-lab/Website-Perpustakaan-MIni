const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Melayani File Statis
app.use(express.static(__dirname)); 

// --- PERBAIKAN: Koneksi ke MongoDB Atlas ---
// Menggunakan link yang sudah kamu tes di Compass tadi
const mongoURI = 'mongodb+srv://shahansyah:Integrated24@pustakaid.qlebj9i.mongodb.net/PustakaMini?retryWrites=true&w=majority'; 

mongoose.connect(mongoURI)
    .then(() => console.log('Terhubung ke MongoDB Atlas Cloud!'))
    .catch(err => console.error('Gagal konek ke Atlas:', err));

// Skema Database User
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Route Utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

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

// Penyesuaian Port untuk Vercel
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("========================================");
    console.log(`Server PustakaMini jalan di port ${PORT}`);
    console.log("========================================");
});