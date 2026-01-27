const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Melayani file statis agar CSS dan gambar muncul
app.use(express.static(path.join(__dirname))); 

// Link MongoDB Atlas kamu
const mongoURI = "mongodb+srv://shahansyah:Integrated24@pustakaid.qlebj9i.mongodb.net/PustakaMini?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(() => console.log('Koneksi Atlas Berhasil!'))
    .catch(err => console.error('Gagal konek:', err));

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

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

// Route utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));

module.exports = app;
